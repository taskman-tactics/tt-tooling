import type { Activity } from '@t/_all.mjs';

export default {
	revenantDarkBeast: {
		kph: 120,
		tasks: {
			amuletOfAvarice: {
				dropRate: 1 / 1613,
				attacks: ['2d6'],
				table: 'main',
			},
			revenantWeapon: {
				dropRate: 3 / 3226,
				attacks: ['1d8+1'],
				table: 'main',
			},
			ancientEmblem: {
				dropRate: 1 / 4840,
				attacks: ['1d2+1'],
				table: 'main',
			},
			ancientTotem: {
				dropRate: 1 / 1210,
				attacks: ['1d2+2'],
				table: 'main',
			},
			ancientStatuette: {
				dropRate: 1 / 2420,
				attacks: ['1d2+3'],
				table: 'main',
			},
			ancientMedallion: {
				dropRate: 1 / 4840,
				attacks: ['1d2+4'],
				table: 'main',
			},
			ancientEffigy: {
				dropRate: 1 / 4840,
				attacks: ['1d2+5'],
				table: 'main',
			},
			ancientRelic: {
				dropRate: 1 / 4840,
				attacks: ['1d2+6'],
				table: 'main',
			},
			ancientCrystal: {
				dropRate: 0, // 1 / 1613
				attacks: ['1d2+3'],
				table: 'main',
			},
		},
	},
} as Record<string, Activity> satisfies Record<string, Activity>;
