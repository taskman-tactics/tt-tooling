import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Mt. Quidamortem',
	baseDefence: 12,
	maxDefence: 18,
	activities: {
		chambersOfXeric: {
			kph: 43,
			tasks: {
				dexterousPrayerScroll: {
					dropRate: 1 / 466.7,
					attacks: ['2d6-1'],
					table: 'main',
				},
				twistedBuckler: {
					dropRate: 1 / 1400,
					attacks: ['2d10+2'],
					table: 'main',
				},
				'dinh\'sBulwark': {
					dropRate: 1 / 1867,
					attacks: ['4d6'],
					table: 'main',
				},
				elderMaul: {
					dropRate: 1 / 2800,
					attacks: ['4d8kh3'],
					table: 'main',
				},
				twistedBow: {
					dropRate: 1 / 2800,
					attacks: ['9d4'],
					table: 'main',
				},
				dragonClaws: {
					dropRate: 1 / 1867,
					attacks: ['4d6'],
					table: 'main',
				},
				arcanePrayerScroll: {
					dropRate: 1 / 466.7,
					attacks: ['2d6-1'],
					table: 'main',
				},
				dragonHunterCrossbow: {
					dropRate: 1 / 1400,
					attacks: ['2d10+2'],
					table: 'main',
				},
				kodaiInsignia: {
					dropRate: 1 / 2800,
					attacks: ['4d8kh3'],
					table: 'main',
				},
				ancestralHat: {
					dropRate: 1 / 1400,
					attacks: ['2d8+1'],
					table: 'main',
				},
				ancestralRobeTop: {
					dropRate: 1 / 1400,
					attacks: ['2d8+1'],
					table: 'main',
				},
				ancestralRobeBottom: {
					dropRate: 1 / 1400,
					attacks: ['2d8+1'],
					table: 'main',
				}
			},
		}
	},
} as Territory satisfies Territory;
