import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Greater Custodia',
	baseDefence: 7,
	maxDefence: 10,
	activities: {
		custodianStalkers: {
			kph: 300,
			tasks: {
				antlerGuard: {
					dropRate: 1 / 650,
					attacks: ['1d6'],
					table: 'tertiary',
				}
			},
		},
		vardorvis: {
			kph: 37,
			tasks: {
				ultorVestige: {
					dropRate: 1 / 362,
					attacks: ['1d6'],
					table: 'main',
				},
				chromiumIngot: {
					dropRate: 1 / 362,
					attacks: ['1d6'],
					table: 'main',
				},
				virtusMask: {
					dropRate: 1 / 3264,
					attacks: ['1d10+1'],
					table: 'main',
				},
				'executioner\'sAxeHead': {
					dropRate: 1 / 1088,
					attacks: ['1d10+1'],
					table: 'main',
				},
				'awakener\'sOrb': {
					dropRate: 1 / 80,
					attacks: ['1d4'],
					table: 'main',
				},
				virtusRobeTop: {
					dropRate: 1 / 3264,
					attacks: ['1d10+1'],
					table: 'main',
				},
				virtusRobeBottom: {
					dropRate: 1 / 3264,
					attacks: ['1d10+1'],
					table: 'main',
				},
			},
		}
	},
} as Territory satisfies Territory;
