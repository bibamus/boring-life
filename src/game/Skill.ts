export interface Unlock {
	skill: Skill;
	level: number;
}

export default class Skill {
	public name: string;
	public level = 0;
	public expNeeded = 10;
	unlocks: Unlock[];

	constructor(name: string, unlocks: Unlock[]) {
		this.name = name;
		this.unlocks = unlocks;
	}

	get unlocked(): boolean {
		return this.unlocks.every(unlock => unlock.skill.level >= unlock.level);
	}

	private _exp = 0;

	get exp(): number {
		return this._exp;
	}

	addExp(value: number) {
		this._exp += value;
		while (this.exp > this.expNeeded) {
			this.levelUp();
		}
	}

	expPerTick(): number {
		return 0.1;
	}

	private levelUp() {
		this.level++;
		this._exp = this.exp - this.expNeeded;
		this.expNeeded = Math.floor(10 * Math.pow(1.1, this.level));
	}
}
