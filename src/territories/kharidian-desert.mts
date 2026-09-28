import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Kharidian Desert',
	baseDefence: 5,
	maxDefence: 8,
	activities: {
		temporossSolo: {
			kph: 90, // permits, not actual KC
			tasks: {
				fishBarrel: {
					dropRate: 1 / 400,
					attacks: ['1d2'],
					table: 'main',
				},
				tackleBox: {
					dropRate: 1 / 400,
					attacks: ['1d2'],
					table: 'main',
				},
				bigHarpoonfish: {
					dropRate: 1 / 1600,
					attacks: ['2d4'],
					table: 'main',
				},
				tomeOfWater: {
					dropRate: 1 / 1600,
					attacks: ['2d4'],
					table: 'main',
				},
			},
		},
		kalphiteQueen: {
			kph: 37,
			tasks: {
				dragonChainbody: {
					dropRate: 1 / 128,
					attacks: ['1d2'],
					table: 'tertiary',
				},
				dragonTwoHandedSword: {
					dropRate: 1 / 256,
					attacks: ['1d2'],
					table: 'tertiary',
				},
				dragonPickaxe: {
					dropRate: 1 / 400,
					attacks: ['1d2'],
					table: 'tertiary',
				},
				kqHead: {
					dropRate: 1 / 128,
					attacks: ['1d6'],
					table: 'tertiary',
				},
			},
		},
		pyramidPlunder: {
			kph: 20,
			tasks: {
				pharaosSceptre: {
					dropRate: 1 / 69,
					attacks: ['1d6+1'],
					table: 'tertiary',
				},
			}
		}
	},
} as Territory satisfies Territory;