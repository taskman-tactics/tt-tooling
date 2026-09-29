import type { Activity, AttackStrategy, Task, Territory } from '@t/_all.mjs';
import { title } from 'radashi';
import type { Merge } from 'type-fest';
import { rollDiceMin } from './dice.mts';

const DEFAULT_MAX_SIMULATION_KC = 1e5;

export type PreppedAttack = {
	name: string;
	dice: string;
	minRoll: number;
	strategy: AttackStrategy;
};

export type PreppedTask = Merge<
	Task,
	{
		name: string;
		attacks: PreppedAttack[];
	}
>;

export type PreppedActivity = Merge<
	Activity,
	{
		name: string;
		maxSimulationKC: number;
		tasks: Record<Task['table'], PreppedTask[]>;
	}
>;

export type PreppedTerritory = Merge<Territory, { activities: PreppedActivity[] }>;

export function prepareTerritory(territory: Territory): PreppedTerritory {
	return {
		...territory,
		activities: prepareActivities(territory.activities),
	};
}

function prepareActivities(activities: Territory['activities']): PreppedTerritory['activities'] {
	return Object.entries(activities).map(([activityName, activity]) => ({
		...activity,
		name: title(activityName),
		maxSimulationKC: activity.maxSimulationKC ?? DEFAULT_MAX_SIMULATION_KC,
		tasks: prepareTasks(activity.tasks),
	}));
}

function prepareTasks(tasks: Activity['tasks']): PreppedActivity['tasks'] {
	const preparedTasks = Object.entries(tasks).map(([taskName, task]) => ({
		...task,
		name: title(taskName),
		attacks: prepareAttacks(task.attacks, task, taskName),
	}));

	return {
		pre: preparedTasks.filter((task) => task.table === 'pre'),
		main: preparedTasks.filter((task) => task.table === 'main'),
		tertiary: preparedTasks.filter((task) => task.table === 'tertiary'),
	};
}

function prepareAttacks(
	attacks: Task['attacks'],
	task: Task,
	taskName: string
): PreppedTask['attacks'] {
	return attacks.map((attackDice, i) => ({
		name: attacks.length === 1 ? taskName : `${taskName}[${i + 1}]`,
		dice: attackDice,
		minRoll: rollDiceMin(attackDice),
		strategy: task.strategy ?? 'normal',
	}));
}
