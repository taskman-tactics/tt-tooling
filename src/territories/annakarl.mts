import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Annakarl',
	baseDefence: 6,
	maxDefence: 9,
	activities: {
		callisto: {
			kph: 100,
			tasks: {
				voidwakerHilt: {
					dropRate: 1 / 360,
					attacks: ['3d6+3'],
					table: 'main',
				},
				dragonTwoHandedSword: {
					dropRate: 1 / 256,
					attacks: ['1d6+1'],
					table: 'main',
				},
				dragonPickaxe: {
					dropRate: 1 / 256,
					attacks: ['1d6+1'],
					table: 'main',
				},
				clawsOfCallisto: {
					dropRate: 1 / 196,
					attacks: ['1d6+1'],
					table: 'main',
				},
				tyrannicalRing: {
					dropRate: 1 / 512,
					attacks: ['1d6+1'],
					table: 'main',
				},
			},
		},
		scorpia: {
			kph: 80,
			tasks: {
				odiumShard3: {
					dropRate: 1 / 256,
					attacks: ['1d2'],
					table: 'pre',
				},
				maledictionShard3: {
					dropRate: 1 / 256,
					attacks: ['1d2'],
					table: 'pre',
				},
			},
		},
		chaosElemental: {
			kph: 80, // assuming 1 alt red x-ing
			tasks: {
				petChaosElemental: {
					dropRate: 1 / 300,
					attacks: ['1d6'],
					table: 'tertiary',
				},
			},
		},
		enchantingGlories: {
			kph: 2016,
			maxSimulationKC: 1e7,
			tasks: {
				eternalGlory: {
					dropRate: 1 / 25000,
					attacks: ['2d20'],
					table: 'tertiary',
				},
			},
		},
	},
} as Territory satisfies Territory;