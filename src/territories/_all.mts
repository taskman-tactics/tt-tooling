/** biome-ignore-all lint/style/noMagicNumbers: droprates are magic numbers */

import type { NonEmptyTuple } from 'type-fest';

import VAMPYRIUM_AND_DARKMEYER from '@/territories/vampyrium-and-darkmeyer.mjs';
import GRAVEWATER from '@/territories/gravewater.mts';
import VER_SINHAZA from '@/territories/ver-sinhaza.mts';
import BARROWS from '@/territories/barrows.mts';
import PADDEWWA from '@/territories/paddewwa.mts';
import LASSAR from '@/territories/lassar.mts';
import ASGARNIA_MAJOR from '@/territories/asgarnia-major.mts';
import THE_ABYSS from '@/territories/the-abyss.mts';
import JALTEVAS_PYRAMID from '@/territories/jaltevas-pyramid.mts';
import KHARIDIAN_DESERT from '@/territories/kharidian-desert.mts';
import KHARYLL from '@/territories/kharyll.mts';
import GHORROCK_DUNGEON from '@/territories/ghorrock-dungeon.mts';
import DAREEYAK from '@/territories/dareeyak.mts';
import OLD_GHORROCK from '@/territories/old-ghorrock.mts';
import ANNAKARL from '@/territories/annakarl.mts';
import BLEAKWATER from '@/territories/bleakwater.mts';
import CARRALLANGER from '@/territories/carrallanger.mts';

export type AttackStrategy = 'normal' | 'machine-gun';

export type Task = {
	strategy?: AttackStrategy;
	dropRate: number;
	attacks: NonEmptyTuple<string>;
	table: 'main' | 'pre' | 'tertiary';
};

export type Activity = {
	kph: number;
	maxSimulationKC?: number;
	tasks: Record<string, Task>;
};

export type Territory = {
	name: string;
	baseDefence: number;
	maxDefence: number;
	activities: Record<string, Activity>;
};

export default {
	VAMPYRIUM_AND_DARKMEYER,
	GRAVEWATER,
	VER_SINHAZA,
	BARROWS,
	PADDEWWA,
	LASSAR,
	ASGARNIA_MAJOR,
	THE_ABYSS,
	JALTEVAS_PYRAMID,
	KHARIDIAN_DESERT,
	KHARYLL,
	GHORROCK_DUNGEON,
	DAREEYAK,
	OLD_GHORROCK,
	ANNAKARL,
	BLEAKWATER,
	CARRALLANGER,
} as Record<string, Territory> satisfies Record<string, Territory>;
