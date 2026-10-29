import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Grandroot',
	baseDefence: 7,
	maxDefence: 10,
	activities: {
		demonicGorillas: {
			kph: 60,
			tasks: {
				zenyteShard: {
					dropRate: 1 / 300,
					attacks: ['1d6+1'],
					table: 'main',
				},
				lightFrame: {
					dropRate: 1 / 750,
					attacks: ['1d3'],
					table: 'main',
				},
				heavyFrame: {
					dropRate: 1 / 1500,
					attacks: ['1d10+1'],
					table: 'main',
				},
				ballistaLimbs: {
					dropRate: 1 / 500,
					attacks: ['1d3'],
					table: 'main',
				},
				ballistaSpring: {
					dropRate: 1 / 500,
					attacks: ['1d3'],
					table: 'main',
				},
				monkeyTail: {
					dropRate: 1 / 1500,
					attacks: ['1d10+1'],
					table: 'main',
				}
			},
		},
		kraken: {
			kph: 60,
			tasks: {
				krakenTentacle: {
					dropRate: 1 / 400,
					attacks: ['1d6'],
					table: 'main',
				},
				'tridentOfTheSeas(full)': {
					dropRate: 1 / 512,
					attacks: ['2d4'],
					table: 'main',
				}
			},
		}
	},
} as Territory satisfies Territory;
