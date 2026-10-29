import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Vampyrium & Darkmeyer',
	baseDefence: 5,
	maxDefence: 7,
	activities: {
		'vyre(pickpocket)': {
			kph: 700,
			tasks: {
				bloodShard: {
					dropRate: 1 / 5000,
					attacks: ['1d8', '1d8'],
					table: 'main',
				}
			},
		},
		'vyre(kill)': {
			kph: 110,
			tasks: {
				bloodShard: {
					dropRate: 1 / 1500,
					attacks: ['1d8'],
					table: 'main',
				}
			},
		},
		venators: {
			kph: 57,
			tasks: {
				bloodShard: {
					dropRate: 1 / 462,
					attacks: ['1d8'],
					table: 'main',
				}
			},
		},
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
				}
			},
		},
		hallowedSepulchre: {
			kph: 7,
			tasks: {
				ringOfEndurance: {
					dropRate: 1 / 200,
					attacks: ['4d6'],
					table: 'main',
				}
			},
		}
	},
} as Territory satisfies Territory;
