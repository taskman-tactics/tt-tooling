import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Fossil Island',
	baseDefence: 5,
	maxDefence: 7,
	activities: {
		runeDragons: {
			kph: 100,
			tasks: {
				dragonLimbs: {
					dropRate: 1 / 800,
					attacks: ['2d4'],
					table: 'tertiary',
				},
				dragonMetalLump: {
					dropRate: 1 / 5000,
					attacks: ['16d2-16'],
					table: 'tertiary',
				}
			},
		},
		adamantDragon: {
			kph: 120,
			tasks: {
				dragonLimbs: {
					dropRate: 1 / 1000,
					attacks: ['2d4'],
					table: 'tertiary',
				},
				dragonMetalSlice: {
					dropRate: 1 / 5000,
					attacks: ['16d2-16'],
					table: 'tertiary',
				}
			},
		},
		'livingWyverns(nonAncient)': {
			kph: 120,
			tasks: {
				graniteLongsword: {
					dropRate: 1 / 512,
					attacks: ['1d4'],
					table: 'main',
				},
				graniteBoots: {
					dropRate: 1 / 2560,
					attacks: ['1d6+1'],
					table: 'main',
				},
				wyvernVisage: {
					dropRate: 1 / 12000,
					attacks: ['1d100'],
					table: 'tertiary',
				}
			},
		},
		ancientWyverns: {
			kph: 100,
			tasks: {
				graniteLongsword: {
					dropRate: 1 / 600,
					attacks: ['1d4'],
					table: 'main',
				},
				graniteBoots: {
					dropRate: 1 / 600,
					attacks: ['1d6+1'],
					table: 'main',
				},
				wyvernVisage: {
					dropRate: 1 / 10000,
					attacks: ['1d100'],
					table: 'tertiary',
				}
			},
		},
		volcanicMine: {
			kph: 4,
			tasks: {
				brokenDragonPickaxe: {
					dropRate: 1 / 100,
					attacks: ['2d10+1'],
					table: 'main',
				}
			},
		},
		derangedArchaeologist: {
			kph: 95,
			tasks: {
				steelRing: {
					strategy: 'machine-gun',
					dropRate: 1 / 43.67,
					attacks: ['1d3-2'],
					table: 'main',
				}
			},
		}
	},
} as Territory satisfies Territory;
