import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Old Ghorrock',
	baseDefence: 6,
	maxDefence: 9,
	activities: {
		revenants: {
			kph: 120,
			tasks: {
				amuletOfAvarice: {
					dropRate: 1 / 1613,
					attacks: ['2d4'],
					table: 'main',
				},
				'craw\'sBow': {
					dropRate: 1 / 3225,
					attacks: ['1d6+1'],
					table: 'main',
				},
				ancientStatuette: {
					dropRate: 1 / 484,
					attacks: ['1d4'],
					table: 'main',
				},
				'thammaron\'sSceptre': {
					dropRate: 1 / 3225,
					attacks: ['1d6+1'],
					table: 'main',
				},
				'viggora\'sChainmace': {
					dropRate: 1 / 3225,
					attacks: ['1d6+1'],
					table: 'main',
				}
			},
		},
		chaosFanatic: {
			kph: 80,
			tasks: {
				maledictionShard1: {
					dropRate: 1 / 256,
					attacks: ['1d2'],
					table: 'pre',
				},
				odiumShard1: {
					dropRate: 1 / 256,
					attacks: ['1d2'],
					table: 'pre',
				}
			},
		},
		kingBlackDragon: {
			kph: 75,
			tasks: {
				dragonMedHelm: {
					strategy: 'machine-gun',
					dropRate: 1 / 128,
					attacks: ['1d2-1'],
					table: 'main',
				},
				kBDHeads: {
					strategy: 'machine-gun',
					dropRate: 1 / 128,
					attacks: ['1d2-1'],
					table: 'main',
				},
				dragonPickaxe: {
					dropRate: 1 / 1000,
					attacks: ['2d4'],
					table: 'pre',
				}
			},
		}
	},
} as Territory satisfies Territory;
