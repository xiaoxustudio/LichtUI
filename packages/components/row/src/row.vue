<template>
	<div
		:class="[
			bem.b(),
			bem.is('row', direction === 'row'),
			bem.is('column', direction === 'column'),
			bem.is('justify-left', justify === 'left'),
			bem.is('justify-center', justify === 'center'),
			bem.is('justify-right', justify === 'right'),
			bem.is('align-left', align === 'start'),
			bem.is('align-center', align === 'middle'),
			bem.is('align-right', align === 'end'),
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
	import { createNamespace } from "@licht-ui/utils";
	import { rowProp } from "./row";
	defineOptions({
		name: "LiRow",
	});
	defineProps(rowProp);
	const bem = createNamespace("row");
</script>
<style scope lang="scss"></style>
