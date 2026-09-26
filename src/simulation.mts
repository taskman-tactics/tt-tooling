/** biome-ignore-all lint/style/useForOf: using regular for loops is 3x faster */

import stdev from '@stdlib/stats-base-stdev';
import { Table } from 'console-table-printer';
import { min, sum, title } from 'radashi';
import type { NonEmptyTuple } from 'type-fest';
import yargsParser from 'yargs-parser';
import { rollDice, rollDiceMin } from '@/dice.mts';
import { type Activity, VAMPYRIUM } from '@/territories.mts';
import { execFmt, hourFmt, numFmt, pctFmt } from '@/util.mts';

const argv = yargsParser(process.argv.slice(2));

const DEFAULT_SAMPLE_SIZE = 1e3;
const SAMPLE_SIZE = argv.samples ?? DEFAULT_SAMPLE_SIZE;

type Capture = {
	killCount: number;
	attacks: NonEmptyTuple<string>;
};

type SimulationResult = {
	activity: Activity;
	captures: Capture[];
};

const territory = VAMPYRIUM;
const simulations: Record<string, SimulationResult> = {};
for (const [activityName, activity] of Object.entries(territory.activities)) {
	const captures: Capture[] = [];

	for (let _ = 0; _ < SAMPLE_SIZE; _++) {
		let defenceLeft = territory.baseDefence;
		const attacks: string[] = [];
		const tasks = Object.entries(activity.tasks);

		captureLoop: for (let kc = 1; ; kc++) {
			for (let i = 0; i < tasks.length; i++) {
				const [taskName, task] = tasks[i]!;
				let dropRoll = Math.random();
				if (dropRoll <= task.dropRate) {
					for (let rollNo = 0; rollNo < task.rolls.length; rollNo++) {
						const roll = task.rolls[rollNo]!;
						const attackName = task.rolls.length === 1 ? taskName : `${taskName}.${rollNo + 1}`;
						const dmgRoll = rollDice(roll);

						if (dmgRoll.total >= defenceLeft) {
							captures.push({
								killCount: kc,
								attacks: [attackName, ...attacks],
							});
							break captureLoop;
						}

						attacks.push(attackName);
						defenceLeft -= rollDiceMin(roll);
					}

					// TODO: handle pre, main and tertiary tables separately (3 loops)
					break;
				}

				dropRoll -= task.dropRate;
			}
		}
	}

	simulations[activityName] = {
		activity,
		captures,
	};
}

const results = new Table({
	title: `${territory.name} (${territory.baseDefence} def)`,
	columns: [
		{ name: 'activityName', title: 'Activity', transform: (v) => title(String(v)) },
		{ name: 'avgKillCount', title: 'Avg. KC', transform: numFmt },
		{ name: 'avgAttacks', title: 'Avg. Attacks', transform: numFmt },
		{ name: 'captureTime', title: 'Avg. Capture', transform: hourFmt },
		{ name: 'captureVariance', title: 'Variance', transform: numFmt },
	],
	sort: (rowA, rowB) => rowA.captureTime - rowB.captureTime,
	computedColumns: [
		{
			name: 'efficiency',
			title: 'Efficiency',
			function(currentRow, _, rows) {
				return min(rows, (row) => row.captureTime)?.captureTime / currentRow.captureTime;
			},
			transform: pctFmt,
		},
	],
});

for (const [activityName, simulation] of Object.entries(simulations)) {
	const killCountArray = simulation.captures.map((c) => c.killCount);
	const killCountSum = sum(killCountArray);
	const avgKillCount = killCountSum / simulation.captures.length;
	const attacksSum = sum(simulation.captures, (cap) => cap.attacks.length);
	const avgAttacks = attacksSum / simulation.captures.length;
	const captureTime = avgKillCount / simulation.activity.kph;
	const captureVariance = stdev(killCountArray.length, 0, killCountArray, 1) / avgKillCount;

	results.addRow({
		activityName,
		avgKillCount,
		avgAttacks,
		captureTime,
		captureVariance,
	});
}

results.printTable();

console.log(`SAMPLES: ${SAMPLE_SIZE}`);
console.log(`EXECUTION TIME: ${execFmt(performance.now())}`);
