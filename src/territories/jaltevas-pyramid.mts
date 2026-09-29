import type { Territory } from '@t/_all.mjs';

const TEAM_SIZE = 4;
const PURPLE_CHANCE = 0.15;
const OWN_PURPLE_CHANCE = PURPLE_CHANCE / TEAM_SIZE;

export default {
	name: 'Jaltevas Pyramid',
	baseDefence: 12,
	maxDefence: 18,
	activities: {
		tombsOfAmascust400: {
			kph: 60 / 25,
			tasks: {
				lightbearer: {
					dropRate: OWN_PURPLE_CHANCE / 3.8,
					attacks: ['2d6'],
					table: 'pre',
				},
				osmumtensFang: {
					dropRate: OWN_PURPLE_CHANCE / 4.75,
					attacks: ['2d6'],
					table: 'pre',
				},
				masoriPiece: {
					dropRate: (3 * OWN_PURPLE_CHANCE) / 9.5,
					attacks: ['2d8+1'],
					table: 'pre',
				},
				elidinisWard: {
					dropRate: OWN_PURPLE_CHANCE / 6.33,
					attacks: ['4d6'],
					table: 'pre',
				},
				tumekensShadow: {
					dropRate: OWN_PURPLE_CHANCE / 19,
					attacks: ['9d4'],
					table: 'pre',
				},
			},
		},
	},
} as Territory satisfies Territory;
