import type { Territory } from '@t/_all.mjs';
import REVENANTS from '@t/revenants.mts';

export default {
	name: 'Old Ghorrock',
	baseDefence: 6,
	maxDefence: 9,
	activities: {
		...REVENANTS,
		kingBlackDragon: {
			kph: 75,
			tasks: {
				dragonPickaxe: {
					dropRate: 1 / 1000,
					attacks: ['1d2'],
					table: 'pre',
				},
				dragonMedHelm: {
					dropRate: 1 / 128,
					attacks: ['1d2'],
					table: 'main',
				},
				kbdHeads: {
					dropRate: 1 / 128,
					attacks: ['1d3'],
					table: 'tertiary',
				},
			},
		},
		chaosFanatic: {
			kph: 80,
			tasks: {
				odiumShard12: {
					dropRate: 1 / 256,
					attacks: ['1d2'],
					table: 'pre',
				},
				maledictionShard1: {
					dropRate: 1 / 256,
					attacks: ['1d2'],
					table: 'pre',
				},
			},
		},
	},
} as Territory satisfies Territory;
