<template>
	<div :class="[bem.b(), bem.is('disabled', disabled)]">
		<div ref="sliderWrapper" :class="[bem.e('wrapper')]" @mousedown.stop="handleMouseDownProgress">
			<div :class="[bem.e('progress'), bem.is('disabled', disabled)]"
				:style="{ left: 0, width: `${modelValue}%` }" />
			<div :class="[bem.e('button')]" :style="{ left: `${modelValue}%` }" @mousedown.stop="handleMouseDown">
				<LiToolTip :title="`${modelValue}%`" :show="visiable">
					<div :class="[bem.e('trigger'), bem.is('disabled', disabled)]" />
				</LiToolTip>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils";
	import { SliderEmits, sliderProp } from "./slider";
	import { ref } from "vue";
	import { round } from "lodash-unified";
	defineOptions({ name: "LiSlider" });
	const props = defineProps(sliderProp);
	const bem = createNamespace("slider");
	const visiable = ref(false)
	const sliderWrapper = ref<HTMLDivElement | null>();
	const posX = ref(0);
	const modelValue = defineModel({ default: 0 });
	const emit = defineEmits<SliderEmits>();

	const roundToStep = (value: number, step: number) => {
		if (step === 0) return value;
		return Math.round(value / step) * step;
	};

	const handleMouseDownProgress = (e: MouseEvent) => {
		if (props.disabled) return;
		visiable.value = true
		handleMouseMove(e)
		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mouseup", handleMouseUp);
	};
	const handleMouseMove = (e: MouseEvent) => {
		if (!sliderWrapper.value) return;
		const { left, width } = sliderWrapper.value.getBoundingClientRect();
		const _cacheVal = e.clientX - left;
		const newValue = (_cacheVal / width) * 100;
		const _calc = round(Math.max(0, Math.min(newValue, 100)), 0);
		const steppedValue = roundToStep(_calc, props.step);
		if (modelValue.value != steppedValue) {
			emit("onChange", steppedValue, modelValue.value);
		}
		modelValue.value = steppedValue;
	};
	const handleMouseUp = () => {
		visiable.value = false
		window.removeEventListener("mousemove", handleMouseMove);
		window.removeEventListener("mouseup", handleMouseUp);
	};
	const handleMouseDown = (e: MouseEvent) => {
		if (props.disabled) return;
		visiable.value = true
		posX.value = e.x;
		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mouseup", handleMouseUp);
	};
</script>
<style scope lang="scss"></style>
