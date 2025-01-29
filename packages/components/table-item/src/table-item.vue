<template>
	<div
		:class="[
			bem.b(),
			border && bem.m('border'),
			border && index === 0 && bem.m('border-left'),
		]"
	>
		<span v-if="label">{{ label }}</span>
		<span v-else>{{ prop }}</span>
	</div>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils";
	import { tableItemProp } from "./table-item";
	import { computed, inject, onBeforeMount } from "vue";
	import { TableProviderpProp } from "../../table/src/table";
	defineOptions({ name: "LiTableItem" });
	const props = defineProps(tableItemProp);
	const bem = createNamespace("table-item");
	const renderKeys = inject(TableProviderpProp.renderKeys);
	const setRenderKeys = inject(TableProviderpProp.setRenderKeys);
	const border = inject(TableProviderpProp.border);
	const index = computed(() => renderKeys?.value?.indexOf(props.prop!) ?? -1);
	onBeforeMount(() => {
		setRenderKeys?.(props.prop!);
	});
</script>
<style scope lang="scss"></style>
