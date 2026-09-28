import type { Territory } from '@t/_all.mjs';

export default {
	name: 'The Abyss',
	baseDefence: 7,
	maxDefence: 12,
	activities: {
		abyssalSire: {
			kph: 44,
			tasks: {
				unsired: {
					dropRate: 1 / 100,
					attacks: ['1d8'],
					table: 'pre',
				},
			},
		},
		leviathan: {
			kph: 27,
			tasks: {
				chromiumIngot: {
					dropRate: 1 / 256,
					attacks: ['1d10+1'],
					table: 'main',
				},
				venatorVestigePart: {
					dropRate: 1 / 256,
					attacks: ['1d10+1'],
					table: 'main',
				},
				leviathansLure: {
					dropRate: 1 / 768,
					attacks: ['2d8+1'],
					table: 'main',
				},
				virtusPiece: {
					dropRate: 3 / 2304,
					attacks: ['2d8+1'],
					table: 'main',
				},
				awakenersOrb: {
					dropRate: 1 / 53.6,
					attacks: ['2d4-1'],
					table: 'main',
				},
			},
		},
	},
} as Territory satisfies Territory;