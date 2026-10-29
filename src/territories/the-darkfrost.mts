import type { Territory } from '@t/_all.mjs';

export default {
	name: 'The Darkfrost',
	baseDefence: 7,
	maxDefence: 10,
	activities: {
		hueycoatl: {
			kph: 9,
			tasks: {
				hueycoatlHide: {
					dropRate: 1 / 28.64,
					attacks: ['1d4'],
					table: 'main',
				},
				tomeOfEarth: {
					dropRate: 1 / 90,
					attacks: ['1d8+1'],
					table: 'main',
				},
				dragonHunterWand: {
					dropRate: 1 / 105,
					attacks: ['3d6'],
					table: 'main',
				}
			},
		}
	},
} as Territory satisfies Territory;
