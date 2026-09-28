import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Vampyrium & Darkmeyer',
	baseDefence: 7,
	maxDefence: 12,
	activities: {
		maggotKing: {
			kph: 33,
			tasks: {
				crimsonKisten: {
					dropRate: 1 / 520,
					attacks: ['2d8'],
					table: 'pre',
				},
				elderVenatorFang: {
					dropRate: 1 / 340,
					attacks: ['1d10'],
					table: 'pre',
				},
			},
		},
		pickpocketingVyres: {
			kph: 720,
			tasks: {
				bloodShard: {
					dropRate: 1 / 5000,
					attacks: ['1d8', '1d8'],
					table: 'main',
				},
			},
		},
		vyrewatchSentinel: {
			kph: 150,
			tasks: {
				bloodShard: {
					dropRate: 1 / 1000,
					attacks: ['1d8'],
					table: 'main',
				},
			},
		},
		hallowedSepulchre: {
			kph: 6.5,
			tasks: {
				ringOfEndurance: {
					dropRate: 1 / 200,
					attacks: ['4d6'],
					table: 'main',
				},
			},
		},
	},
} as Territory satisfies Territory;