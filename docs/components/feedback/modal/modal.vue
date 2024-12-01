<template>
	<LiButton @click="handleModal">徐然</LiButton>
	<LiModal
		:show="showModal"
		title="提示"
		content="Licht UI 是一个基于Vue3开发的轻量级组件库"
		@on-ok="showModal = !showModal"
		@on-cancle="showModal = !showModal"
	/>
</template>
<script setup lang="ts">
	import { ref } from "vue";

	const showModal = ref(false);
	const handleModal = () => (showModal.value = !showModal.value);
</script>
<style scope lang="scss"></style>
