<template>
	<LiRow style="width: 600px; display: flex; gap: 20px" :gutter="50">
		<LiCol style="display: flex; gap: 20px">
			<LiTag round>测试</LiTag>
			<LiTag type="primary" round>测试</LiTag>
			<LiTag type="success" round>测试</LiTag>
			<LiTag type="danger" round>测试</LiTag>
			<LiTag type="info" round>测试</LiTag>
			<LiTag type="warning" round>测试</LiTag>
		</LiCol>
		<LiCol style="display: flex; gap: 20px">
			<LiTag theme="dark" round>测试</LiTag>
			<LiTag type="primary" theme="dark" round>测试</LiTag>
			<LiTag type="success" theme="dark" round>测试</LiTag>
			<LiTag type="danger" theme="dark" round>测试</LiTag>
			<LiTag type="info" theme="dark" round>测试</LiTag>
			<LiTag type="warning" theme="dark" round>测试</LiTag>
		</LiCol>
		<LiCol style="display: flex; gap: 20px">
			<LiTag theme="plain" round>测试</LiTag>
			<LiTag type="primary" theme="plain" round>测试</LiTag>
			<LiTag type="success" theme="plain" round>测试</LiTag>
			<LiTag type="danger" theme="plain" round>测试</LiTag>
			<LiTag type="info" theme="plain" round>测试</LiTag>
			<LiTag type="warning" theme="plain" round>测试</LiTag>
		</LiCol>
	</LiRow>
</template>
<script setup lang="ts"></script>
<style scope lang="scss"></style>
