<template>
	<LiRow style="width: 600px; display: flex; gap: 20px" :gutter="50">
		<LiCol style="display: flex; gap: 20px">
			<LiTag>测试</LiTag>
			<LiTag type="primary">测试</LiTag>
			<LiTag type="success">测试</LiTag>
			<LiTag type="danger">测试</LiTag>
			<LiTag type="info">测试</LiTag>
			<LiTag type="warning">测试</LiTag>
		</LiCol>
		<LiCol style="display: flex; gap: 20px">
			<LiTag theme="dark">测试</LiTag>
			<LiTag type="primary" theme="dark">测试</LiTag>
			<LiTag type="success" theme="dark">测试</LiTag>
			<LiTag type="danger" theme="dark">测试</LiTag>
			<LiTag type="info" theme="dark">测试</LiTag>
			<LiTag type="warning" theme="dark">测试</LiTag>
		</LiCol>
		<LiCol style="display: flex; gap: 20px">
			<LiTag theme="plain">测试</LiTag>
			<LiTag type="primary" theme="plain">测试</LiTag>
			<LiTag type="success" theme="plain">测试</LiTag>
			<LiTag type="danger" theme="plain">测试</LiTag>
			<LiTag type="info" theme="plain">测试</LiTag>
			<LiTag type="warning" theme="plain">测试</LiTag>
		</LiCol>
	</LiRow>
</template>
<script setup lang="ts"></script>
<style scope lang="scss"></style>
