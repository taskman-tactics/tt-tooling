import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Paddewwa',
	baseDefence: 6,
	maxDefence: 9,
	activities: {
		scurrius: {
			kph: 60,
			tasks: {
				'scurrius\'Spine': {
					strategy: 'machine-gun',
					dropRate: 1 / 33,
					attacks: ['1d2-1'],
					table: 'tertiary',
				}
			},
		},
		obor: {
			kph: 12,
			tasks: {
				hillGiantClub: {
					dropRate: 1 / 118,
					attacks: ['1d12+1'],
					table: 'main',
				}
			},
		},
		bryophyta: {
			kph: 9,
			tasks: {
				'byrophyta\'sEssence': {
					dropRate: 1 / 118,
					attacks: ['2d8+2'],
					table: 'main',
				}
			},
		}
	},
} as Territory satisfies Territory;
