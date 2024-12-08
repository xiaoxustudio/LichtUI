<template>
	<a
		:class="[
			bem.b(),
			type === 'default' && bem.m('default'),
			type === 'primary' && bem.m('primary'),
			type === 'success' && bem.m('success'),
			type === 'danger' && bem.m('danger'),
			type === 'warning' && bem.m('warning'),
			type === 'info' && bem.m('info'),
			bem.is('disabled', disabled),
		]"
		:href
		:alt
		@click.stop="(e) => disabled && e.preventDefault()"
	>
		<slot />
	</a>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils";
	import { linkType } from "./link";
	defineOptions({ name: "LiLink" });
	defineProps(linkType);
	const bem = createNamespace("link");
</script>
<style scope lang="scss"></style>
