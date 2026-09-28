import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Ghorrock Dungeon',
	baseDefence: 6,
	maxDefence: 9,
	activities: {
		phantomMuspah: {
			kph: 27,
			tasks: {
				ancientIcon: {
					dropRate: 1 / 50,
					attacks: ['1d4'],
					table: 'main',
				},
				venatorShard: {
					dropRate: 1 / 100,
					attacks: ['1d4+2d2'],
					table: 'pre',
				},
			},
		},
		dukeSucellus: {
			kph: 37,
			tasks: {
				chromiumIngot: {
					dropRate: 1 / 240,
					attacks: ['1d8+1'],
					table: 'main',
				},
				magusVestigePart: {
					dropRate: 1 / 240,
					attacks: ['1d8+1'],
					table: 'main',
				},
				eyeOfTheDuke: {
					dropRate: 1 / 720,
					attacks: ['2d6+1'],
					table: 'main',
				},
				virtusPiece: {
					dropRate: 3 / 2160,
					attacks: ['2d6+1'],
					table: 'main',
				},
				awakenersOrb: {
					dropRate: 1 / 48.5,
					attacks: ['2d3-1'],
					table: 'main',
				},
			},
		},
	},
} as Territory satisfies Territory;