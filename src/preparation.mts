import { title } from 'radashi';
import type { Merge } from 'type-fest';
import { rollDiceMin } from './dice.mts';
import type { Activity, Task, Territory } from './territories.mts';

export type PreppedAttack = {
	name: string;
	dice: string;
	minRoll: number;
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
		tasks: prepareTasks(activity.tasks),
	}));
}

function prepareTasks(tasks: Activity['tasks']): PreppedActivity['tasks'] {
	const preparedTasks = Object.entries(tasks).map(([taskName, task]) => ({
		...task,
		name: title(taskName),
		attacks: prepareAttacks(task.attacks, taskName),
	}));

	return {
		pre: preparedTasks.filter((task) => task.table === 'pre'),
		main: preparedTasks.filter((task) => task.table === 'main'),
		tertiary: preparedTasks.filter((task) => task.table === 'tertiary'),
	};
}

function prepareAttacks(attacks: Task['attacks'], taskName: string): PreppedTask['attacks'] {
	return attacks.map((attackDice, i) => ({
		name: attacks.length === 1 ? taskName : `${taskName}[${i + 1}]`,
		dice: attackDice,
		minRoll: rollDiceMin(attackDice),
	}));
}
