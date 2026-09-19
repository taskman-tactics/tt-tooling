/** biome-ignore-all lint/style/useForOf: regular for loops are 3x faster */
/** biome-ignore-all lint/style/noNonNullAssertion: regular for loops with `noUncheckedIndexedAccess` is hard */

import { stripIndents } from 'common-tags';
import { flat } from 'radashi';
import { rollDice } from '@/dice.mts';
import type {
	PreppedActivity,
	PreppedAttack,
	PreppedTask,
	PreppedTerritory,
} from '@/preparation.mts';
import { hourFmt, listFmt } from '@/util.mts';

const MAX_SIMULATION_KC = 1e5;

export type Capture = {
	killCount: number;
	attacks: string[];
};

export type SimulationContext = {
	defenceLeft: number;
	attacks: string[];
};

export type SimulationResult = {
	activity: PreppedActivity;
	captures: Capture[];
};

export function simulateCapture(territory: PreppedTerritory, activity: PreppedActivity): Capture {
	const ctx: SimulationContext = {
		defenceLeft: territory.baseDefence,
		attacks: [],
	};

	for (let kc = 1; kc < MAX_SIMULATION_KC; kc++) {
		if (simulateKill(activity.tasks, ctx)) {
			return {
				killCount: kc,
				attacks: ctx.attacks,
			};
		}
	}

	throw new Error(stripIndents`
		Simulation exceeded ${MAX_SIMULATION_KC} KC.
		Territory: ${territory.name}
		Defence: ${ctx.defenceLeft} / ${territory.baseDefence}
		Time: ${hourFmt(MAX_SIMULATION_KC / activity.kph)}
		Activity: ${activity.name}
		${listFmt(
			'Tasks',
			flat(Object.values(activity.tasks)).map((t) => `${t.name} (${t.table})`)
		)}
		${listFmt('Attacks', ctx.attacks)}`);
}

function simulateKill(tasks: PreppedActivity['tasks'], ctx: SimulationContext) {
	const preDrop = simulateTable(tasks.pre, ctx);
	if (wasCaptured(ctx)) {
		return true;
	}

	if (!preDrop && simulateTable(tasks.main, ctx) && wasCaptured(ctx)) {
		return true;
	}

	simulateTable(tasks.tertiary, ctx, true);

	return wasCaptured(ctx);
}

function simulateTable(tasks: PreppedTask[], ctx: SimulationContext, isTertiary = false): boolean {
	let anyDrop = false;

	for (let i = 0; i < tasks.length; i++) {
		const task = tasks[i]!;

		if (simulateDrop(task, ctx)) {
			anyDrop = true;

			if (!isTertiary) {
				break;
			}

			if (wasCaptured(ctx)) {
				break;
			}
		}
	}

	return anyDrop;
}

function simulateDrop(task: PreppedTask, ctx: SimulationContext): boolean {
	const dropRoll = Math.random();
	if (dropRoll <= task.dropRate) {
		for (let j = 0; j < task.attacks.length; j++) {
			const attack = task.attacks[j]!;

			if (simulateAttack(attack, ctx)) {
				break;
			}
		}

		return true;
	}

	return false;
}

function simulateAttack(attack: PreppedAttack, ctx: SimulationContext): boolean {
	ctx.attacks.push(attack.name);

	const dmgRoll = rollDice(attack.dice);
	if (dmgRoll.total >= ctx.defenceLeft) {
		ctx.defenceLeft -= dmgRoll.total;
		return true;
	}

	ctx.defenceLeft -= attack.minRoll;
	return false;
}

function wasCaptured(ctx: SimulationContext) {
	return ctx.defenceLeft <= 0;
}
