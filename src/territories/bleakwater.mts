import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Bleakwater',
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
		'vet\'ion': {
			kph: 40,
			tasks: {
				voidwakerBlade: {
					dropRate: 1 / 360,
					attacks: ['3d6+3'],
					table: 'main',
				},
				'skullOfVet\'ion': {
					dropRate: 1 / 196,
					attacks: ['1d4'],
					table: 'main',
				},
				dragon2hSword: {
					dropRate: 1 / 256,
					attacks: ['1d6+1'],
					table: 'main',
				},
				dragonPickaxe: {
					dropRate: 1 / 256,
					attacks: ['1d6+1'],
					table: 'main',
				},
				ringOfTheGods: {
					dropRate: 1 / 512,
					attacks: ['1d8+1'],
					table: 'main',
				}
			},
		},
		venenatis: {
			kph: 60,
			tasks: {
				voidwakerGem: {
					dropRate: 1 / 360,
					attacks: ['3d6+3'],
					table: 'main',
				},
				fangsOfVenenatis: {
					dropRate: 1 / 196,
					attacks: ['1d4'],
					table: 'main',
				},
				dragon2hSword: {
					dropRate: 1 / 256,
					attacks: ['1d6+1'],
					table: 'main',
				},
				dragonPickaxe: {
					dropRate: 1 / 256,
					attacks: ['1d6+1'],
					table: 'main',
				},
				treasonousRing: {
					dropRate: 1 / 512,
					attacks: ['1d8+1'],
					table: 'main',
				}
			},
		}
	},
} as Territory satisfies Territory;
