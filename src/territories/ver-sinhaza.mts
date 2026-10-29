import type { Territory } from '@t/_all.mjs';

const TEAM_SIZE = 3;
const PURPLE_CHANCE = 1 / 9.1;
const OWN_PURPLE_CHANCE = PURPLE_CHANCE / TEAM_SIZE;

export default {
	name: 'Ver Sinhaza',
	baseDefence: 12,
	maxDefence: 18,
	activities: {
		theatreOfBlood: {
			kph: 23 / 60,
			tasks: {
				avernicDefenderHilt: {
					dropRate: OWN_PURPLE_CHANCE / 2.375,
					attacks: ['1d10+2'],
					table: 'main',
				},
				justicarFaceguard: {
					dropRate: OWN_PURPLE_CHANCE / 9.5,
					attacks: ['2d8+1'],
					table: 'main',
				},
				sanguinestiStaff: {
					dropRate: OWN_PURPLE_CHANCE / 9.5,
					attacks: ['2d10+2'],
					table: 'main',
				},
				scytheOfVitur: {
					dropRate: OWN_PURPLE_CHANCE / 19,
					attacks: ['9d4'],
					table: 'main',
				},
				justicarChestguard: {
					dropRate: OWN_PURPLE_CHANCE / 9.5,
					attacks: ['2d8+1'],
					table: 'main',
				},
				justicarLegguards: {
					dropRate: OWN_PURPLE_CHANCE / 9.5,
					attacks: ['2d8+1'],
					table: 'main',
				},
				ghraziRapier: {
					dropRate: OWN_PURPLE_CHANCE / 9.5,
					attacks: ['2d10+2'],
					table: 'main',
				},
			},
		},
	},
} as Territory satisfies Territory;
