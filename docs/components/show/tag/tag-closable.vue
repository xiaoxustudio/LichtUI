<template>
	<LiRow style="width: 600px; display: flex; gap: 20px" :gutter="50">
		<LiCol style="display: flex; gap: 20px">
			<LiTag closable>测试</LiTag>
			<LiTag type="primary" closable>测试</LiTag>
			<LiTag type="success" closable>测试</LiTag>
			<LiTag type="danger" closable>测试</LiTag>
			<LiTag type="info" closable>测试</LiTag>
			<LiTag type="warning" closable>测试</LiTag>
		</LiCol>
		<LiCol style="display: flex; gap: 20px">
			<LiTag theme="dark" closable>测试</LiTag>
			<LiTag type="primary" theme="dark" closable>测试</LiTag>
			<LiTag type="success" theme="dark" closable>测试</LiTag>
			<LiTag type="danger" theme="dark" closable>测试</LiTag>
			<LiTag type="info" theme="dark" closable>测试</LiTag>
			<LiTag type="warning" theme="dark" closable>测试</LiTag>
		</LiCol>
		<LiCol style="display: flex; gap: 20px">
			<LiTag theme="plain" closable>测试</LiTag>
			<LiTag type="primary" theme="plain" closable>测试</LiTag>
			<LiTag type="success" theme="plain" closable>测试</LiTag>
			<LiTag type="danger" theme="plain" closable>测试</LiTag>
			<LiTag type="info" theme="plain" closable>测试</LiTag>
			<LiTag type="warning" theme="plain" closable>测试</LiTag>
		</LiCol>
	</LiRow>
</template>
<script setup lang="ts"></script>
<style scope lang="scss"></style>
