<template>
	<LiSelect
		v-model="val"
		:list="optionList"
		@command="handleCommand"
	></LiSelect>
</template>
<script setup lang="ts">
	import { ListData } from "@licht-ui/components";
	import { ref } from "vue";
	const optionList: ListData[] = [
		{
			name: "测试",
			value: "123",
		},
		{
			name: "测试1",
			value: "1234",
		},
		{
			name: "测试2",
			value: "12345",
		},
	];
	const val = ref(false);
	const handleCommand = (index: number, data: ListData) => {
		console.log(index, data);
		alert(`index:${index},${JSON.stringify(data)}`);
	};
</script>
