<template>
	<span ref="tooltipTriggerRef" :class="[bem.e('trigger')]" @mouseenter="handleMouseEnter"
		@mouseleave="handleMouseLeave">
		<slot />
	</span>
	<Teleport to="body">
		<Transition name="fade">
			<div ref="tooltipRef" v-if="show === undefined ? defaultHover : show" :class="[bem.b()]" :style="{
				left: `${pos.x}px`,
				top: `${pos.y}px`,
			}" @mouseleave="handleMouseLeave" @mouseenter="handleMouseEnter">{{ title }}</div>
		</Transition>
	</Teleport>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils";
	import { tooltipProp } from "./tooltip";
	import { nextTick, onMounted, reactive, ref, toRefs, watch } from "vue";
	defineOptions({ name: "LiToolTip" });
	const props = defineProps(tooltipProp);
	const bem = createNamespace("tooltip");
	const { show } = toRefs(props);
	const defaultHover = ref(false)
	const timeoutNum = ref<NodeJS.Timeout | number>(-1)

	const pos = reactive<{ x: number; y: number }>({
		x: 0,
		y: 0,
	});
	const tooltipTriggerRef = ref<HTMLDivElement>();
	const tooltipRef = ref<HTMLDivElement>();
	const handleMouseLeave = () => {
		if (!show === undefined) return
		timeoutNum.value = setTimeout(() => {
			defaultHover.value = false
		}, 400);
	};
	const handleMouseEnter = () => {
		if (!show === undefined) return
		defaultHover.value = true
		clearTimeout(timeoutNum.value)
	};
	const update = () => {
		if (!tooltipTriggerRef.value) return;
		if (!tooltipRef.value) return;
		const { left, top, width } = tooltipTriggerRef.value.getBoundingClientRect();
		const { height, width: rWidth } = tooltipRef.value.getBoundingClientRect();
		pos.x = left + (width / 2) - rWidth / 2;
		pos.y = top - height - 10;
	};
	watch([defaultHover, show], () => {
		nextTick(() => update())
	})
	onMounted(() => {
		update();
	})
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
