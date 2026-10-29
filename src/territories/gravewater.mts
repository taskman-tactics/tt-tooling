import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Gravewater',
	baseDefence: 6,
	maxDefence: 9,
	activities: {
		araxxor: {
			kph: 25,
			tasks: {
				noxiousBlade: {
					dropRate: 1 / 200,
					attacks: ['1d10+1'],
					table: 'main',
				},
				araxyteFang: {
					dropRate: 1 / 600,
					attacks: ['3d6'],
					table: 'main',
				}
			},
		},
		'phosani\'sNightmare': {
			kph: 9,
			tasks: {
				nightmareStaff: {
					dropRate: 1 / 507.2,
					attacks: ['3d4'],
					table: 'main',
				},
				parasiticEgg: {
					dropRate: 1 / 200,
					attacks: ['3d6'],
					table: 'tertiary',
				},
				'inquisitor\'sGreatHelm': {
					dropRate: 1 / 700,
					attacks: ['2d6'],
					table: 'main',
				},
				'inquisitor\'sHauberk': {
					dropRate: 1 / 700,
					attacks: ['2d6'],
					table: 'main',
				},
				'inquisitor\'sPlateskirt': {
					dropRate: 1 / 700,
					attacks: ['2d6'],
					table: 'main',
				},
				'inquisitor\'sMace': {
					dropRate: 1 / 1129,
					attacks: ['2d8+1'],
					table: 'main',
				},
				eldritchOrb: {
					dropRate: 1 / 1600,
					attacks: ['1d12+1'],
					table: 'main',
				},
				harmonisedOrb: {
					dropRate: 1 / 1600,
					attacks: ['1d12+1'],
					table: 'main',
				},
				volatileOrb: {
					dropRate: 1 / 1600,
					attacks: ['1d12+1'],
					table: 'main',
				}
			},
		},
		caveHorror: {
			kph: 450,
			tasks: {
				blackMask: {
					strategy: 'machine-gun',
					dropRate: 1 / 512,
					attacks: ['1d2-1'],
					table: 'main',
				}
			},
		}
	},
} as Territory satisfies Territory;
