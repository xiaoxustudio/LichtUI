<template>
	<LiCheckBox disabled label="选项1" v-model="val"></LiCheckBox>
	<LiCheckBox disabled type="primary" label="选项1" v-model="val"></LiCheckBox>
	<LiCheckBox disabled type="success" label="选项1" v-model="val"></LiCheckBox>
	<LiCheckBox disabled type="danger" label="选项1" v-model="val"></LiCheckBox>
	<LiCheckBox disabled type="warning" label="选项1" v-model="val"></LiCheckBox>
	<LiCheckBox disabled type="info" label="选项1" v-model="val"></LiCheckBox>
</template>
<script setup lang="ts">
	import { ref } from "vue";

	const val = ref(true);
</script>
