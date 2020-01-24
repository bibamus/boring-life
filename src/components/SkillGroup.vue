<template>
	<div>
		<SkillGroupItem v-on:choose="$emit('choose',skill)" v-for="skill in skills" :skill="skill" :key="skill.name"/>
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
}
</script>

<style scoped>

</style>
