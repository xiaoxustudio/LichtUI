<template>
	<div :class="[bem.b()]">
		<div ref="sliderWrapper" :class="[bem.e('wrapper')]">
			<div
				:class="[bem.e('progress')]"
				:style="{ left: 0, width: `${modelValue}%` }"
			/>
			<div
				:class="[bem.e('button')]"
				:style="{ left: `${modelValue}%` }"
				@mousedown.stop="handleMoseDown"
			>
				<div :class="[bem.e('trigger')]" />
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
	defineProps(sliderProp);
	const bem = createNamespace("slider");
	const sliderWrapper = ref<HTMLDivElement | null>();
	const posX = ref(0);
	const modelValue = defineModel({ default: 0 });
	const emit = defineEmits<SliderEmits>();
	const handleMoseMove = (e: MouseEvent) => {
		if (!sliderWrapper.value) return;
		const { left, width } = sliderWrapper.value.getBoundingClientRect();
		const _cacheVal = e.clientX - left;
		const newValue = (_cacheVal / width) * 100;
		const _calc = round(Math.max(0, Math.min(newValue, 100)), 0);
		if (modelValue.value != _calc) emit("onChange", _calc, modelValue.value);
		modelValue.value = _calc;
	};
	const handleMoseUp = () => {
		window.removeEventListener("mousemove", handleMoseMove);
		window.removeEventListener("mouseup", handleMoseUp);
	};
	const handleMoseDown = (e: MouseEvent) => {
		posX.value = e.x;
		window.addEventListener("mousemove", handleMoseMove);
		window.addEventListener("mouseup", handleMoseUp);
	};
</script>
<style scope lang="scss"></style>
