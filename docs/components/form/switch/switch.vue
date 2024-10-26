<template>
	<LiSwitch v-model="val"></LiSwitch>
	<LiSwitch v-model="val" type="primary"></LiSwitch>
	<LiSwitch v-model="val" type="success"></LiSwitch>
	<LiSwitch v-model="val" type="danger"></LiSwitch>
	<LiSwitch v-model="val" type="warning"></LiSwitch>
	<LiSwitch v-model="val" type="info"></LiSwitch>
</template>
<script setup lang="ts">
	import { ref } from "vue";

	const val = ref(false);
</script>
