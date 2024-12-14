<template>
	<span ref="tooltipTriggerRef" :class="[bem.e('trigger')]" @mouseenter="hover = true" @mouseleave="hover = false">
		<slot />
	</span>
	<Teleport to="body">
		<Transition name="fade">
			<div ref="tooltipRef" v-if="hover" :class="[bem.b()]" :style="{
				left: `${pos.x}px`,
				top: `${pos.y}px`,
			}">{{ title }}</div>
		</Transition>
	</Teleport>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils";
	import { tooltipProp } from "./tooltip";
	import { nextTick, onMounted, onUnmounted, reactive, ref, watch } from "vue";
	defineOptions({ name: "LiToolTip" });
	defineProps(tooltipProp);
	const bem = createNamespace("tooltip");
	const hover = ref(false);
	const observer = ref<MutationObserver>()

	const pos = reactive<{ x: number; y: number }>({
		x: 0,
		y: 0,
	});
	const tooltipTriggerRef = ref<HTMLDivElement>();
	const tooltipRef = ref<HTMLDivElement>();
	const update = () => {
		if (!tooltipTriggerRef.value) return;
		if (!tooltipRef.value) return;
		const { left, top, width } = tooltipTriggerRef.value.getBoundingClientRect();
		const { height, width: rWidth } = tooltipRef.value.getBoundingClientRect();
		pos.x = left + (width / 2) - rWidth / 2;
		pos.y = top - height - 10;
	};
	watch(hover, () => nextTick(() => update()))
	onMounted(() => {
		if (!tooltipTriggerRef.value) return
	})
	onUnmounted(() =>
		observer.value && observer.value.disconnect()
	)
</script>
<style scope lang="scss">

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>
