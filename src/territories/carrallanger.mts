import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Carrallanger',
	baseDefence: 6,
	maxDefence: 9,
	activities: {
		calvarion: {
			kph: 45,
			tasks: {
				voidwakerBlade: {
					dropRate: 1 / 912,
					attacks: ['2d6+4'],
					table: 'main',
				},
				dragonTwoHandedSword: {
					dropRate: 1 / 358,
					attacks: ['1d4'],
					table: 'main',
				},
				dragonPickaxe: {
					dropRate: 1 / 358,
					attacks: ['1d4'],
					table: 'main',
				},
				skullOfVetion: {
					dropRate: 1 / 618,
					attacks: ['1d4'],
					table: 'main',
				},
				ringOfTheGods: {
					dropRate: 1 / 716,
					attacks: ['1d4'],
					table: 'main',
				},
			},
		},
		spindel: {
			kph: 60,
			tasks: {
				voidwakerGem: {
					dropRate: 1 / 912,
					attacks: ['2d6+4'],
					table: 'main',
				},
				dragonTwoHandedSword: {
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
					attacks: ['1d4'],
					table: 'main',
				},
				treasonousRing: {
					dropRate: 1 / 716,
					attacks: ['1d4'],
					table: 'main',
				},
			},
		},
		corporealBeast: {
			kph: 12,
			tasks: {
				spectralSigil: {
					dropRate: 1 / 1365,
					attacks: ['4d4'],
					table: 'main',
				},
				arcaneSigil: {
					dropRate: 1 / 1365,
					attacks: ['4d4'],
					table: 'main',
				},
				alysianSigil: {
					dropRate: 1 / 4095,
					attacks: ['4d4'],
					table: 'main',
				},
			},
		},
	},
} as Territory satisfies Territory;