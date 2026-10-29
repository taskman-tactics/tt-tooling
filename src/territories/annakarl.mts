import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Annakarl',
	baseDefence: 6,
	maxDefence: 9,
	activities: {
		scorpia: {
			kph: 80,
			tasks: {
				odiumShard3: {
					dropRate: 1 / 256,
					attacks: ['1d2'],
					table: 'main',
				},
				maledictionShard3: {
					dropRate: 1 / 256,
					attacks: ['1d2'],
					table: 'main',
				}
			},
		},
		chaosElemental: {
			kph: 48,
			tasks: {
				petChaosElemental: {
					dropRate: 1 / 300,
					attacks: ['1d6'],
					table: 'tertiary',
				}
			},
		},
		fountainOfRune: {
			kph: 1,
			tasks: {
				amuletOfEternalGlory: {
					dropRate: 1 / 25000,
					maxSimulationKC: 1e7,
					attacks: ['2d20'],
					table: 'main',
				}
			},
		},
		callisto: {
			kph: 100,
			tasks: {
				voidwakerHilt: {
					dropRate: 1 / 360,
					attacks: ['3d6+3'],
					table: 'main',
				},
				tyrannicalRing: {
					dropRate: 1 / 512,
					attacks: ['1d8+1'],
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
				clawsOfCallilsto: {
					dropRate: 1 / 196,
					attacks: ['1d4'],
					table: 'main',
				}
			},
		}
	},
} as Territory satisfies Territory;
