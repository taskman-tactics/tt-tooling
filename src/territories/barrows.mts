import type { Task, Territory } from '@t/_all.mjs';
import type { NonEmptyTuple } from 'type-fest';

function brotherTasks(brother: string, weaponRolls: NonEmptyTuple<string>): Record<string, Task> {
	return {
		[`${brother}sArmor`]: {
			dropRate: 3 * 7 / (2448),
			attacks: ['1d4'],
			table: 'tertiary',
		},
		[`${brother}sWeapon`]: {
			dropRate: 7 / (2448),
			attacks: weaponRolls,
			table: 'tertiary',
		},
	};
}

export default {
	name: 'Barrows',
	baseDefence: 8,
	maxDefence: 12,
	activities: {
		barrows: {
			kph: 20,
			tasks: {
				// slightly innacurate because it assumes you could roll 14 items while the max is 7
				...brotherTasks('ahrim', ['3d12kh']),
				...brotherTasks('dharok', ['1d20']),
				...brotherTasks('guthan', ['1d10']), // TODO: special effect
				...brotherTasks('karil', ['1d10', '1d6']),
				...brotherTasks('torag', ['2d8']),
				...brotherTasks('verac', ['1d8+4']),
			},
		},
	},
} as Territory satisfies Territory;