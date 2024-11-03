<template>
	<span :class="[
		bem.b(),
		type === 'default' && bem.m('default'),
		type === 'primary' && bem.m('primary'),
		type === 'success' && bem.m('success'),
		type === 'danger' && bem.m('danger'),
		type === 'warning' && bem.m('warning'),
		type === 'info' && bem.m('info'),
		bem.is('disabled', disabled),
	]">
		<span :class="[bem.m('prefix-icon')]" @click="handleClick" :style="{
			border: `${modelValue ? 'solid 1px #fff' : ''}`,
		}">
			<Active :class="[bem.m('prefix-icon-active')]" :style="{
				scale: `${modelValue ? 1 : 0}`,
			}" />
		</span>
		<span v-if="label">
			{{ label }}
		</span>
		<slot v-else />
	</span>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils";
	import { checkboxProp } from "./checkbox";
	import Active from "./active.vue";
	defineOptions({ name: "LiCheckBox" });
	const prop = defineProps(checkboxProp);
	const bem = createNamespace("checkbox");

	const modelValue = defineModel<boolean>("modelValue", {
		default: false,
	});
	const handleClick = () => {
		if (!prop.disabled) modelValue.value = !modelValue.value;
	};
</script>
<style scope lang="scss"></style>
