<template>
	<LiTable :tableData="tableData" stripe>
		<LiTableItem prop="date"></LiTableItem>
		<LiTableItem prop="name"></LiTableItem>
		<LiTableItem prop="address"></LiTableItem>
	</LiTable>
</template>
<script setup lang="ts">
	const tableData = [
		{
			date: "2016-05-03",
			name: "Tom",
			address: "No. 189, Grove St, Los Angeles",
		},
		{
			date: "20226-123-03",
			name: "徐然",
			address: "测试",
		},
		{
			date: "2016-05-03",
			name: "Tom",
			address: "No. 189, Grove St, Los Angeles",
		},
		{
			date: "20226-123-03",
			name: "徐然",
			address: "测试",
		},
	];
</script>
<style scope lang="scss"></style>
