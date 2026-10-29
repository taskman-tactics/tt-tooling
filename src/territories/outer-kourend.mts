import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Outer Kourend',
	baseDefence: 9,
	maxDefence: 13,
	activities: {
		yama: {
			kph: 18,
			tasks: {
				dossier: {
					strategy: 'machine-gun',
					dropRate: 1 / 24.2,
					attacks: ['1d2-1'],
					table: 'main'
				},
				forgottenLockbox: {
					dropRate: 1 / 66,
					attacks: ['1d2'],
					table: 'main'
				},
				soulflameHorn: {
					dropRate: 1 / 600,
					attacks: ['1d12+6'],
					table: 'main',
				},
				oathplateHelm: {
					dropRate: 1 / 1200,
					attacks: ['4d6kh3'],
					table: 'main',
				},
				oathplateChest: {
					dropRate: 1 / 1200,
					attacks: ['4d6kh3'],
					table: 'main',
				},
				oathplateLegs: {
					dropRate: 1 / 1200,
					attacks: ['4d6kh3'],
					table: 'main',
				}
			},
		},
		wintertodt: {
			kph: 48,
			tasks: {
				pyromancerHood: {
					dropRate: 1 / 150,
					attacks: ['1d4+1'],
					table: 'main',
				},
				tomeOfFire: {
					dropRate: 1 / 1000,
					attacks: ['2d8'],
					table: 'main',
				},
			},
		}
	},
} as Territory satisfies Territory;
