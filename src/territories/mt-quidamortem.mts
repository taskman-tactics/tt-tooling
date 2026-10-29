import type { Territory } from '@t/_all.mjs';

const PERSONAL_POINTS_PER_HOUR = 80_000;
const RAIDS_PER_HOUR = 2.6;
const PERSONAL_POINTS_PER_RAID = PERSONAL_POINTS_PER_HOUR / RAIDS_PER_HOUR;
const PURPLE_CHANCE_PER_RAID = PERSONAL_POINTS_PER_RAID / 8676 / 100;

export default {
	name: 'Mt. Quidamortem',
	baseDefence: 12,
	maxDefence: 18,
	activities: {
		chambersOfXeric: {
			kph: RAIDS_PER_HOUR,
			tasks: {
				dexterousPrayerScroll: {
					dropRate: PURPLE_CHANCE_PER_RAID / 4.667,
					attacks: ['2d6-1'],
					table: 'main',
				},
				twistedBuckler: {
					dropRate: PURPLE_CHANCE_PER_RAID / 14,
					attacks: ['2d10+2'],
					table: 'main',
				},
				"dinh'sBulwark": {
					dropRate: PURPLE_CHANCE_PER_RAID / 18.67,
					attacks: ['4d6'],
					table: 'main',
				},
				elderMaul: {
					dropRate: PURPLE_CHANCE_PER_RAID / 28,
					attacks: ['4d8kh3'],
					table: 'main',
				},
				twistedBow: {
					dropRate: PURPLE_CHANCE_PER_RAID / 28,
					attacks: ['9d4'],
					table: 'main',
				},
				dragonClaws: {
					dropRate: PURPLE_CHANCE_PER_RAID / 18.67,
					attacks: ['4d6'],
					table: 'main',
				},
				arcanePrayerScroll: {
					dropRate: PURPLE_CHANCE_PER_RAID / 4.667,
					attacks: ['2d6-1'],
					table: 'main',
				},
				dragonHunterCrossbow: {
					dropRate: PURPLE_CHANCE_PER_RAID / 14,
					attacks: ['2d10+2'],
					table: 'main',
				},
				kodaiInsignia: {
					dropRate: PURPLE_CHANCE_PER_RAID / 28,
					attacks: ['4d8kh3'],
					table: 'main',
				},
				ancestralHat: {
					dropRate: PURPLE_CHANCE_PER_RAID / 14,
					attacks: ['2d8+1'],
					table: 'main',
				},
				ancestralRobeTop: {
					dropRate: PURPLE_CHANCE_PER_RAID / 14,
					attacks: ['2d8+1'],
					table: 'main',
				},
				ancestralRobeBottom: {
					dropRate: PURPLE_CHANCE_PER_RAID / 14,
					attacks: ['2d8+1'],
					table: 'main',
				},
			},
		},
	},
} as Territory satisfies Territory;
