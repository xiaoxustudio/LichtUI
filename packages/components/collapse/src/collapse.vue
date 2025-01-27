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
	const props = defineProps(collapseProp);

	const bem = createNamespace("collapse");
	const currentSelect = ref("");

	const handleChangeSelect = (current: string) => {
		currentSelect.value = current;
	};

	provide(CollapseProviderProp.currentSelect, currentSelect);
	provide(CollapseProviderProp.setSelect, handleChangeSelect);
	provide(CollapseProviderProp.accordion, props.accordion);
</script>
<style scope lang="scss"></style>
