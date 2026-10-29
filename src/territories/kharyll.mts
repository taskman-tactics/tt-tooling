import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Kharyll',
	baseDefence: 6,
	maxDefence: 9,
	activities: {
		infernalMages: {
			kph: 400,
			tasks: {
				mysticHatDark: {
					strategy: 'machine-gun',
					dropRate: 1 / 512,
					attacks: ['1d2-1'],
					table: 'pre',
				},
				mysticBootsDark: {
					strategy: 'machine-gun',
					dropRate: 1 / 512,
					attacks: ['1d2-1'],
					table: 'pre',
				},
			},
		},
		gargoyles: {
			kph: 300,
			tasks: {
				mysticRobeTopDark: {
					strategy: 'machine-gun',
					dropRate: 1 / 512,
					attacks: ['1d2-1'],
					table: 'pre',
				},
			},
		},
		aberrantSpectres: {
			kph: 250,
			tasks: {
				mysticRobeBottomDark: {
					strategy: 'machine-gun',
					dropRate: 1 / 512,
					attacks: ['1d2-1'],
					table: 'pre',
				},
			},
		},
		banshees: {
			kph: 600,
			tasks: {
				mysticGlovesDark: {
					strategy: 'machine-gun',
					dropRate: 1 / 512,
					attacks: ['1d2-1'],
					table: 'pre',
				},
			},
		},
		grotesqueGuardians: {
			kph: 22,
			tasks: {
				graniteGloves: {
					dropRate: 2 / 500,
					attacks: ['2d4-1'],
					table: 'main',
				},
				graniteRing: {
					dropRate: 2 / 500,
					attacks: ['2d4-1'],
					table: 'main',
				},
				graniteHammer: {
					dropRate: 2 / 750,
					attacks: ['2d4+1'],
					table: 'main',
				},
				blackTourmalineCore: {
					dropRate: 2 / 1000,
					attacks: ['2d4+1'],
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
					table: 'tertiary',
				},
			},
		},
	},
} as Territory satisfies Territory;
