<template>
	<div
		:class="[
			bem.b(),
			bem.is('row', direction === 'row'),
			bem.is('column', direction === 'column'),
		]"
		:style="{
			marginLeft: gutter ? `${gutter / 2}px` : '',
			marginRight: gutter ? `${gutter / 2}px` : '',
		}"
	>
		<slot />
	</div>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils/create";
	import { rowProp } from "./row";
	defineOptions({
		name: "LiRow",
	});
	const bem = createNamespace("row");

	defineProps(rowProp);
</script>
<style scope lang="scss"></style>
