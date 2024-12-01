<template>
	<LiButton @click="handleModal">徐然</LiButton>
	<LiModal
		:show="showModal"
		@on-ok="showModal = !showModal"
		@on-cancle="showModal = !showModal"
	>
		<template #title> 插槽标题 </template>
		<template #default> 插槽内容 </template>
	</LiModal>
</template>
<script setup lang="ts">
	import { ref } from "vue";

	const showModal = ref(false);
	const handleModal = () => (showModal.value = !showModal.value);
</script>
<style scope lang="scss"></style>
