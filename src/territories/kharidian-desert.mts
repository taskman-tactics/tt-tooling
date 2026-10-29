import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Kharidian Desert',
	baseDefence: 7,
	maxDefence: 10,
	activities: {
		tempoross: {
			kph: 90,
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
				tomeOfWater: {
					dropRate: 1 / 1600,
					attacks: ['2d4'],
					table: 'main',
				},
				bigHarpoonfish: {
					dropRate: 1 / 1600,
					attacks: ['2d4'],
					table: 'main',
				},
/* 				'25xSoakedPages': {
					dropRate: 1 / 200,
					attacks: ['1d2'],
					table: 'main',
				} */
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
				kQHead: {
					dropRate: 1 / 128,
					attacks: ['1d6'],
					table: 'tertiary',
				},
				dragon2HSword: {
					dropRate: 1 / 256,
					attacks: ['1d2'],
					table: 'tertiary',
				},
				dragonPickaxe: {
					dropRate: 1 / 400,
					attacks: ['1d2'],
					table: 'tertiary',
				}
			},
		},
		pyramidPlunder: {
			kph: 20,
			tasks: {
				'pharaoh\'sSceptre': {
					dropRate: 1 / 69,
					attacks: ['1d6+1'],
					table: 'tertiary',
				}
			},
		}
	},
} as Territory satisfies Territory;
