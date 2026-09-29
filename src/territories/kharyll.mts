import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Kharyll',
	baseDefence: 4,
	maxDefence: 6,
	activities: {
		infernalMages: {
			kph: 400,
			tasks: {
				mysticHatDark: {
					dropRate: 1 / 512,
					attacks: ['1d3'],
					table: 'pre',
				},
				mysticBootsDark: {
					dropRate: 1 / 512,
					attacks: ['1d3'],
					table: 'pre',
				},
			},
		},
		gargoyles: {
			kph: 300,
			tasks: {
				graniteMaul: {
					dropRate: 0, // 1 / 256
					attacks: ['1d2'],
					table: 'pre',
				},
				mysticRobeTopDark: {
					dropRate: 1 / 512,
					attacks: ['1d3'],
					table: 'pre',
				},
			},
		},
		aberrantSpectres: {
			kph: 250,
			tasks: {
				mysticRobeBottomDark: {
					dropRate: 1 / 512,
					attacks: ['1d3'],
					table: 'pre',
				},
			},
		},
		banshees: {
			kph: 600,
			tasks: {
				mysticGlovesDark: {
					dropRate: 1 / 512,
					attacks: ['1d3'],
					table: 'pre',
				},
			},
		},
		abyssalDemon: {
			kph: 600,
			tasks: {
				abyssalWhip: {
					dropRate: 1 / 512,
					attacks: ['1d2'],
					table: 'main',
				},
			},
		},
		grotesqueGuardians: {
			kph: 34,
			tasks: {
				graniteMaul: {
					dropRate: 0, // 2 / 250
					attacks: ['1d2'],
					table: 'main',
				},
				graniteGloves: {
					dropRate: 2 / 500,
					attacks: ['1d4+1'],
					table: 'main',
				},
				graniteRing: {
					dropRate: 2 / 500,
					attacks: ['1d4+1'],
					table: 'main',
				},
				graniteHammer: {
					dropRate: 2 / 750,
					attacks: ['2d4'],
					table: 'main',
				},
				blackTourmalineCore: {
					dropRate: 2 / 1000,
					attacks: ['2d4'],
					table: 'main',
				},
			},
		},
		ghouls: {
			kph: 750,
			tasks: {
				championScroll: {
					dropRate: 1 / 5000,
					attacks: ['1d2+1'],
					table: 'tertiary'
				}
			}
		},
		shadesOfMortton: {
			kph: 375, // keys/h based on 2.7 eff elite clues/h from gold keys at 1/139
			tasks: {
				anyLock: {
					strategy: 'machine-gun',
					dropRate: 1 / 60,
					attacks: ['1d2-1'],
					table: 'main'
				}
			}
		}
	},
} as Territory satisfies Territory;