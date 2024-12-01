<template>
	<Teleport to="body">
		<div
			v-if="show"
			:class="bem_mask.b()"
			@wheel="(e) => e.stopPropagation()"
			@click="(e) => e.stopPropagation()"
			:style="dy_styles"
		>
			<div :class="[bem.b()]">
				<div :class="[bem.e('titleWrapper')]">
					<span v-if="title">{{ title }}</span>
					<slot v-else-if="$slots.title" name="title" />
					<span v-else>默认标题</span>
				</div>
				<div :class="[bem.e('contentWrapper')]">
					<span v-if="content">{{ content }}</span>
					<slot v-else />
				</div>
				<div :class="[bem.e('bottomWrapper')]">
					<LiButton @click="handleCancle">{{
						cacheText ? cacheText : "取消"
					}}</LiButton>
					<LiButton type="primary" @click="handleOk">{{
						okText ? okText : "确认"
					}}</LiButton>
				</div>
			</div>
		</div>
	</Teleport>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils";
	import { ModalEmits, modalProp } from "./modal";
	import { CSSProperties, onMounted, onUnmounted, ref } from "vue";
	defineOptions({ name: "LiModal" });
	defineProps(modalProp);
	const bem = createNamespace("modal");
	const bem_mask = createNamespace("mask");
	const emit = defineEmits<ModalEmits>();
	const dy_styles = ref<CSSProperties>({});
	const handleOk = () => {
		emit("onOk");
	};
	const handleCancle = () => {
		emit("onCancle");
	};
	const onclick = (e: MouseEvent) => {
		dy_styles.value["transform-origin"] = `${e.x}px ${e.x}px `;
	};
	onMounted(() => {
		window.addEventListener("click", onclick);
	});
	onUnmounted(() => {
		window.removeEventListener("click", onclick);
	});
</script>
<style scope lang="scss"></style>
