<template>
	<span
		v-if="show"
		:class="[
			bem.b(),
			type === 'default' && bem.m('default'),
			type === 'primary' && bem.m('primary'),
			type === 'success' && bem.m('success'),
			type === 'danger' && bem.m('danger'),
			type === 'warnning' && bem.m('warning'),
			type === 'info' && bem.m('info'),
		]"
	>
		<span :class="[bem.e('wrapper')]">{{ content }}</span>
		<span v-if="closed" :class="[bem.e('close')]" @click="handleClose">x</span>
	</span>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils";
	import { onMounted, ref } from "vue";
	import { messageProp } from "./message";
	import { remove } from "./useMessage";
	defineOptions({ name: "LiMessage" });
	const props = defineProps(messageProp);
	const bem = createNamespace("message");
	const show = ref(true);
	const handleClose = () => {
		show.value = !show.value;
		setTimeout(() => {
			remove(props.index!);
		}, 500);
	};
	onMounted(() => {
		if (!props.closed)
			setTimeout(() => {
				handleClose();
			}, props.duration ?? 2000);
	});
</script>
<style scope lang="scss"></style>
