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
	import { CSSProperties, onMounted, onUnmounted, ref } from "vue";
	import { MessageEmits, messageProp } from "./message";
	import { removeCenter, removeLeft, removeRight } from "./useMessage";
	defineOptions({ name: "LiMessage" });
	const props = defineProps(messageProp);
	const bem = createNamespace("message");
	const show = ref(!props._close);
	const messageRef = ref<HTMLSpanElement>();
	const emit = defineEmits<MessageEmits>();
	const dynamicStyles = ref<CSSProperties>({
		top: `${props.index! * 52 + 20}px`,
	});
	const clearNum = ref<NodeJS.Timeout | number>(-1);
	const handleClose = () => {
		emit("onClose", props.uuid!, props.location);
		show.value = !show.value;
		if (clearNum.value !== -1) {
			clearTimeout(clearNum.value);
			clearNum.value = -1;
		}
		setTimeout(() => {
			switch (props.location) {
				case "center":
					removeCenter(props.index!);
					break;
				case "left":
					removeLeft(props.index!);
					break;
				case "right":
					removeRight(props.index!);
					break;
			}
		}, 500);
	};
	onMounted(() => {
		if (props.render) return; // 已经渲染过了
		emit("onRender", props.uuid!, props.location);
		if (props.location === "center" && messageRef.value) {
			const msgRef = messageRef.value;
			const { width } = msgRef.getBoundingClientRect();
			dynamicStyles.value.left = `calc(50% - ${width}px)`;
			dynamicStyles.value.right = `inherit`;
		}
		if (!props.closed) {
			clearNum.value = setTimeout(() => {
				handleClose();
			}, props.duration ?? 2000);
		}
	});
	onUnmounted(() => {
		if (props.render) emit("onRender", props.uuid!, props.location);
		if (clearNum.value !== -1) {
			clearTimeout(clearNum.value);
			clearNum.value = -1;
		}
	});
</script>
<style scope lang="scss"></style>
