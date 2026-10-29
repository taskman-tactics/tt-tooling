import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Shayzien',
	baseDefence: 999,
	maxDefence: 999,
	activities: {
		shayzienPassage: {
			kph: 1,
			tasks: {
				passThrough: {
					dropRate: 1 / 1000000,
					attacks: ['1d1'],
					table: 'main',
				}
			},
		}
	},
} as Territory satisfies Territory;
