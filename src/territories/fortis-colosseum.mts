import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Fortis Colosseum',
	baseDefence: 12,
	maxDefence: 18,
	activities: {
		fortisColosseum: {
			kph: 2,
			tasks: {
				sunfireFanaticChausses: {
					dropRate: 1 / 25.29,
					attacks: ['2d6+1'],
					table: 'main',
				},
				tonzalticsOfRalos: {
					dropRate: 1 / 83.61,
					attacks: ['5d6'],
					table: 'main',
				},
				echoCrystal: {
					dropRate: 1 / 12.44,
					attacks: ['2d8+2'],
					table: 'main',
				},
				sunfireFanaticHelm: {
					dropRate: 1 / 25.29,
					attacks: ['2d6+1'],
					table: 'main',
				},
				sunfireFanaticCuirass: {
					dropRate: 1 / 25.29,
					attacks: ['2d6+1'],
					table: 'main',
				}
			},
		}
	},
} as Territory satisfies Territory;
