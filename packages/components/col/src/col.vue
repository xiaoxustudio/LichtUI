<template>
	<div :class="[bem.b(), span ? 'li--col-' + span : 'li--col-24']">
		<slot />
	</div>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils";
	import { colProp } from "./col";
	defineOptions({
		name: "LiCol",
	});
	defineProps(colProp);

	const bem = createNamespace("col");
</script>
<style scope lang="scss"></style>
