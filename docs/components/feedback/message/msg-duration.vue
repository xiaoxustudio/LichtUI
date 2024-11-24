<template>
	<LiButton type="default" plain @click="handleClick">500</LiButton>
	<LiButton type="info" plain @click="handleClick">1000</LiButton>
	<LiButton type="warning" plain @click="handleClick">2000</LiButton>
</template>
<script setup lang="ts">
	import { message } from "@licht-ui/components";

	const handleClick = (e: any) => {
		message({
			content: "我是一个消息提示",
			type: "primary",
			duration: e.target.innerText,
		});
	};
</script>
<style scope lang="scss"></style>
