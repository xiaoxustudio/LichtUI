<template>
	<span ref="tooltipTriggerRef" :class="[bem.e('trigger')]" @mousedown="handleMouseDown"
		@mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" @click="handleClick"
		@contextmenu="handleConextMenu">
		<slot />
	</span>
	<Teleport to="body">
		<Transition name="fade">
			<div ref="tooltipRef" v-if="show === undefined ? defaultState : show" :class="[bem.b()]" :style="{
				left: `${pos.x}px`,
				top: `${pos.y}px`,
			}" @mouseleave="handleMouseLeave" @mouseenter="handleMouseEnter">
				<slot v-if="$slots.title" name="title" />
				<span v-else>{{ title }}</span>
			</div>
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
	const { show, disabled } = toRefs(props);
	const defaultState = ref(false)
	const timeoutNum = ref<NodeJS.Timeout | number>(-1)

	const pos = reactive<{ x: number; y: number }>({
		x: 0,
		y: 0,
	});
	const tooltipTriggerRef = ref<HTMLDivElement>();
	const tooltipRef = ref<HTMLDivElement>();

	const handleMouseMove = (e: MouseEvent) => {
		if (!tooltipTriggerRef.value || !tooltipRef.value) return;
		const { width } = tooltipTriggerRef.value.getBoundingClientRect();
		const { width: rWidth } = tooltipRef.value.getBoundingClientRect();
		const { clientX } = e;
		pos.x = clientX + (width / 2) - (rWidth / 2) - 15;
		if (pos.x < 0) {
			pos.x = 0;
		}
		if (pos.x + rWidth >= window.innerWidth) {
			pos.x = window.innerWidth - rWidth;
		}
	};

	const handleMouseUp = () => {
		window.removeEventListener('mousemove', handleMouseMove)
		window.removeEventListener('mouseup', handleMouseUp)
	}
	const handleMouseDown = () => {
		window.addEventListener('mousemove', handleMouseMove)
		window.addEventListener('mouseup', handleMouseUp)
	}
	const handleMouseLeave = () => {
		if (!show === undefined) return
		if (props.trigger !== 'hover') return
		timeoutNum.value = setTimeout(() => {
			defaultState.value = false
		}, 400);
	};
	const handleMouseEnter = () => {
		if (disabled.value) return
		if (!show === undefined) return
		if (props.trigger !== 'hover') return
		defaultState.value = true
		clearTimeout(timeoutNum.value)
	};
	const handleClick = () => {
		if (disabled.value) return
		if (props.trigger !== 'click') return
		defaultState.value = !defaultState.value
	}
	const handleConextMenu = (e: MouseEvent) => {
		e.preventDefault()
		if (disabled.value) return
		if (props.trigger !== 'contextmenu') return
		defaultState.value = !defaultState.value
	}
	const update = () => {
		if (!tooltipTriggerRef.value) return;
		if (!tooltipRef.value) return;
		const { left, top, width } = tooltipTriggerRef.value.getBoundingClientRect();
		const { height, width: rWidth } = tooltipRef.value.getBoundingClientRect();
		let calc = left + (width / 2) - rWidth / 2;
		pos.y = top + document.documentElement.scrollTop - height - 15;
		if (calc < 0) {
			calc = 0;
		} else if (calc + rWidth >= window.innerWidth) {
			calc = window.innerWidth - rWidth;
		}
		pos.x = calc
	};
	watch([defaultState, show, pos], () => {
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
