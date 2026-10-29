import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Tlati Rainforest',
	baseDefence: 7,
	maxDefence: 10,
	activities: {
		doomOfMokhaiotl: {
			kph: 18,
			tasks: {
				avernicTreads: {
					dropRate: 1 / 540,
					attacks: ['3d4-1'],
					table: 'main',
				},
				eyeOfAyak: {
					dropRate: 1 / 540,
					attacks: ['2d6'],
					table: 'main',
				},
				mokhaiotlCloth: {
					dropRate: 1 / 540,
					attacks: ['3d6kh2'],
					table: 'main',
				},
				mokhaiotlWaystone: {
					strategy: 'machine-gun',
					dropRate: 1 / 15,
					attacks: ['1d2-1'],
					table: 'main',
				}
			},
		},
		earthenNagua: {
			kph: 230,
			tasks: {
				earthboundTecpatl: {
					dropRate: 1 / 400,
					attacks: ['1d2'],
					table: 'tertiary',
				}
			},
		}
	},
} as Territory satisfies Territory;
