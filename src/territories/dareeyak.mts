import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Dareeyak',
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
		},
		artio: {
			kph: 50,
			tasks: {
				voidwakerHilt: {
					dropRate: 1 / 912,
					attacks: ['2d6+4'],
					table: 'main',
				},
				dragon2hSword: {
					dropRate: 1 / 358,
					attacks: ['1d4'],
					table: 'main',
				},
				dragonPickaxe: {
					dropRate: 1 / 358,
					attacks: ['1d4'],
					table: 'main',
				},
				clawsOfCallisto: {
					dropRate: 1 / 618,
					attacks: ['1d6'],
					table: 'main',
				},
				tyrannicalRing: {
					dropRate: 1 / 716,
					attacks: ['1d8'],
					table: 'main',
				}
			},
		},
		crazyArchaeologist: {
			kph: 95,
			tasks: {
				maledictionShard2: {
					dropRate: 1 / 256,
					attacks: ['1d2'],
					table: 'pre',
				},
				odiumShard2: {
					dropRate: 1 / 256,
					attacks: ['1d2'],
					table: 'pre',
				}
			},
		}
	},
} as Territory satisfies Territory;
