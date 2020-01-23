<template>
<span>{{message}}</span>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Echo extends Vue {
	@Prop() private message!: string;
}
</script>

<style scoped>

</style>
