import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Prifddinas',
	baseDefence: 8,
	maxDefence: 12,
	activities: {
		corruptedGauntlet: {
			kph: 7,
			tasks: {
				crystalArmorSeed: {
					dropRate: 1 / 50,
					attacks: ['1d8'],
					table: 'tertiary',
				},
				crystalWeaponSeed: {
					dropRate: 1 / 50,
					attacks: ['1d8'],
					table: 'tertiary',
				},
				enhancedCrystalWeaponSeed: {
					dropRate: 1 / 400,
					attacks: ['4d8'],
					table: 'tertiary',
				}
			},
		},
		zalcano: {
			kph: 30,
			tasks: {
				crystalToolSeed: {
					dropRate: 1 / 205,
					attacks: ['2d6+1'],
					table: 'tertiary',
				},
				zalcanoShard: {
					dropRate: 1 / 1000,
					attacks: ['2d6+1'],
					table: 'tertiary',
				}
			},
		},
		'elves(pickpocket)': {
			kph: 566,
			tasks: {
				enhancedCrystalTeleportSeed: {
					dropRate: 1 / 1024,
					attacks: ['1d3', '1d3'],
					table: 'main',
				}
			},
		},
		'elves(kill)': {
			kph: 150,
			tasks: {
				enhancedCrystalTeleportSeed: {
					dropRate: 1 / 1024,
					attacks: ['1d3'],
					table: 'main',
				}
			},
		}
	},
} as Territory satisfies Territory;
