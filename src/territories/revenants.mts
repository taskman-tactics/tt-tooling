import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Revenants',
	baseDefence: 6,
	maxDefence: 9,
	activities: {
		revenants: {
			kph: 120,
			tasks: {
				amuletOfAvarice: {
					dropRate: 1 / 1613,
					attacks: ['2d6'],
					table: 'main',
				},
				'craw\'sBow': {
					dropRate: 1 / 3225,
					attacks: ['1d8+1'],
					table: 'main',
				},
				ancientStatuette: {
					dropRate: 1 / 484,
					attacks: ['1d4'],
					table: 'main',
				},
				'thammaron\'sSceptre': {
					dropRate: 1 / 3225,
					attacks: ['1d8+1'],
					table: 'main',
				},
				'viggora\'sChainmace': {
					dropRate: 1 / 3225,
					attacks: ['1d8+1'],
					table: 'main',
				}
			},
		}
	},
} as Territory satisfies Territory;
