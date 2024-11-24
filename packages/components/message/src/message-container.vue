<template>
	<div :class="bem.b()">
		<div :class="bem.e('wrapper')">
			<TransitionGroup name="fade" tag="div">
				<Msg
					v-for="(item, index) in queue.value.filter(
						(v) => !v.location || v.location === 'left'
					)"
					:key="item.key"
					:index="index"
					:uuid="item.uuid"
					:content="item.content"
					:type="item.type"
					:duration="item.duration"
					:closed="item.closed"
					:location="item.location"
					:style="{
						top: `${index * 48 + 16}px`,
					}"
				/>
			</TransitionGroup>
		</div>
		<div :class="bem.e('wrapper')">
			<TransitionGroup name="fade" tag="div">
				<Msg
					v-for="(item, index) in queue.value.filter(
						(v) => v.location === 'center'
					)"
					:key="item.key"
					:index="index"
					:uuid="item.uuid"
					:content="item.content"
					:type="item.type"
					:duration="item.duration"
					:closed="item.closed"
					:location="item.location"
					:style="{
						top: `${index * 48 + 16}px`,
					}"
				/>
			</TransitionGroup>
		</div>
		<div :class="bem.e('wrapper')">
			<TransitionGroup name="fade" tag="div">
				<Msg
					v-for="(item, index) in queue.value.filter(
						(v) => v.location === 'right'
					)"
					:key="item.key"
					:index="index"
					:uuid="item.uuid"
					:content="item.content"
					:type="item.type"
					:duration="item.duration"
					:closed="item.closed"
					:location="item.location"
					:style="{
						top: `${index * 48 + 16}px`,
					}"
				/>
			</TransitionGroup>
		</div>
	</div>
</template>
<script setup lang="ts">
	import "@licht-ui/theme-chalk/src/message-container.scss";
	import { createNamespace } from "@licht-ui/utils";
	import { Ref } from "vue";
	import { MessageEX } from "./message";
	import Msg from "./message.vue";
	interface Prop {
		queue: Ref<MessageEX[]>;
	}
	const { queue } = defineProps<Prop>();
	defineOptions({ name: "LiMessageContainer" });
	const bem = createNamespace("messagecontainer");
</script>
<style scope lang="scss">
	.fade-move,
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s ease;
	}

	.fade-enter-from,
	.fade-leave-from {
		opacity: 0;
	}
</style>
