import type { Territory } from '@t/_all.mjs';

export default {
	name: 'The Abyss',
	baseDefence: 7,
	maxDefence: 10,
	activities: {
		abyssalSire: {
			kph: 31,
			tasks: {
				unsired: {
					dropRate: 1 / 100,
					attacks: ['1d8'],
					table: 'pre',
				}
			},
		},
		theLeviathan: {
			kph: 27,
			tasks: {
				'awakener\'sOrb': {
					dropRate: 1 / 53.6,
					attacks: ['1d4'],
					table: 'main',
				},
				chromiumIngot: {
					dropRate: 1 / 256,
					attacks: ['1d6'],
					table: 'main',
				},
				venatorVestige: {
					dropRate: 3 / 768,
					attacks: ['1d6'],
					table: 'main',
				},
				'leviathan\'sLure': {
					dropRate: 1 / 768,
					attacks: ['1d10+1'],
					table: 'main',
				},
				virtusMask: {
					dropRate: 1 / 2304,
					attacks: ['1d10+1'],
					table: 'main',
				},
				virtusRobeTop: {
					dropRate: 1 / 2304,
					attacks: ['1d10+1'],
					table: 'main',
				},
				virtusRobeBottom: {
					dropRate: 1 / 2304,
					attacks: ['1d10+1'],
					table: 'main',
				}
			},
		}
	},
} as Territory satisfies Territory;
