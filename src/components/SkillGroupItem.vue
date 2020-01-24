<template>
	<div>
		<span>{{skill.name}}</span>
		<b-progress :max="skill.expNeeded">
			<b-progress-bar :value="skill.exp" style="transition: none"/>
		</b-progress>
		<b-button v-on:click="$emit('choose',skill)">Choose</b-button>
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
