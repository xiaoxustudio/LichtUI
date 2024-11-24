<template>
	<LiButton type="default" plain @click="handleClick">left</LiButton>
	<LiButton type="info" plain @click="handleClick">center</LiButton>
	<LiButton type="warning" plain @click="handleClick">right</LiButton>
</template>
<script setup lang="ts">
	import { message } from "@licht-ui/components";

	const handleClick = (e: any) => {
		message({
			content: "我是一个消息提示",
			type: "primary",
			location: e.target.innerText,
		});
	};
</script>
<style scope lang="scss"></style>
