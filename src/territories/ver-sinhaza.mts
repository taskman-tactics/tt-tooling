import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Ver Sinhaza',
	baseDefence: 12,
	maxDefence: 18,
	activities: {
		theatreOfBlood: {
			kph: 3,
			tasks: {
				avernicDefenderHilt: {
					dropRate: 1 / 23.75,
					attacks: ['1d10+2'],
					table: 'main',
				},
				justicarFaceguard: {
					dropRate: 1 / 95.4,
					attacks: ['2d8+1'],
					table: 'main',
				},
				sanguinestiStaff: {
					dropRate: 1 / 95,
					attacks: ['2d10+2'],
					table: 'main',
				},
				scytheOfVitur: {
					dropRate: 1 / 190,
					attacks: ['9d4'],
					table: 'main',
				},
				justicarChestguard: {
					dropRate: 1 / 95.4,
					attacks: ['2d8+1'],
					table: 'main',
				},
				justicarLegguards: {
					dropRate: 1 / 95.4,
					attacks: ['2d8+1'],
					table: 'main',
				},
				ghraziRapier: {
					dropRate: 1 / 95,
					attacks: ['2d10+2'],
					table: 'main',
				}
			},
		}
	},
} as Territory satisfies Territory;
