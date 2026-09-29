import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Asgarnia Major',
	baseDefence: 7,
	maxDefence: 12,
	activities: {
		skeletalWyverns: {
			kph: 90,
			tasks: {
				chromiumIngot: {
					dropRate: 1 / 512,
					attacks: ['3d6'],
					table: 'pre',
				},
			},
		},
		royalTitans: {
			kph: 55,
			tasks: {
				elementalStaffCrown: {
					dropRate: 1 / 150,
					attacks: ['1d8+1d4-1'],
					table: 'pre',
				},
			},
		},
		giantMole: {
			kph: 125,
			tasks: {
				immaculateMoleSkin: {
					strategy: 'machine-gun',
					dropRate: 1 / 50,
					attacks: ['1d2-1'],
					table: 'tertiary',
				},
			},
		},
		cerberus: {
			kph: 65,
			tasks: {
				primordialCrystal: {
					dropRate: 1 / 520,
					attacks: ['1d12+1'],
					table: 'main',
				},
				pegasianCrystal: {
					dropRate: 1 / 520,
					attacks: ['1d12+1'],
					table: 'main',
				},
				eternalCrystal: {
					dropRate: 1 / 520,
					attacks: ['1d12+1'],
					table: 'main',
				},
				smoulderingStone: {
					dropRate: 1 / 520,
					attacks: ['1d12+1'],
					table: 'main',
				},
			},
		},
	},
} as Territory satisfies Territory;
