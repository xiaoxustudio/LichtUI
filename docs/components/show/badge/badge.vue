<template>
	<LiRow>
		<LiCol :span="4">
			<LiBadge :value="val">
				<LiButton>测试</LiButton>
			</LiBadge>
		</LiCol>
		<LiCol :span="4">
			<LiBadge :value="val" type="primary">
				<LiButton>测试</LiButton>
			</LiBadge>
		</LiCol>
		<LiCol :span="4">
			<LiBadge :value="val" type="success">
				<LiButton>测试</LiButton>
			</LiBadge>
		</LiCol>
		<LiCol :span="4">
			<LiBadge :value="val" type="info">
				<LiButton>测试</LiButton>
			</LiBadge>
		</LiCol>
		<LiCol :span="4">
			<LiBadge :value="val" type="warning">
				<LiButton>测试</LiButton>
			</LiBadge>
		</LiCol>
	</LiRow>
</template>
<script setup lang="ts">
	import { ref } from "vue";

	const val = ref(0);
</script>
<style scope lang="scss"></style>
