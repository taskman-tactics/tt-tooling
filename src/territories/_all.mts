import type { NonEmptyTuple } from 'type-fest';

import ANNAKARL from '@/territories/annakarl.mts';
import ASGARNIA_MAJOR from '@/territories/asgarnia-major.mts';
import AVIUM_PROUDLANDS from '@/territories/avium-proudlands.mts';
import BARROWS from '@/territories/barrows.mts';
import BLEAKWATER from '@/territories/bleakwater.mts';
import CAM_TORUM from '@/territories/cam-torum.mts';
import CARRALLANGER from '@/territories/carrallanger.mts';
import DAREEYAK from '@/territories/dareeyak.mts';
import FORTIS_COLOSSEUM from '@/territories/fortis-colosseum.mts';
import FOSSIL_ISLAND from '@/territories/fossil-island.mts';
import FREMENNIK_REGION from '@/territories/fremennik-region.mts';
import FROZEN_PLATEAU_MAGE_S_BANK from '@/territories/frozen-plateau-mage-s-bank.mts';
import GHORROCK_DUNGEON from '@/territories/ghorrock-dungeon.mts';
import GRANDROOT from '@/territories/grandroot.mts';
import GRAVEWATER from '@/territories/gravewater.mts';
import GREATER_CUSTODIA from '@/territories/greater-custodia.mts';
import JALTEVAS_PYRAMID from '@/territories/jaltevas-pyramid.mts';
import KARAMJA from '@/territories/karamja.mts';
import KHAREDSTS_LANDING from '@/territories/kharedsts-landing.mts';
import KHARIDIAN_DESERT from '@/territories/kharidian-desert.mts';
import KHARYLL from '@/territories/kharyll.mjs';
import LASSAR from '@/territories/lassar.mts';
import MISTHALIN from '@/territories/misthalin.mts';
import MT_KARUULM from '@/territories/mt-karuulm.mts';
import MT_QUIDAMORTEM from '@/territories/mt-quidamortem.mts';
import NORTHERN_KANDARIN from '@/territories/northern-kandarin.mts';
import OLD_GHORROCK from '@/territories/old-ghorrock.mts';
import OUTER_KOUREND from '@/territories/outer-kourend.mts';
import PADDEWWA from '@/territories/paddewwa.mts';
import POISON_WASTES from '@/territories/poison-wastes.mts';
import PRIFDDINAS from '@/territories/prifddinas.mts';
import REVENANTS from '@/territories/revenants.mts';
import SARADOMIN_BANDOS from '@/territories/saradomin-bandos.mts';
import SENNTISTEN from '@/territories/senntisten.mts';
import SHAYZIEN from '@/territories/shayzien.mts';
import SOUTHERN_ISLES from '@/territories/southern-isles.mts';
import SOUTHERN_KANDARIN from '@/territories/southern-kandarin.mts';
import THE_ABYSS from '@/territories/the-abyss.mts';
import THE_DARKFROST from '@/territories/the-darkfrost.mts';
import TLATI_RAINFOREST from '@/territories/tlati-rainforest.mts';
import TROLL_COUNTY from '@/territories/troll-county.mts';
import VAMPYRIUM_AND_DARKMEYER from '@/territories/vampyrium-darkmeyer.mts';
import VER_SINHAZA from '@/territories/ver-sinhaza.mts';
import ZAMORAK_ARMADYL from '@/territories/zamorak-armadyl.mts';

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
	AVIUM_PROUDLANDS,
	BARROWS,
	BLEAKWATER,
	CAM_TORUM,
	CARRALLANGER,
	DAREEYAK,
	FORTIS_COLOSSEUM,
	FOSSIL_ISLAND,
	FREMENNIK_REGION,
	FROZEN_PLATEAU_MAGE_S_BANK,
	GHORROCK_DUNGEON,
	GRANDROOT,
	GRAVEWATER,
	GREATER_CUSTODIA,
	JALTEVAS_PYRAMID,
	KARAMJA,
	KHAREDSTS_LANDING,
	KHARIDIAN_DESERT,
	KHARYLL,
	LASSAR,
	MISTHALIN,
	MT_KARUULM,
	MT_QUIDAMORTEM,
	NORTHERN_KANDARIN,
	OLD_GHORROCK,
	OUTER_KOUREND,
	PADDEWWA,
	POISON_WASTES,
	PRIFDDINAS,
	REVENANTS,
	SARADOMIN_BANDOS,
	SENNTISTEN,
	SHAYZIEN,
	SOUTHERN_ISLES,
	SOUTHERN_KANDARIN,
	THE_ABYSS,
	THE_DARKFROST,
	TLATI_RAINFOREST,
	TROLL_COUNTY,
	VAMPYRIUM_AND_DARKMEYER,
	VER_SINHAZA,
	ZAMORAK_ARMADYL,
} as Record<string, Territory> satisfies Record<string, Territory>;