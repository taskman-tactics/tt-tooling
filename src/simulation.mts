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

	for (let kc = 1; kc < activity.maxSimulationKC; kc++) {
		if (simulateKill(activity.tasks, ctx)) {
			return {
				killCount: kc,
				attacks: ctx.attacks,
			};
		}
	}

	throw new Error(stripIndents`
		Simulation exceeded ${activity.maxSimulationKC} KC.
		Territory: ${territory.name}
		Defence: ${ctx.defenceLeft} / ${territory.baseDefence}
		Time: ${hourFmt(activity.maxSimulationKC / activity.kph)}
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

	switch (attack.strategy) {
		case 'normal':
			ctx.defenceLeft -= Math.max(0, attack.minRoll);
			break;
		case 'machine-gun':
			ctx.defenceLeft -= Math.max(0, dmgRoll.total);
			break;

		default:
      		const exhaustiveCheck: never = attack.strategy;
	}

	return false;
}

function wasCaptured(ctx: SimulationContext) {
	return ctx.defenceLeft <= 0;
}
