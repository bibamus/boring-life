import State from '@/game/State';

export default class Game {
	state: State;

	last: number = 0;

	constructor() {
		this.state = {
			ticks: 0
		};
	}

	public tick(time: number) {
		const now = Math.floor(time);
		const numTicks = Math.floor((now - this.last) / 250);
		if (numTicks > 0) {
			console.log('calculate ' + numTicks);
			for (let i = 0; i < numTicks; i++) {
				this.update();
			}
			this.last += numTicks * 250;
		}
		window.requestAnimationFrame(t => this.tick(t));
	}

	private update() {
		this.state.ticks++;
	}
}
