import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Mt. Karuulm',
	baseDefence: 6,
	maxDefence: 9,
	activities: {
		wyrms: {
			kph: 200,
			tasks: {
				dragonSword: {
					dropRate: 1 / 2000,
					attacks: ['2d3-1'],
					table: 'main',
				},
				dragonKnife: {
					dropRate: 1 / 2000,
					attacks: ['1d1'],
					table: 'main',
				},
				dragonHarpoon: {
					dropRate: 1 / 2000,
					attacks: ['2d3-1'],
					table: 'main',
				},
				dragonThrownaxe: {
					dropRate: 1 / 2000,
					attacks: ['1d1'],
					table: 'main',
				}
			},
		},
		drakes: {
			kph: 120,
			tasks: {
				'drake\'sClaw': {
					dropRate: 1 / 512,
					attacks: ['1d3'],
					table: 'main',
				},
				'drake\'sTooth': {
					dropRate: 1 / 512,
					attacks: ['1d3'],
					table: 'main',
				},
				dragonThrownaxe: {
					dropRate: 1 / 2000,
					attacks: ['1d1'],
					table: 'main',
				},
				dragonKnife: {
					dropRate: 1 / 2000,
					attacks: ['1d1'],
					table: 'main',
				}
			},
		},
		hydras: {
			kph: 80,
			tasks: {
				'hydra\'sHeart': {
					dropRate: 3 / 1083,
					attacks: ['1d4'],
					table: 'pre',
				},
				'hydra\'sTail': {
					dropRate: 1 / 265,
					attacks: ['1d4'],
					table: 'pre',
				},
				dragonKnife: {
					dropRate: 1 / 2000,
					attacks: ['1d1'],
					table: 'pre',
				},
				dragonThrownaxe: {
					dropRate: 1 / 2000,
					attacks: ['1d1'],
					table: 'pre',
				}
			},
		},
		alchemicalHydra: {
			kph: 19,
			tasks: {
				'hydra\'sFang': {
					dropRate: 3 / 543.3,
					attacks: ['1d4'],
					table: 'pre',
				},
				'hydra\'sTail': {
					dropRate: 1 / 513,
					attacks: ['1d4'],
					table: 'pre',
				},
				'hydra\'sClaw': {
					dropRate: 1 / 1001,
					attacks: ['2d6+1'],
					table: 'pre',
				},
				'hydra\'sLeather': {
					dropRate: 1 / 514,
					attacks: ['2d6+1'],
					table: 'pre',
				},
				alchemicalHydraHeads: {
					dropRate: 1 / 256,
					attacks: ['3d3'],
					table: 'tertiary',
				},
				dragonKnife: {
					dropRate: 1 / 2000,
					attacks: ['1d1'],
					table: 'tertiary',
				},
				dragonThrownaxe: {
					dropRate: 1 / 2000,
					attacks: ['1d1'],
					table: 'tertiary',
				},
			},
		}
	},
} as Territory satisfies Territory;
