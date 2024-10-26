<template>
	<LiSwitch disabled v-model="val"></LiSwitch>
	<LiSwitch disabled v-model="val" type="primary"></LiSwitch>
	<LiSwitch disabled v-model="val" type="success"></LiSwitch>
	<LiSwitch disabled v-model="val" type="danger"></LiSwitch>
	<LiSwitch disabled v-model="val" type="warning"></LiSwitch>
	<LiSwitch disabled v-model="val" type="info"></LiSwitch>
</template>
<script setup lang="ts">
	import { ref } from "vue";

	const val = ref(false);
</script>
