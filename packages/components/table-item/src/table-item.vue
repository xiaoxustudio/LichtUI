<template>
	<div :class="[bem.b()]">
		<span v-if="label">{{ label }}</span>
		<span v-else>{{ prop }}</span>
	</div>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils";
	import { tableItemProp } from "./table-item";
	import { inject, onBeforeMount } from "vue";
	import { TableProviderpProp } from "../../table/src/table";
	defineOptions({ name: "LiTableItem" });
	const props = defineProps(tableItemProp);
	const bem = createNamespace("table-item");
	const setRenderKeys = inject(TableProviderpProp.setRenderKeys);
	onBeforeMount(() => {
		setRenderKeys?.(props.prop!);
	});
</script>
<style scope lang="scss"></style>
