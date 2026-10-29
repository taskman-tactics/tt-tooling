import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Fremennik Region',
	baseDefence: 7,
	maxDefence: 10,
	activities: {
		basiliskKnights: {
			kph: 100,
			tasks: {
				'basilisk\'sJaw': {
					dropRate: 1 / 1000,
					attacks: ['1d6+2'],
					table: 'tertiary',
				}
			},
		},
		vorkath: {
			kph: 34,
			tasks: {
				'vorkath\'sHead': {
					dropRate: 1 / 50,
					attacks: ['1d2'],
					table: 'tertiary',
				},
				dragonboneNecklace: {
					dropRate: 1 / 1000,
					attacks: ['2d8+2'],
					table: 'tertiary',
				},
				skeletalVisage: {
					dropRate: 1 / 5000,
					attacks: ['2d8+2'],
					table: 'tertiary',
				},
				draconicVisage: {
					dropRate: 1 / 5000,
					attacks: ['2d8+2'],
					table: 'tertiary',
				}
			},
		},
		dagannothKings: {
			kph: 27,
			tasks: {
				archersRing: {
					strategy: 'machine-gun',
					dropRate: 1 / 128,
					attacks: ['1d2-1'],
					table: 'main',
				},
				warriorRing: {
					strategy: 'machine-gun',
					dropRate: 1 / 128,
					attacks: ['1d2-1'],
					table: 'main',
				},
				berserkerRing: {
					strategy: 'machine-gun',
					dropRate: 1 / 128,
					attacks: ['1d2-1'],
					table: 'main',
				},
				mudBattlestaff: {
					strategy: 'machine-gun',
					dropRate: 1 / 128,
					attacks: ['1d2-1'],
					table: 'main',
				},
				seercull: {
					strategy: 'machine-gun',
					dropRate: 1 / 128,
					attacks: ['1d2-1'],
					table: 'main',
				},
				seersRing: {
					strategy: 'machine-gun',
					dropRate: 1 / 128,
					attacks: ['1d2-1'],
					table: 'main',
				}
			},
		},
		kurasks: {
			kph: 300,
			tasks: {
				leafBladedSword: {
					dropRate: 1 / 384,
					attacks: ['1d2'],
					table: 'main',
				},
				leafBladedBattleaxe: {
					dropRate: 1 / 1026,
					attacks: ['1d3'],
					table: 'main',
				}
			},
		},
		turoths: {
			kph: 450,
			tasks: {
				leafBladedSword: {
					dropRate: 1 / 512,
					attacks: ['1d2'],
					table: 'main',
				}
			},
		},
		lightMysticPieces: {
			kph: 90,
			tasks: {
				'mysticHat(light)': {
					strategy: 'machine-gun',
					dropRate: 1 / 256,
					attacks: ['1d2-1'],
					table: 'main',
				},
				'mysticRobeTop(light)': {
					strategy: 'machine-gun',
					dropRate: 1 / 256,
					attacks: ['1d2-1'],
					table: 'main',
				},
				'mysticRobeBottom(light)': {
					strategy: 'machine-gun',
					dropRate: 1 / 256,
					attacks: ['1d2-1'],
					table: 'main',
				},
				'mysticBoots(light)': {
					strategy: 'machine-gun',
					dropRate: 1 / 256,
					attacks: ['1d2-1'],
					table: 'main',
				},
				'mysticGloves(light)': {
					strategy: 'machine-gun',
					dropRate: 1 / 256,
					attacks: ['1d2-1'],
					table: 'main',
				}
			},
		}
	},
} as Territory satisfies Territory;
