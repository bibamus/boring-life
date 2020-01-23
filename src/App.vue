<template>
	<div>
		<Echo v-bind:message="game.state.ticks"/>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Echo from '@/components/Echo.vue';
import { Game } from '@/game/Game';

@Component({
	components: { Echo }
})
export default class App extends Vue {
	private game: Game = new Game();

	created() {
		window.requestAnimationFrame(time => this.game.tick(time));
	}
}
</script>

<style>

</style>
