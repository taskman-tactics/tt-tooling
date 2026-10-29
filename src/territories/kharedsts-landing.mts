import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Kharedst\'s Landing',
	baseDefence: 5,
	maxDefence: 7,
	activities: {
		sarachnis: {
			kph: 67,
			tasks: {
				pristineSpiderSilk: {
					strategy: 'machine-gun',
					dropRate: 1 / 50,
					attacks: ['1d3-2'],
					table: 'tertiary',
				},
				sarachnisCudgel: {
					dropRate: 1 / 384,
					attacks: ['1d6'],
					table: 'pre',
				}
			},
		},
		undeadDruids: {
			kph: 175,
			tasks: {
				maskOfRanul: {
					dropRate: 1 / 1000,
					attacks: ['2d4'],
					table: 'main',
				}
			},
		},
		skotizo: {
			kph: 1,
			tasks: {
				darkTotem: {
					dropRate: 1 / 128,
					attacks: ['1d20'],
					table: 'tertiary',
				},
				darkTotemBase: {
					dropRate: 1 / 128,
					attacks: ['1d20'],
					table: 'tertiary',
				},
				darkTotemMiddle: {
					dropRate: 1 / 128,
					attacks: ['1d20'],
					table: 'tertiary',
				},
				darkTotemTop: {
					dropRate: 1 / 128,
					attacks: ['1d20'],
					table: 'tertiary',
				},
				darkClaw: {
					dropRate: 1 / 25,
					attacks: ['1d8'],
					table: 'tertiary',
				},
				uncutOnyx: {
					dropRate: 1 / 1000,
					attacks: ['7d7-7'],
					table: 'main',
				}
			},
		},
		evilChickenShrine: {
			kph: 1,
			tasks: {
				evilChickenHead: {
					dropRate: 1 / 40,
					attacks: ['10d12kh1'],
					table: 'main',
				},
				evilChickenWings: {
					dropRate: 1 / 40,
					attacks: ['10d12kh1'],
					table: 'main',
				},
				evilChickenLegs: {
					dropRate: 1 / 40,
					attacks: ['10d12kh1'],
					table: 'main',
				},
				evilChickenFeet: {
					dropRate: 1 / 40,
					attacks: ['10d12kh1'],
					table: 'main',
				}
			},
		}
	},
} as Territory satisfies Territory;
