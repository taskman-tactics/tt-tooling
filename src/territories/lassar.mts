import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Lassar',
	baseDefence: 7,
	maxDefence: 12,
	activities: {
		theWhisperer: {
			kph: 21,
			tasks: {
				chromiumIngot: {
					dropRate: 1 / 170.7,
					attacks: ['1d10+1'],
					table: 'main',
				},
				bellatorVestigePart: {
					dropRate: 1 / 170.7,
					attacks: ['1d10+1'],
					table: 'main',
				},
				sirensStaff: {
					dropRate: 1 / 512,
					attacks: ['2d8+1'],
					table: 'main',
				},
				virtusPiece: {
					dropRate: 3 / 1536,
					attacks: ['2d8+1'],
					table: 'main',
				},
				awakenersOrb: {
					dropRate: 1 / 34.5,
					attacks: ['2d4-1'],
					table: 'main',
				},
			},
		},
	},
} as Territory satisfies Territory;
