import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Carrallanger',
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
		'calvar\'ion': {
			kph: 45,
			tasks: {
				voidwakerBlade: {
					dropRate: 1 / 912,
					attacks: ['2d6+4'],
					table: 'main',
				},
				ringOfTheGods: {
					dropRate: 1 / 716,
					attacks: ['1d8'],
					table: 'main',
				},
				'skullOfVet\'ion': {
					dropRate: 1 / 618,
					attacks: ['1d6'],
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
				}
			},
		},
		spindel: {
			kph: 50,
			tasks: {
				voidwakerGem: {
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
				fangsOfVenenatis: {
					dropRate: 1 / 618,
					attacks: ['1d6'],
					table: 'main',
				},
				treasonousRing: {
					dropRate: 1 / 716,
					attacks: ['1d8'],
					table: 'main',
				}
			},
		},
		corporealBeast: {
			kph: 13,
			tasks: {
				spectralSigil: {
					dropRate: 1 / 1365,
					attacks: ['7d4'],
					table: 'main',
				},
				elysianSigil: {
					dropRate: 1 / 4095,
					attacks: ['7d4'],
					table: 'main',
				},
				arcaneSigil: {
					dropRate: 1 / 1365,
					attacks: ['7d4'],
					table: 'main',
				}
			},
		}
	},
} as Territory satisfies Territory;
