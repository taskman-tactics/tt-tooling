import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Lassar',
	baseDefence: 8,
	maxDefence: 12,
	activities: {
		theWhisperer: {
			kph: 21,
			tasks: {
				'awakener\'sOrb': {
					dropRate: 1 / 34.5,
					attacks: ['1d4'],
					table: 'main',
				},
				chromiumIngot: {
					dropRate: 1 / 170.7,
					attacks: ['1d6'],
					table: 'main',
				},
				bellatorVestige: {
					dropRate: 1 / 170.7,
					attacks: ['1d6'],
					table: 'main',
				},
				'siren\'sStaff': {
					dropRate: 1 / 512,
					attacks: ['1d10+1'],
					table: 'main',
				},
				virtusMask: {
					dropRate: 1 / 1536,
					attacks: ['1d10+1'],
					table: 'main',
				},
				virtusRobeTop: {
					dropRate: 1 / 1536,
					attacks: ['1d10+1'],
					table: 'main',
				},
				virtusRobeBottom: {
					dropRate: 1 / 1536,
					attacks: ['1d10+1'],
					table: 'main',
				}
			},
		}
	},
} as Territory satisfies Territory;
