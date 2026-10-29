import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Poison Wastes',
	baseDefence: 6,
	maxDefence: 9,
	activities: {
		zulrah: {
			kph: 31,
			tasks: {
				tanzaniteFang: {
					dropRate: 1 / 512,
					attacks: ['3d3kh2'],
					table: 'main',
				},
				magicFang: {
					dropRate: 1 / 512,
					attacks: ['3d3kh2'],
					table: 'main',
				},
				uncutOnyx: {
					dropRate: 1 / 512,
					attacks: ['3d3kh2'],
					table: 'main',
				},
				serpentineVisage: {
					dropRate: 1 / 512,
					attacks: ['3d3kh2'],
					table: 'main',
				},
				tanzaniteMutagen: {
					dropRate: 1 / 6553,
					attacks: ['3d10'],
					table: 'main',
				},
				magmaMutagen: {
					dropRate: 1 / 6553,
					attacks: ['3d10'],
					table: 'main',
				}
			},
		},
		warpedCreatures: {
			kph: 300,
			tasks: {
				warpedSceptre: {
					strategy: 'machine-gun',
					dropRate: 1 / 320,
					attacks: ['1d2-1'],
					table: 'main',
				}
			},
		},
		thermonuclearSmokeDevil: {
			kph: 67,
			tasks: {
				dragonChainbody: {
					dropRate: 1 / 2000,
					attacks: ['1d20'],
					table: 'pre',
				},
				occultNecklace: {
					dropRate: 1 / 350,
					attacks: ['1d4+1'],
					table: 'pre',
				},
				smokeBattlestaff: {
					dropRate: 1 / 512,
					attacks: ['1d8'],
					table: 'pre',
				}
			},
		},
		smokeDevil: {
			kph: 200,
			tasks: {
				occultNecklace: {
					dropRate: 1 / 512,
					attacks: ['1d4+1'],
					table: 'main',
				}
			},
		}
	},
} as Territory satisfies Territory;
