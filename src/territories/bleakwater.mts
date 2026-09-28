import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Bleakwater',
	baseDefence: 6,
	maxDefence: 9,
	activities: {
		vetion: {
			kph: 40,
			tasks: {
				voidwakerBlade: {
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
				skullOfVetion: {
					dropRate: 1 / 196,
					attacks: ['1d6+1'],
					table: 'main',
				},
				ringOfTheGods: {
					dropRate: 1 / 512,
					attacks: ['1d6+1'],
					table: 'main',
				},
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
				fangsOfVenenatis: {
					dropRate: 1 / 196,
					attacks: ['1d6+1'],
					table: 'main',
				},
				treasonousRing: {
					dropRate: 1 / 512,
					attacks: ['1d6+1'],
					table: 'main',
				},
			},
		},
		// did not include teleport anchoring scroll as keys are buyable, meaning the drop would cost 4.2m
	},
} as Territory satisfies Territory;