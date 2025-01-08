<template>
	<div :class="[bem.b(), bem.is('disabled', disabled)]">
		<div ref="sliderWrapper" :class="[bem.e('wrapper')]" @mousedown.stop="handleMouseDownProgress">
			<div :class="[bem.e('progress'), bem.is('disabled', disabled)]"
				:style="{ left: 0, width: `${leftValue}%` }" />
			<div ref="sliderCircle" :class="[bem.e('button')]" :style="{ left: `${leftValue}%` }"
				@mousedown.stop="handleMouseDown">
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
	defineOptions({ name: "LiSlider" });
	const props = defineProps(sliderProp);
	const bem = createNamespace("slider");
	const visiable = ref(false)
	const sliderWrapper = ref<HTMLDivElement | null>();
	const sliderCircle = ref<HTMLDivElement | null>();
	const posX = ref(0);
	const modelValue = defineModel({ default: 0 });
	const leftValue = ref(0)
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
		if (!sliderWrapper.value || !sliderCircle.value) return;
		const { left, width } = sliderWrapper.value.getBoundingClientRect();
		const _cacheVal = e.clientX - left;
		const percentage = (_cacheVal / width) * 100; // 当前鼠标位置相对于滑块的百分比
		const range = props.max - props.min; // 最大值和最小值之间的范围
		// 将百分比映射到props.min和props.max的范围内
		const boundedValue = props.min + (percentage / 100) * range;
		// 四舍五入到最接近的步长
		const steppedValue = roundToStep(boundedValue, props.step);

		// 确保steppedValue在props.min和props.max的范围内
		const clampedSteppedValue = Math.max(props.min, Math.min(steppedValue, props.max));

		// 将内部值转换为0-100的百分比
		const modelValuePercentage = ((clampedSteppedValue - props.min) / range) * 100;

		if (modelValue.value != clampedSteppedValue) {
			emit("onChange", clampedSteppedValue, modelValue.value);
		}
		// 更新内部值
		modelValue.value = clampedSteppedValue;

		// 设置滑块的left为转换后的百分比
		leftValue.value = modelValuePercentage
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
