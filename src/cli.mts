import stdev from '@stdlib/stats-base-stdev';
import { Table } from 'console-table-printer';
import { min, sum } from 'radashi';
import yargsParser from 'yargs-parser';
import { prepareTerritory } from '@/preparation.mts';
import { type Capture, type SimulationResult, simulateCapture } from '@/simulation.mts';
import { VAMPYRIUM } from '@/territories.mts';
import { execFmt, hourFmt, numFmt, pctFmt } from '@/util.mts';

const argv = yargsParser(process.argv.slice(2));

const DEFAULT_SAMPLE_SIZE = 1e3;

const SIMULATION_SAMPLES = argv.samples ?? DEFAULT_SAMPLE_SIZE;

const simTerritory = prepareTerritory(VAMPYRIUM);
const simulations: Record<string, SimulationResult> = {};
for (const activity of simTerritory.activities) {
	const captures: Capture[] = [];
	for (let _ = 0; _ < SIMULATION_SAMPLES; _++) {
		captures.push(simulateCapture(simTerritory, activity));
	}

	simulations[activity.name] = {
		activity,
		captures,
	};
}

const results = new Table({
	title: `${simTerritory.name} (${simTerritory.baseDefence} def)`,
	columns: [
		{ name: 'activityName', title: 'Activity' },
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

console.log(`SAMPLES: ${SIMULATION_SAMPLES}`);
console.log(`EXECUTION TIME: ${execFmt(performance.now())}`);
