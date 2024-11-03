<template>
	<button :class="[
		bem.b(),
		bem.m(type),
		bem.m(size),
		bem.is('round', round),
		bem.is('plain', plain),
		bem.is('loading', loading),
		bem.is('disabled', disabled),
	]" :type="ntype" :disabled="disabled || loading">
		<span>
			<slot />
		</span>
	</button>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils";
	import { buttonProp } from "./button";
	const bem = createNamespace("button");
	defineOptions({
		name: "LiButton",
	});
	defineProps(buttonProp);
</script>
<style scope lang="scss"></style>
