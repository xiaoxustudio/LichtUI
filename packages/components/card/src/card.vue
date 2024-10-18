<template>
	<span :class="[
		bem.b(),
		showType == 'hover' ? enter ? bem.m('shadow') : '' : ''
	]" @mouseenter="enter = true" @mouseleave="enter = false">
		<div :class="[bem.e('header')]" v-if="header || $slots.header">
			<span v-if="header" :class="[bem.em('header', 'title')]">{{ header }}</span>
			<component v-else :is="$slots.header"></component>
		</div>
		<div :class="[bem.e('content')]">
			<component v-if="$slots.default" :is="$slots.default"></component>
			<slot v-else />
		</div>
		<div :class="[bem.e('footer')]" v-if="footer || $slots.footer">
			<span v-if="footer">{{ footer }}</span>
			<component v-else :is="$slots.footer"></component>
		</div>
	</span>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils/create";
	import { cardProp } from "./card";
	import { ref } from "vue";
	defineOptions({ name: "LiCard" });
	defineProps(cardProp);
	const bem = createNamespace("card");
	const enter = ref(false)
</script>
<style scope lang="scss"></style>
