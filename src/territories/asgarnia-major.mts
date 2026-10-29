import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Asgarnia Major',
	baseDefence: 9,
	maxDefence: 13,
	activities: {
		skeletalWyverns: {
			kph: 90,
			tasks: {
				graniteLegs: {
					dropRate: 1 / 512,
					attacks: ['3d6'],
					table: 'pre',
				}
			},
		},
		royalTitans: {
			kph: 55,
			tasks: {
				fireElementStaffCrown: {
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
				}
			},
		},
		cerberus: {
			kph: 44,
			tasks: {
				primordialCrystal: {
					dropRate: 1 / 520,
					attacks: ['1d10+1'],
					table: 'main',
				},
				pegasianCrystal: {
					dropRate: 1 / 520,
					attacks: ['1d10+1'],
					table: 'main',
				},
				eternalCrystal: {
					dropRate: 1 / 520,
					attacks: ['1d10+1'],
					table: 'main',
				},
				smoulderingStone: {
					dropRate: 1 / 520,
					attacks: ['1d10+1'],
					table: 'main',
				}
			},
		}
	},
} as Territory satisfies Territory;
