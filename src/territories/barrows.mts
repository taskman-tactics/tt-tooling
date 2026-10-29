import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Barrows',
	baseDefence: 10,
	maxDefence: 15,
	activities: {
		barrows: {
			kph: 22,
			tasks: {
				'ahrim\'sStaff': {
					dropRate: 1 / 350,
					attacks: ['3d10kh1'],
					table: 'pre',
				},
				'dharok\'sGreataxe': {
					dropRate: 1 / 350,
					attacks: ['1d20'],
					table: 'pre',
				},
				'guthan\'sWarspear': {
					dropRate: 1 / 350,
					attacks: ['1d12'],
					table: 'pre',
				},
				'karil\'sCrossbow': {
					dropRate: 1 / 350,
					attacks: ['1d10+1d3'],
					table: 'pre',
				},
				toragHammers: {
					dropRate: 1 / 350,
					attacks: ['2d6'],
					table: 'pre',
				},
				'verac\'sFlail': {
					dropRate: 1 / 350,
					attacks: ['1d6+3'],
					table: 'pre',
				},
			},
		}
	},
} as Territory satisfies Territory;
