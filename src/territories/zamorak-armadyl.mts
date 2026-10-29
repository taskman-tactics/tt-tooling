import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Zamorak & Armadyl',
	baseDefence: 6,
	maxDefence: 9,
	activities: {
		'kree\'ara': {
			kph: 30,
			tasks: {
				armadylHelmet: {
					dropRate: 1 / 384,
					attacks: ['1d6'],
					table: 'main',
				},
				armadylHilt: {
					dropRate: 1 / 508,
					attacks: ['2d8+1'],
					table: 'main',
				},
				armadylChestplate: {
					dropRate: 1 / 384,
					attacks: ['1d6'],
					table: 'main',
				},
				armadylChainskirt: {
					dropRate: 1 / 384,
					attacks: ['1d6'],
					table: 'main',
				}
			},
		},
		'k\'rilTsutsaroth': {
			kph: 32,
			tasks: {
				zamorakianSpear: {
					dropRate: 1 / 127,
					attacks: ['1d4'],
					table: 'main',
				},
/* 				steamBattlestaff: {
					dropRate: 1 / 127,
					attacks: ['1d4'],
					table: 'main',
				}, */
				staffOfTheDead: {
					dropRate: 1 / 508,
					attacks: ['2d6'],
					table: 'main',
				},
				zamorakHilt: {
					dropRate: 1 / 508,
					attacks: ['2d6'],
					table: 'main',
				}
			},
		}
	},
} as Territory satisfies Territory;
