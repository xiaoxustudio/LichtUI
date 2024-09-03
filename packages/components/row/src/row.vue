<template>
	<div ref="rowRef" :class="[
		bem.b(),
		bem.is('row', direction === 'row'),
		bem.is('column', direction === 'column'),
	]" :style="{
		marginLeft: gutter ? `${gutter / 2}px` : '',
		marginRight: gutter ? `${gutter / 2}px` : '',
	}">
		<slot />
	</div>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils/create";
	import { rowProp } from "./row";
	import { onMounted, ref } from "vue";
	defineOptions({
		name: "LiRow",
	});
	defineProps(rowProp);
	const bem = createNamespace("row");
	const rowRef = ref<HTMLDivElement>()
	const bound = ref({})
	let config = {
		bound
	}
	defineExpose(config)
	onMounted(() => {
		if (rowRef.value) {
			bound.value = rowRef.value.getBoundingClientRect()
		}
	})
</script>
<style scope lang="scss"></style>
