import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Southern Isles',
	baseDefence: 4,
	maxDefence: 6,
	activities: {
		shellbaneGryphon: {
			kph: 46,
			tasks: {
				'belle\'sFolly(tarnished)': {
					dropRate: 1 / 75,
					attacks: ['1d2'],
					table: 'pre',
				}
			},
		},
		gryphon: {
			kph: 175,
			tasks: {
				hornOfPlenty: {
					dropRate: 1 / 1000,
					attacks: ['2d3'],
					table: 'tertiary',
				}
			},
		},
		theMadAngel: {
			kph: 50,
			tasks: {
				hallowfell: {
					dropRate: 1 / 127,
					attacks: ['1d3'],
					table: 'pre',
				}
			},
		},
		golemCrafting: {
			kph: 65,
			tasks: {
				'jeweller\'sChisel': {
					dropRate: 1 / 300,
					attacks: ['1d6'],
					table: 'main',
				}
			},
		}
	},
} as Territory satisfies Territory;
