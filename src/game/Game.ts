import State from '@/game/State';
import Job from '@/game/Job';

export default class Game {
	state: State;

	last: number = 0;
	private tickLength = 100;

	constructor() {
		this.state = {
			jobs: {
				group1: [
					new Job('job1', 'e1', 0),
					new Job('job2', 'e1', 0)
				]
			},
			activeJob: null
		};
	}

	public tick(time: number) {
		const now = Math.floor(time);
		const numTicks = Math.floor((now - this.last) / this.tickLength);
		if (numTicks > 0) {
			console.log('calculate ' + numTicks);
			for (let i = 0; i < numTicks; i++) {
				this.update();
			}
			this.last += numTicks * this.tickLength;
		}
		window.requestAnimationFrame(t => this.tick(t));
	}

	private update() {
		this.updateSkills();
	}

	private updateSkills() {
		let activeJob = this.state.activeJob;
		if (activeJob) {
			activeJob.addExp(activeJob.expPerTick());
		}
	}
}
