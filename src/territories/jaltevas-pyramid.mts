import type { Territory } from '@t/_all.mjs';

const TEAM_SIZE = 4;
const PURPLE_CHANCE = 0.15;
const OWN_PURPLE_CHANCE = PURPLE_CHANCE / TEAM_SIZE;

export default {
	name: 'Jaltevas Pyramid',
	baseDefence: 12,
	maxDefence: 18,
	activities: {
		tombsOfAmascut: {
			kph: 60 / 25,
			tasks: {
				lightbearer: {
					dropRate: OWN_PURPLE_CHANCE / 3.8,
					attacks: ['2d6'],
					table: 'main',
				},
				masoriMask: {
					dropRate: OWN_PURPLE_CHANCE / 9.5,
					attacks: ['2d8+1'],
					table: 'main',
				},
				elidinisWard: {
					dropRate: OWN_PURPLE_CHANCE / 6.33,
					attacks: ['4d6'],
					table: 'main',
				},
				"tumeken'sShadow": {
					dropRate: OWN_PURPLE_CHANCE / 19,
					attacks: ['9d4'],
					table: 'main',
				},
				"osmumten'sFang": {
					dropRate: OWN_PURPLE_CHANCE / 4.75,
					attacks: ['2d6'],
					table: 'main',
				},
				masoriBody: {
					dropRate: OWN_PURPLE_CHANCE / 9.5,
					attacks: ['2d8+1'],
					table: 'main',
				},
				masoriChaps: {
					dropRate: OWN_PURPLE_CHANCE / 9.5,
					attacks: ['2d8+1'],
					table: 'main',
				},
			},
		},
	},
} as Territory satisfies Territory;
