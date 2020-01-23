export class Game {
	state: State;

	last: number = 0;

	constructor() {
		this.state = {
			ticks: 0
		};
	}

	public tick(time: number) {
		window.requestAnimationFrame(t => this.tick(t));
		const now = Math.floor(time);
		if (now - this.last > 250) {
			this.update();
			this.last += 250;
		}
	}

	private update() {
		this.state.ticks++;
	}
}
