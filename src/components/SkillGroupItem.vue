<template>
	<div class="d-flex align-items-center">
		<div>{{skill.name}}</div>
		<b-progress :max="skill.expNeeded" class="w-100 m-2">
			<b-progress-bar :value="skill.exp" style="transition: none"/>
		</b-progress>
		<div>
			<b-button size="sm" v-on:click="$emit('choose',skill)">Choose</b-button>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Skill from '@/game/Skill';

@Component
export default class SkillGroupItem extends Vue {
	@Prop() skill!: Skill;
}
</script>

<style scoped>

</style>
