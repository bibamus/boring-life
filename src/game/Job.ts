import Skill from '@/game/Skill';

export default class Job extends Skill {
	public employer: string;
	public salary: number;

	constructor(name: String, employer: string, salary: number) {
		super(name);
		this.employer = employer;
		this.salary = salary;
	}
}
