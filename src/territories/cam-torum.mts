import type { Territory } from '@t/_all.mjs';

export default {
	name: 'Cam Torum',
	baseDefence: 9,
	maxDefence: 13,
	activities: {
		moonsOfPeril: {
			kph: 18,
			tasks: {
				bloodMoonHelm: {
					dropRate: 1 / 224,
					attacks: ['2d3'],
					table: 'pre',
				},
				blueMoonHelm: {
					dropRate: 1 / 224,
					attacks: ['1d6'],
					table: 'pre',
				},
				eclipseMoonHelm: {
					dropRate: 1 / 224,
					attacks: ['3d4kh1'],
					table: 'pre',
				},
				bloodMoonChestplate: {
					dropRate: 1 / 224,
					attacks: ['2d3'],
					table: 'pre',
				},
				bloodMoonTassets: {
					dropRate: 1 / 224,
					attacks: ['2d3'],
					table: 'pre',
				},
				dualMacuahuitl: {
					dropRate: 1 / 224,
					attacks: ['2d3'],
					table: 'pre',
				},
				blueMoonChestplate: {
					dropRate: 1 / 224,
					attacks: ['1d6'],
					table: 'pre',
				},
				blueMoonTassets: {
					dropRate: 1 / 224,
					attacks: ['1d6'],
					table: 'pre',
				},
				blueMoonSpear: {
					dropRate: 1 / 224,
					attacks: ['1d6'],
					table: 'pre',
				},
				eclipseMoonChestplate: {
					dropRate: 1 / 224,
					attacks: ['3d4kh1'],
					table: 'pre',
				},
				eclipseMoonTassets: {
					dropRate: 1 / 224,
					attacks: ['3d4kh1'],
					table: 'pre',
				},
				eclipseAtlatl: {
					dropRate: 1 / 224,
					attacks: ['3d4kh1'],
					table: 'pre',
				}
			},
		},
		sulphurNagua: {
			kph: 290,
			tasks: {
				sulphurBlades: {
					dropRate: 1 / 450,
					attacks: ['2d4kh1'],
					table: 'pre',
				}
			},
		}
	},
} as Territory satisfies Territory;
