import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Karamja',
	baseDefence: 8,
	maxDefence: 12,
	activities: {
		'tzhaar(nonMej)': {
			kph: 300,
			tasks: {
				toktzKetXil: {
					strategy: 'machine-gun',
					dropRate: 1 / 512,
					attacks: ['1d3-2'],
					table: 'main',
				},
				tzhaarKetOm: {
					strategy: 'machine-gun',
					dropRate: 1 / 512,
					attacks: ['1d3-2'],
					table: 'main',
				},
				obsidianHelmet: {
					dropRate: 1 / 2000,
					attacks: ['1d8'],
					table: 'main',
				},
				obsidianPlatebody: {
					dropRate: 1 / 2000,
					attacks: ['1d8'],
					table: 'main',
				},
				obsidianPlatelegs: {
					dropRate: 1 / 2000,
					attacks: ['1d8'],
					table: 'main',
				}
			},
		},
		tzhaarMej: {
			kph: 180,
			tasks: {
				toktzMejTal: {
					dropRate: 1 / 4096,
					attacks: ['4d6'],
					table: 'main',
				},
			},
		},
		theInferno: {
			kph: 1,
			tasks: {
				infernalCape: {
					strategy: 'machine-gun',
					dropRate: 1 / 1,
					attacks: ['1d2'],
					table: 'main',
				}
			},
		},
		theFightCaves: {
			kph: 2,
			tasks: {
				fireCape: {
					strategy: 'machine-gun',
					dropRate: 1 / 1,
					attacks: ['1d2-1'],
					table: 'main',
				}
			}
		}
	},
} as Territory satisfies Territory;
