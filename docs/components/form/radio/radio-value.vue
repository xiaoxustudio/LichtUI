<template>
	<LiRadioGroup v-model="val">
		<LiRadio>测试</LiRadio>
		<LiRadio type="primary">测试</LiRadio>
		<LiRadio type="success">测试</LiRadio>
		<LiRadio type="danger">测试</LiRadio>
		<LiRadio type="warning">测试</LiRadio>
		<LiRadio type="info">测试</LiRadio>
	</LiRadioGroup>
	当前值为：{{ val }}
</template>
<script setup lang="ts">
	import { ref } from "vue";

	const val = ref(false);
</script>
