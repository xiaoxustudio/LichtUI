<template>
	<div ref="radioGroupRef" :class="[
		bem.b(),
	]">
		<slot />
	</div>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils/create";
	import { radioGroupProp } from "./radio-group";
	import { computed, provide, reactive, ref } from "vue";
	import { RadioGroupInjection, radioGroupKey } from './constants';
	defineOptions({ name: "LiRadioGroup" });
	const prop = defineProps(radioGroupProp);
	const bem = createNamespace("radioGroup");
	const radioGroupRef = ref<HTMLDivElement>()
	const radioId = `licht-${Math.random().toString(32).substring(2, 6).padEnd(6, '0')}`
	const name = computed(() => {
		return prop.name || radioId
	})
	const modelValue = defineModel()
	const _select = ref<RadioGroupInjection['select']>(null)
	provide(
		radioGroupKey, reactive({
			name: name.value,
			select: _select,
			emitChange(e) {
				_select.value = e
				modelValue.value = e?.checked
			}
		})
	)
</script>
<style scope lang="scss"></style>
