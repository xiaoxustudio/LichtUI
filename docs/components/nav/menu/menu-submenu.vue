<template>
	<LiMenu :default-index="1" :list="list"> </LiMenu>
</template>
<script setup lang="ts">
	const list = [
		{
			icon: "https://s3.bmp.ovh/imgs/2024/08/28/136ab813ae9e0e5f.png",
		},
		{
			label: "首页",
			list: [
				{
					label: "菜单1",
				},
				{
					label: "菜单2",
				},
				{
					label: "菜单3",
				},
			],
		},
		{
			label: "合集",
		},
		{
			label: "我的",
		},
	];
</script>
<style scope lang="scss"></style>
