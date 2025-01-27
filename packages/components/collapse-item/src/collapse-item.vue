<template>
	<div
		:class="[bem.b(), bem.is('show', accordion ? isShow : _loc_isShow)]"
		@click="handleShow"
	>
		<div
			:class="bem.m('title')"
			:style="isShow && 'border-bottom: solid 1px #eee'"
		>
			<span v-if="$slots.title"><slot name="title" /></span>
			<span v-else>{{ title }}</span>
		</div>
		<div :class="[bem.m('content')]">
			<slot v-if="$slots.default" />
			<span v-else>{{ content }}</span>
		</div>
	</div>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils";
	import { collapseItemProp } from "./collapse-item";
	import { computed, inject, ref, Ref, useId } from "vue";
	import { CollapseProviderProp } from "../../collapse/src/collapse";
	defineOptions({
		name: "LiCollapseItem",
	});
	defineProps(collapseItemProp);

	const bem = createNamespace("collapse-item");
	const select = inject(CollapseProviderProp.currentSelect) as Ref<string>;
	const setSelect = inject(CollapseProviderProp.setSelect);
	const accordion = inject(CollapseProviderProp.accordion) as boolean;
	const id = useId();
	const isShow = computed(() => select.value === id);
	const _loc_isShow = ref(false);

	const handleShow = () => {
		if (accordion) {
			setSelect?.(id);
		} else _loc_isShow.value = !_loc_isShow.value;
	};
</script>
<style scope lang="scss"></style>
