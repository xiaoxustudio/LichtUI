<script setup lang="ts">
	import { MenuItemData } from '@licht-ui/components';
	import Show1 from './show1.vue';
	import Show2 from './show2.vue';

	const handleMenuItem = (index: any, item: any) => {
		console.log(index, item)
	}
	const handleSubMenuItem = (index: any, item: any) => {
		console.log(index, item)
	}
	const list: MenuItemData[] = [
		{
			icon: 'https://s3.bmp.ovh/imgs/2024/08/28/136ab813ae9e0e5f.png'
		},
		{
			label: "首页",
		},
		{
			label: "合集",
		},
		{
			label: "我的",
			list: [
				{
					label: '测试'
				}
			]
		},
	]
</script>

<template>
	<LiRow>
		<LiCol style="margin-bottom: 5%;">
			<LiMenu :default-index="2" @command="handleMenuItem" @sub-command="handleSubMenuItem" :list>
				<template v-for="index in 3" #[index]>
					<Show1 v-if="index === 1" />
					<Show2 v-if="index === 2" />
				</template>
			</LiMenu>
		</LiCol>
	</LiRow>
</template>

<style scoped></style>
