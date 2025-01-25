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
					:render="item.render"
					:_close="item._close"
					@on-render="handleRender"
					@on-close="handleClose"
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
					:render="item.render"
					:_close="item._close"
					@on-render="handleRender"
					@on-close="handleClose"
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
					:render="item.render"
					:_close="item._close"
					@on-render="handleRender"
					@on-close="handleClose"
				/>
			</TransitionGroup>
		</div>
	</div>
</template>
<script setup lang="ts">
	import "@licht-ui/theme-chalk/src/message-container.scss";
	import { createNamespace } from "@licht-ui/utils";
	import { MessageEX } from "./message";
	import Msg from "./message.vue";
	import { Ref, toRefs } from "vue";
	interface Prop {
		queueLeft: Ref<MessageEX[]>;
		queueCenter: Ref<MessageEX[]>;
		queueRight: Ref<MessageEX[]>;
	}
	defineOptions({ name: "LiMessageContainer" });
	const prop = defineProps<Prop>();
	const { queueCenter, queueLeft, queueRight } = toRefs(prop);
	const bem = createNamespace("messagecontainer");

	const handleRender = (uuid: string, loc: string) => {
		let r;
		switch (loc) {
			case "center":
				r = queueCenter.value.find((v) => v.uuid === uuid);
				break;
			case "left":
				r = queueLeft.value.find((v) => v.uuid === uuid);
				break;
			case "right":
				r = queueRight.value.find((v) => v.uuid === uuid);
				break;
		}
		if (r) r.render = !r.render;
	};
	const handleClose = (uuid: string, loc: string) => {
		let r;
		switch (loc) {
			case "center":
				r = queueCenter.value.find((v) => v.uuid === uuid);
				break;
			case "left":
				r = queueLeft.value.find((v) => v.uuid === uuid);
				break;
			case "right":
				r = queueRight.value.find((v) => v.uuid === uuid);
				break;
		}
		if (r) r._close = !r._close;
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
