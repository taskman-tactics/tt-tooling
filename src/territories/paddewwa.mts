import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Paddewwa',
	baseDefence: 6,
	maxDefence: 12,
	activities: {
		scurrius: {
			kph: 60,
			tasks: {
				scurriusSpine: {
					strategy: 'machine-gun',
					dropRate: 1 / 33,
					attacks: ['1d2-1'],
					table: 'tertiary',
				}
			},
		},
		oborsChest: {
			kph: 12,
			tasks: {
				hillGiantClub: {
					dropRate: 1 / 118,
					attacks: ['1d10+1'],
					table: 'main',
				}
			},
		},
		bryophytasChest: {
			kph: 9,
			tasks: {
				bryophytasEssence: {
					dropRate: 1 / 118,
					attacks: ['2d6+2'],
					table: 'main',
				}
			},
		},
		// TODO: champion scroll
	},
} as Territory satisfies Territory;