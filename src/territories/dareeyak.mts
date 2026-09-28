import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Dareeyak',
	baseDefence: 6,
	maxDefence: 9,
	activities: {
		artio: {
			kph: 50,
			tasks: {
				voidwakerHilt: {
					dropRate: 1 / 912,
					attacks: ['2d6+4'],
					table: 'main',
				},
				dragonTwoHandedSword: {
					dropRate: 1 / 358,
					attacks: ['1d4'],
					table: 'main',
				},
				dragonPickaxe: {
					dropRate: 1 / 358,
					attacks: ['1d4'],
					table: 'main',
				},
				clawsOfCallisto: {
					dropRate: 1 / 618,
					attacks: ['1d4'],
					table: 'main',
				},
				tyrannicalRing: {
					dropRate: 1 / 716,
					attacks: ['1d4'],
					table: 'main',
				},
			},
		},
		crazyArchaeologist: {
			kph: 95,
			tasks: {
				odiumShard2: {
					dropRate: 1 / 256,
					attacks: ['1d2'],
					table: 'pre',
				},
				maledictionShard2: {
					dropRate: 1 / 256,
					attacks: ['1d2'],
					table: 'pre',
				},
				fedora: {
					dropRate: 0, // 1 / 128
					attacks: ['1d2'],
					table: 'tertiary',
				},
			},
		},
		wildernessGodWarsDungeon: {
			kph: 200, // completely pulled out of my ass, but doubt it'd be less if doing it efficiently
			tasks: {
				ecumenicalKey: {
					strategy: 'machine-gun',
					dropRate: 1 / 45, // asumes master CAs
					attacks: ['1d3-2'],
					table: 'tertiary',
				},
			},
		},
	},
} as Territory satisfies Territory;