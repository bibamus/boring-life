<template>
	<div class="d-flex justify-content-between align-items-center">
		<span class="text-nowrap">{{skill.name}} : {{skill.level}}</span>
		<b-progress :max="skill.expNeeded" class="w-100 m-2">
			<b-progress-bar :value="skill.exp" style="transition: none"/>
		</b-progress>
		<div>
			<b-button :disabled="isActive" size="sm" v-on:click="$emit('choose',skill)">Choose</b-button>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Skill from '@/game/Skill';

@Component
export default class SkillGroupItem extends Vue {
	@Prop() skill!: Skill;
	@Prop() isActive!: boolean;
}
</script>

<style scoped>

</style>
