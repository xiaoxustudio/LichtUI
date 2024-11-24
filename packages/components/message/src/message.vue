<template>
	<span
		ref="messageRef"
		v-if="show"
		:class="[
			bem.b(),
			bem.is('right', location === 'right'),
			bem.is('left', location === 'left'),
			type === 'default' && bem.m('default'),
			type === 'primary' && bem.m('primary'),
			type === 'success' && bem.m('success'),
			type === 'danger' && bem.m('danger'),
			type === 'warning' && bem.m('warning'),
			type === 'info' && bem.m('info'),
		]"
		:style="dynamicStyles"
	>
		<span :class="[bem.e('wrapper')]">{{ content }}</span>
		<span v-if="closed" :class="[bem.e('close')]" @click="handleClose">x</span>
	</span>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils";
	import { CSSProperties, onMounted, ref } from "vue";
	import { messageProp } from "./message";
	import { remove } from "./useMessage";
	defineOptions({ name: "LiMessage" });
	const props = defineProps(messageProp);
	const bem = createNamespace("message");
	const show = ref(true);
	const messageRef = ref<HTMLSpanElement>();
	const dynamicStyles = ref<CSSProperties>({});
	const handleClose = () => {
		show.value = !show.value;
		setTimeout(() => {
			remove(props.index!);
		}, 500);
	};
	onMounted(() => {
		if (props.location === "center" && messageRef.value) {
			const msgRef = messageRef.value;
			const { width } = msgRef.getBoundingClientRect();
			dynamicStyles.value.left = `calc(50% - ${width}px)`;
			dynamicStyles.value.right = `inherit`;
		}
		if (!props.closed)
			setTimeout(() => {
				handleClose();
			}, props.duration ?? 2000);
	});
</script>
<style scope lang="scss"></style>
