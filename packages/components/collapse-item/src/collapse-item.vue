<template>
	<div :class="[bem.b(), bem.is('show', isShow)]" @click="handleShow">
		<div
			:class="bem.m('title')"
			:style="isShow && 'border-bottom: solid 1px #eee'"
		>
			{{ title }}
		</div>
		<div :class="[bem.m('content')]">
			<slot />
		</div>
	</div>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils";
	import { collapseItemProp } from "./collapse-item";
	import { computed, inject, Ref, useId } from "vue";
	import { CollapseProviderProp } from "../../collapse/src/collapse";
	defineOptions({
		name: "LiCollapseItem",
	});
	defineProps(collapseItemProp);

	const bem = createNamespace("collapse-item");
	const select = inject(CollapseProviderProp.currentSelect) as Ref<string>;
	const setSelect = inject(CollapseProviderProp.setSelect);
	const id = useId();
	const isShow = computed(() => select.value === id);

	const handleShow = () => {
		setSelect?.(id);
	};
</script>
<style scope lang="scss"></style>
