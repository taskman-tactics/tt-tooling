/** biome-ignore-all lint/style/noMagicNumbers: droprates are magic numbers */

import type { NonEmptyTuple } from 'type-fest';

export type Task = {
	dropRate: number;
	rolls: NonEmptyTuple<string>;
	table: 'main' | 'pre' | 'tertiary';
};

export type Activity = {
	kph: number;
	tasks: Record<string, Task>;
};

export type Territory = {
	name: string;
	baseDefence: number;
	maxDefence: number;
	activities: Record<string, Activity>;
};

export const VAMPYRIUM: Territory = {
	name: 'Vampyrium',
	baseDefence: 7,
	maxDefence: 12,
	activities: {
		maggotKing: {
			kph: 33,
			tasks: {
				crimsonKisten: {
					dropRate: 1 / 520,
					rolls: ['2d8'],
					table: 'pre',
				},
				elderVenatorFang: {
					dropRate: 1 / 340,
					rolls: ['1d10'],
					table: 'pre',
				},
			},
		},
		pickpocketingVyres: {
			kph: 720,
			tasks: {
				bloodShard: {
					dropRate: 1 / 5000,
					rolls: ['1d8', '1d8'],
					table: 'main',
				},
			},
		},
		vyrewatchSentinel: {
			kph: 150,
			tasks: {
				bloodShard: {
					dropRate: 1 / 1000,
					rolls: ['1d8'],
					table: 'main',
				},
			},
		},
	},
};
