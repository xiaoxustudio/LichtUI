<template>
	<span
		:class="[
			bem.b(),
			type === 'default' && bem.m('default'),
			type === 'primary' && bem.m('primary'),
			type === 'success' && bem.m('success'),
			type === 'danger' && bem.m('danger'),
			type === 'warning' && bem.m('warning'),
			type === 'info' && bem.m('info'),
			bold && bem.m('bold'),
			truncated === true && bem.m('is-truncated'),
			typeof truncated === 'number' && bem.m('is-clamp'),
			tag === 'bline' && bem.m('bline'),
			tag === 'mline' && bem.m('mline'),
			tag === 'tline' && bem.m('tline'),
			tag === 'mark' && bem.m('mark'),
		]"
		:style="{
			'-webkit-line-clamp': typeof truncated === 'number' ? truncated : '',
		}"
	>
		<slot />
	</span>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils/create";
	import { textProp } from "./text";
	defineOptions({ name: "LiText" });
	defineProps(textProp);
	const bem = createNamespace("text");
</script>
<style scope lang="scss"></style>
