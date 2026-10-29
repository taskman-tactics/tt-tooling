import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Jaltevas Pyramid',
	baseDefence: 12,
	maxDefence: 18,
	activities: {
		tombsOfAmascut: {
			kph: 36,
			tasks: {
				lightbearer: {
					dropRate: 1 / 343,
					attacks: ['2d6'],
					table: 'main',
				},
				masoriMask: {
					dropRate: 1 / 1200,
					attacks: ['2d8+1'],
					table: 'main',
				},
				elidinisWard: {
					dropRate: 1 / 800,
					attacks: ['4d6'],
					table: 'main',
				},
				'tumeken\'sShadow': {
					dropRate: 1 / 2400,
					attacks: ['9d4'],
					table: 'main',
				},
				'osmumten\'sFang': {
					dropRate: 1 / 343,
					attacks: ['2d6'],
					table: 'main',
				},
				masoriBody: {
					dropRate: 1 / 1200,
					attacks: ['2d8+1'],
					table: 'main',
				},
				masoriChaps: {
					dropRate: 1 / 1200,
					attacks: ['2d8+1'],
					table: 'main',
				}
			},
		}
	},
} as Territory satisfies Territory;
