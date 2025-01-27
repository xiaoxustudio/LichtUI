<template>
	<LiCollapse>
		<LiCollapseItem v-for="(_, ind) in new Array(5).fill(0)">
			<template #title>
				<div style="display: flex; align-items: center">
					<img
						style="width: 24px; height: 24px; display: inline"
						src="https://s3.bmp.ovh/imgs/2024/08/28/136ab813ae9e0e5f.png"
					/>
					<span>我是标题{{ ind }}</span>
				</div>
			</template>
			<template #default> 我是内容{{ ind }} </template>
		</LiCollapseItem>
	</LiCollapse>
</template>
<script setup lang="ts"></script>
<style scope lang="scss"></style>
