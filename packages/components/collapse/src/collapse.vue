<template>
	<div :class="bem.b()">
		<slot />
	</div>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils";
	import { collapseProp, CollapseProviderProp } from "./collapse";
	import { ref, provide } from "vue";
	defineOptions({
		name: "LiCollapse",
	});
	defineProps(collapseProp);

	const bem = createNamespace("collapse");
	const currentSelect = ref("");

	const handleChangeSelect = (current: string) => {
		currentSelect.value = current;
	};
	provide(CollapseProviderProp.currentSelect, currentSelect);
	provide(CollapseProviderProp.setSelect, handleChangeSelect);
</script>
<style scope lang="scss"></style>
