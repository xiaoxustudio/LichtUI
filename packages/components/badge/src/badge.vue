<template>
	<span :class="[bem.b()]">
		<span v-if="isDot" :class="[bem.e('instance'), bem.em('instance', 'dot')]">
		</span>
		<span
			v-else-if="$slots.value"
			:class="[bem.e('instance'), bem.em('instance', type)]"
		>
			<slot name="value" />
		</span>
		<span v-else :class="[bem.e('instance'), bem.em('instance', type)]">
			{{ valueText }}
		</span>
		<slot />
	</span>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils";
	import { badgeProp } from "./badge";
	import { onMounted, ref, toRefs, useSlots, watch } from "vue";
	defineOptions({ name: "LiBadge" });
	const props = defineProps(badgeProp);
	const { value } = toRefs(props);
	const bem = createNamespace("badge");

	const valueText = ref<string>(`${value.value}`);

	const slots = useSlots();

	const limitFunc = () => {
		if (slots.value) return;
		if (typeof value.value !== "number") return;
		let min = props.min;
		let max = props.max;
		if (min > max) {
			[min, max] = [max, min];
		}

		const limit = Math.max(min, Math.min(max, value.value));
		if (value.value > max) {
			valueText.value = `${limit}+`;
		} else {
			valueText.value = `${limit}`;
		}
	};
	watch([value], () => limitFunc());
	onMounted(() => limitFunc());
</script>
<style scope lang="scss"></style>
