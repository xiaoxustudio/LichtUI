<template>
	<i :class="bemClass.b()" :style="style">
		<slot />
	</i>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils";
	import { computed } from "vue";
	import { iconProp } from "./icon";
	defineOptions({
		name: "LiIcon",
	});
	const bemClass = createNamespace("icon");

	const prop = defineProps(iconProp);
	const style = computed(() => {
		return {
			...(prop.size ? { "font-size": `${prop.size}px` } : {}),
			...(prop.color ? { color: `${prop.color}` } : {}),
		};
	});
</script>
<style scope lang="scss"></style>
