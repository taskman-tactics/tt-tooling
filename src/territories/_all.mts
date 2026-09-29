import type { NonEmptyTuple } from 'type-fest';

import ANNAKARL from '@/territories/annakarl.mts';
import ASGARNIA_MAJOR from '@/territories/asgarnia-major.mts';
import BARROWS from '@/territories/barrows.mts';
import BLEAKWATER from '@/territories/bleakwater.mts';
import CARRALLANGER from '@/territories/carrallanger.mts';
import DAREEYAK from '@/territories/dareeyak.mts';
import GHORROCK_DUNGEON from '@/territories/ghorrock-dungeon.mts';
import GRAVEWATER from '@/territories/gravewater.mts';
import JALTEVAS_PYRAMID from '@/territories/jaltevas-pyramid.mts';
import KHARIDIAN_DESERT from '@/territories/kharidian-desert.mts';
import KHARYLL from '@/territories/kharyll.mts';
import LASSAR from '@/territories/lassar.mts';
import OLD_GHORROCK from '@/territories/old-ghorrock.mts';
import PADDEWWA from '@/territories/paddewwa.mts';
import THE_ABYSS from '@/territories/the-abyss.mts';
import VAMPYRIUM_AND_DARKMEYER from '@/territories/vampyrium-and-darkmeyer.mjs';
import VER_SINHAZA from '@/territories/ver-sinhaza.mts';

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
	ANNAKARL,
	ASGARNIA_MAJOR,
	BARROWS,
	BLEAKWATER,
	CARRALLANGER,
	DAREEYAK,
	GHORROCK_DUNGEON,
	GRAVEWATER,
	JALTEVAS_PYRAMID,
	KHARIDIAN_DESERT,
	KHARYLL,
	LASSAR,
	OLD_GHORROCK,
	PADDEWWA,
	THE_ABYSS,
	VAMPYRIUM_AND_DARKMEYER,
	VER_SINHAZA,
} as Record<string, Territory> satisfies Record<string, Territory>;
