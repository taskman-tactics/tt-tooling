import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Avium Proudlands',
	baseDefence: 10,
	maxDefence: 15,
	activities: {
		'hunter\'sGuild': {
			kph: 16,
			tasks: {
				guildHunterHeadwear: {
					dropRate: 1 / 200,
					attacks: ['1d10+1'],
					table: 'main',
				},
				guildHunterTop: {
					dropRate: 1 / 200,
					attacks: ['1d10+1'],
					table: 'main',
				},
				guildHunterLegs: {
					dropRate: 1 / 200,
					attacks: ['1d10+1'],
					table: 'main',
				},
				guildHunterBoots: {
					dropRate: 1 / 200,
					attacks: ['1d10+1'],
					table: 'main',
				}
			},
		},
		frostNagua: {
			kph: 250,
			tasks: {
				pendantOfAtes: {
					strategy: 'machine-gun',
					dropRate: 1 / 100,
					attacks: ['1d3-2'],
					table: 'tertiary',
				},
				glacialTemotli: {
					dropRate: 1 / 500,
					attacks: ['2d3kh1'],
					table: 'tertiary',
				}
			},
		},
		amoxliatl: {
			kph: 71,
			tasks: {
				pendantOfAtes: {
					strategy: 'machine-gun',
					dropRate: 1 / 25,
					attacks: ['1d3-2'],
					table: 'tertiary',
				},
				glacialTemotli: {
					dropRate: 1 / 100,
					attacks: ['2d3kh1'],
					table: 'tertiary',
				}
			},
		}
	},
} as Territory satisfies Territory;
