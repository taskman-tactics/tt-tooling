import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Ghorrock Dungeon',
	baseDefence: 7,
	maxDefence: 10,
	activities: {
		phantomMuspah: {
			kph: 22,
			tasks: {
				ancientIcon: {
					dropRate: 1 / 50,
					attacks: ['1d3'],
					table: 'main',
				},
				venatorShard: {
					dropRate: 1 / 100,
					attacks: ['2d4'],
					table: 'main',
				}
			},
		},
		dukeSucellus: {
			kph: 37,
			tasks: {
				'awakener\'sOrb': {
					dropRate: 1 / 48.5,
					attacks: ['1d4-1'],
					table: 'pre',
				},
				chromiumIngot: {
					dropRate: 1 / 240,
					attacks: ['1d6'],
					table: 'pre',
				},
				vestigeRoll: {
					dropRate: 1 / 240,
					attacks: ['1d6'],
					table: 'pre',
				},
				virtusRobeBottom: {
					dropRate: 1 / 2160,
					attacks: ['1d10+1'],
					table: 'pre',
				},
				eyeOfTheDuke: {
					dropRate: 1 / 720,
					attacks: ['1d10+1'],
					table: 'pre',
				},
				virtusMask: {
					dropRate: 1 / 2160,
					attacks: ['1d10+1'],
					table: 'pre',
				},
				virtusRobeTop: {
					dropRate: 1 / 2160,
					attacks: ['1d10+1'],
					table: 'pre',
				}
			},
		}
	},
} as Territory satisfies Territory;
