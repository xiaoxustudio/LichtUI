<template>
	<div :class="[bem.b(), span ? 'li--col-' + span : 'li--col-24']">
		<slot />
	</div>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils/create";
	import { colProp } from "./col";
	defineOptions({
		name: "LiCol",
	});
	const bem = createNamespace("col");

	defineProps(colProp);
</script>
<style scope lang="scss"></style>
