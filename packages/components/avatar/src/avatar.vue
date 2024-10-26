<template>
	<span
		:class="[bem.b(), bem.is('round', round), bem.m(size)]"
		:style="{
			backgroundColor: bgcolor,
		}"
	>
		<span
			:class="[bem.e('warpper'), bem.is('round', round), bem.m(size)]"
			v-if="src"
		>
			<img
				v-if="!is_show_default"
				:style="styleImg"
				:src="src"
				:alt="alt"
				@error="handleError"
			/>
			<Default v-if="is_show_default" />
		</span>
		<span :class="[bem.e('name'), bem.m(size)]" v-else-if="name">{{
			name
		}}</span>
		<slot v-else />
	</span>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils/create";
	import { avatarProp } from "./avatar";
	import Default from "./default.vue";
	import { ref } from "vue";
	defineOptions({ name: "LiAvatar" });
	defineProps(avatarProp);
	const bem = createNamespace("avatar");
	const is_show_default = ref(false);
	const handleError = () => {
		is_show_default.value = !is_show_default.value;
	};
</script>
<style scope lang="scss"></style>
