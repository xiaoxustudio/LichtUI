<template>
	<LiBadge :value="val" :min="0" :max="99">
		<LiButton>测试{{ val }}</LiButton>
	</LiBadge>
</template>
<script setup lang="ts">
	import { ref } from "vue";

	const val = ref(999);
</script>
<style scope lang="scss"></style>
