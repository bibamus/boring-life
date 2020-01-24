<template>
	<div>
		<SkillGroupItem
				:isActive="skill.name === (activeSkill ? activeSkill.name : '')" :key="skill.name"
				:skill="skill"
				class="mb-1"
				v-for="skill in unlockedSkills"
				v-on:choose="$emit('choose',skill)"/>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Skill from '@/game/Skill';
import SkillGroupItem from '@/components/SkillGroupItem.vue';

@Component({
	components: { SkillGroupItem }
})
export default class SkillGroup extends Vue {
	@Prop() skills!: Skill[];
	@Prop() activeSkill!: Skill;

	get unlockedSkills(): Skill[] {
		return this.skills.filter(skill => skill.unlocked);
	}
}
</script>

<style scoped>

</style>
