import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Gravewater',
	baseDefence: 8,
	maxDefence: 12,
	activities: {
		araxxor: {
			kph: 38,
			tasks: {
				araxyteFang: {
					dropRate: 1 / 600,
					attacks: ['2d6'],
					table: 'main',
				},
				noxiousHalberdPiece: {
					dropRate: 3 / 200,
					attacks: ['1d8'],
					table: 'main',
				},
			},
		},
		phosanisNightmare: {
			kph: 9.3,
			tasks: {
				inquisitorOrNightmareStaff: {
					dropRate: 1 / 140,
					attacks: ['1d12'],
					table: 'tertiary',
				},
				orbs: {
					dropRate: 1 / 533,
					attacks: ['1d12'],
					table: 'tertiary',
				},
			},
		},
		caveHorrors: {
			kph: 450,
			tasks: {
				blackMask: {
					dropRate: 1 / 512,
					attacks: ['1d2'],
					table: 'main',
				},
			},
		},
	},
} as Territory satisfies Territory;
