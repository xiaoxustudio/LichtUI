<template>
	<LiSelect disabled v-model="val"></LiSelect>
</template>
<script setup lang="ts">
	import { ref } from "vue";

	const val = ref(false);
</script>
