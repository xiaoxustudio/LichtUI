<template>
	<div :class="[
		bem.b(),
		type === 'default' && bem.m('default'),
		type === 'primary' && bem.m('primary'),
		type === 'success' && bem.m('success'),
		type === 'danger' && bem.m('danger'),
		type === 'warning' && bem.m('warning'),
		type === 'info' && bem.m('info'),

	]" @click="handleClick">
		<span :class="[
			bem.e('wrapper'),
			type === 'default' && is_check && bem.em('wrapper', 'default'),
			type === 'primary' && is_check && bem.em('wrapper', 'primary'),
			type === 'success' && is_check && bem.em('wrapper', 'success'),
			type === 'danger' && is_check && bem.em('wrapper', 'danger'),
			type === 'warning' && is_check && bem.em('wrapper', 'warning'),
			type === 'info' && is_check && bem.em('wrapper', 'info'),
			bem.is('disabled', disabled)]">
			<div :class="[bem.e('inner'),
			is_check ? bem.em('inner', 'left') : bem.em('inner', 'right')]">
				<slot v-if="$slots.default" :checked="is_check" />
				<span v-else>{{ is_check ? enableVal ? enableVal : '' : disableVal ? disableVal : '' }}</span>
			</div>
			<span :class="[bem.e('circle'), is_check ? bem.is('left', is_check) : '']"></span>
		</span>
	</div>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils/create";
	import { switchProp } from "./switch";
	defineOptions({ name: "LiSwitch" });
	const prop = defineProps(switchProp);
	const bem = createNamespace("switch");
	const is_check = defineModel<boolean>()
	const handleClick = () => {
		if (prop.disabled) return
		is_check.value = !is_check.value
	}
</script>
<style scope lang="scss"></style>
