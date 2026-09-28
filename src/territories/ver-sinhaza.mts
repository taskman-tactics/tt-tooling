import type { Territory } from '@t/_all.mjs';

const TEAM_SIZE = 4;
const PURPLE_CHANCE = 1 / 9.1;
const OWN_PURPLE_CHANCE = PURPLE_CHANCE / TEAM_SIZE;

export default {
	name: 'Ver Sinhaza',
	baseDefence: 12,
	maxDefence: 18,
	activities: {
		theaterOfBloodNormal: {
			kph: 3,
			tasks: {
				avernicDefender: {
					dropRate: OWN_PURPLE_CHANCE / 2.375,
					attacks: ['1d10+2'],
					table: 'pre',
				},
				ghraziRapier: {
					dropRate: OWN_PURPLE_CHANCE / 9.5,
					attacks: ['2d8+1'],
					table: 'pre',
				},
				sanguinestiStaff: {
					dropRate: OWN_PURPLE_CHANCE / 9.5,
					attacks: ['2d8+1'],
					table: 'pre',
				},
				justiciarPiece: {
					dropRate: (3 * OWN_PURPLE_CHANCE) / 9.5,
					attacks: ['2d8+1'],
					table: 'pre',
				},
				scytheOfVitur: {
					dropRate: OWN_PURPLE_CHANCE / 19,
					attacks: ['9d4'],
					table: 'pre',
				},
			},
		},
	},
} as Territory satisfies Territory;