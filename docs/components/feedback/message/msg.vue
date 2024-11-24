<template>
	<LiButton type="default" plain @click="handleClick">deafult</LiButton>
	<LiButton type="primary" plain @click="handleClick">primary</LiButton>
	<LiButton type="success" plain @click="handleClick">success</LiButton>
	<LiButton type="danger" plain @click="handleClick">danger</LiButton>
	<LiButton type="warning" plain @click="handleClick">warning</LiButton>
	<LiButton type="info" plain @click="handleClick">info</LiButton>
</template>
<script setup lang="ts">
	import { message } from "@licht-ui/components";

	const handleClick = (e: any) => {
		message({
			content: "我是一个消息提示",
			type: e.target.innerText,
		});
	};
</script>
<style scope lang="scss"></style>
