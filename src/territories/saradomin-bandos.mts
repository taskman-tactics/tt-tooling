import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Saradomin & Bandos',
	baseDefence: 6,
	maxDefence: 9,
	activities: {
		generalGraardor: {
			kph: 31,
			tasks: {
				bandosBoots: {
					dropRate: 1 / 384,
					attacks: ['1d6'],
					table: 'main',
				},
				bandosHilt: {
					dropRate: 1 / 508,
					attacks: ['2d8+1'],
					table: 'main',
				},
				bandosChestplate: {
					dropRate: 1 / 384,
					attacks: ['1d6'],
					table: 'main',
				},
				bandosTassets: {
					dropRate: 1 / 384,
					attacks: ['1d6'],
					table: 'main',
				}
			},
		},
		commanderZilyana: {
			kph: 30,
			tasks: {
				saradominSword: {
					dropRate: 1 / 127,
					attacks: ['1d4'],
					table: 'main',
				},
				'armadyl\'sCrossbow': {
					dropRate: 1 / 508,
					attacks: ['2d6'],
					table: 'main',
				},
				'saradomin\'sLight': {
					dropRate: 1 / 254,
					attacks: ['1d4'],
					table: 'main',
				},
				saradominHilt: {
					dropRate: 1 / 508,
					attacks: ['2d6'],
					table: 'main',
				}
			},
		}
	},
} as Territory satisfies Territory;
