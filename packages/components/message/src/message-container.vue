<template>
	<div :class="bem.b()">
		<div :class="bem.e('wrapper')">
			<TransitionGroup name="fade" tag="div">
				<Msg
					v-for="(item, index) in queueLeft"
					:key="item.key"
					:index="index"
					:uuid="item.uuid"
					:content="item.content"
					:type="item.type"
					:duration="item.duration"
					:closed="item.closed"
					:location="item.location"
					@on-render="handleRender"
				/>
			</TransitionGroup>
		</div>
		<div :class="bem.e('wrapper')">
			<TransitionGroup name="fade" tag="div">
				<Msg
					v-for="(item, index) in queueCenter"
					:key="item.key"
					:index="index"
					:uuid="item.uuid"
					:content="item.content"
					:type="item.type"
					:duration="item.duration"
					:closed="item.closed"
					:location="item.location"
					@on-render="handleRender"
				/>
			</TransitionGroup>
		</div>
		<div :class="bem.e('wrapper')">
			<TransitionGroup name="fade" tag="div">
				<Msg
					v-for="(item, index) in queueRight"
					:key="item.key"
					:index="index"
					:uuid="item.uuid"
					:content="item.content"
					:type="item.type"
					:duration="item.duration"
					:closed="item.closed"
					:location="item.location"
					@on-render="handleRender"
				/>
			</TransitionGroup>
		</div>
	</div>
</template>
<script setup lang="ts">
	import "@licht-ui/theme-chalk/src/message-container.scss";
	import { createNamespace } from "@licht-ui/utils";
	import { computed, Ref } from "vue";
	import { MessageEX } from "./message";
	import Msg from "./message.vue";
	interface Prop {
		queue: Ref<MessageEX[]>;
	}
	const { queue } = defineProps<Prop>();
	const queueLeft = computed(() =>
		queue.value.filter(
			(v) => !v.location || (v.location === "left" && !v.render)
		)
	);
	const queueCenter = computed(() =>
		queue.value.filter((v) => v.location === "center" && !v.render)
	);
	const queueRight = computed(() =>
		queue.value.filter((v) => v.location === "right" && !v.render)
	);
	defineOptions({ name: "LiMessageContainer" });
	const bem = createNamespace("messagecontainer");

	const handleRender = (uuid: string) => {
		const r = queue.value.find((v) => v.uuid === uuid);
		if (r) r.render = true;
	};
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
