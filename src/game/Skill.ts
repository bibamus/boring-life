export default class Skill {
	public name: String;
	public level = 0;
	public expNeeded = 10;

	constructor(name: String) {
		this.name = name;
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
		this.expNeeded = 10 * Math.pow(1.1, this.level);
	}
}
