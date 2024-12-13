<template>
	<div :class="[bem.b(), bem.is('disabled', disabled)]">
		<div ref="sliderWrapper" :class="[bem.e('wrapper')]">
			<div
				:class="[bem.e('progress'), bem.is('disabled', disabled)]"
				:style="{ left: 0, width: `${modelValue}%` }"
			/>
			<div
				:class="[bem.e('button')]"
				:style="{ left: `${modelValue}%` }"
				@mousedown.stop="handleMoseDown"
			>
				<div :class="[bem.e('trigger'), bem.is('disabled', disabled)]" />
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils";
	import { SliderEmits, sliderProp } from "./slider";
	import { onBeforeMount, ref } from "vue";
	import { round } from "lodash-unified";
	defineOptions({ name: "LiSlider" });
	const props = defineProps(sliderProp);
	const bem = createNamespace("slider");
	const sliderWrapper = ref<HTMLDivElement | null>();
	const posX = ref(0);
	const modelValue = defineModel({ default: 0 });
	const emit = defineEmits<SliderEmits>();

	// 用于将值四舍五入到最近的步长
	const roundToStep = (value: number, step: number) => {
		if (step === 0) return value;
		return Math.round(value / step) * step;
	};
	const handleMoseMove = (e: MouseEvent) => {
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
	const handleMoseUp = () => {
		window.removeEventListener("mousemove", handleMoseMove);
		window.removeEventListener("mouseup", handleMoseUp);
	};
	const handleMoseDown = (e: MouseEvent) => {
		if (props.disabled) return;
		posX.value = e.x;
		window.addEventListener("mousemove", handleMoseMove);
		window.addEventListener("mouseup", handleMoseUp);
	};
	onBeforeMount(() => {
		modelValue.value = props.value;
	});
</script>
<style scope lang="scss"></style>
