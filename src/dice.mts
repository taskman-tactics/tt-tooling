import { type DieGroup, roll } from 'opendice';
import { sum } from 'radashi';
import type { MapValue } from '@/util.mts';

const MIN_ROLL_CACHE = new Map<string, number>();

export const rollDice = roll;

// I was tempted to just run it a bazillion times and get the minimum,
// but I think this will work 100% of the time
export function rollDiceMin(formula: string): number {
	if (MIN_ROLL_CACHE.has(formula)) {
		return MIN_ROLL_CACHE.get(formula) as MapValue<typeof MIN_ROLL_CACHE>;
	}

	const sampleRoll = roll(formula);
	const minRoll = sum(sampleRoll.dice, rollGroupMin) + sampleRoll.modifier;
	MIN_ROLL_CACHE.set(formula, minRoll);

	return minRoll;
}

function rollGroupMin(group: DieGroup) {
	const minFace = group.sign === 1 ? 1 : -group.sides;
	return minFace * group.kept.length * group.multiplier;
}
