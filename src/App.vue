<template>
	<div>
		<SkillGroup v-on:choose="chooseJob($event)" :skills="state.jobs.group1"/>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Game from '@/game/Game';
import SkillGroup from '@/components/SkillGroup.vue';
import Job from '@/game/Job';

@Component({
	components: { SkillGroup }
})
export default class App extends Vue {
	private game: Game = new Game();

	get state() {
		return this.game.state;
	}

	private chooseJob(job: Job) {
		this.state.activeJob = job;
	}

	created() {
		window.requestAnimationFrame(time => this.game.tick(time));
	}
}
</script>

<style>

</style>
