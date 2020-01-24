import Skill, { Unlock } from '@/game/Skill';

export default class Job extends Skill {
	public employer: string;
	public salary: number;

	constructor(name: string, unlocks: Unlock[], employer: string, salary: number) {
		super(name, unlocks);
		this.employer = employer;
		this.salary = salary;
	}
}
