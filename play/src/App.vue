<script setup lang="ts">
	import { AddCircle } from "@vicons/ionicons5";
</script>

<template>
	<LiRow>
		<LiCol>
			<div style="background-color: #eee; padding: 5px 2px">
				<b>图标组件</b>
			</div>
		</LiCol>
		<LiCol>
			<LiIcon><AddCircle /></LiIcon>
			<LiIcon :size="25">
				<AddCircle />
			</LiIcon>
			<LiIcon color="blue" :size="45">
				<AddCircle />
			</LiIcon>
			<LiIcon color="yellow" :size="65">
				<AddCircle />
			</LiIcon>
		</LiCol>
		<LiCol>
			<div style="background-color: #eee; padding: 5px 2px">
				<b>按钮组件</b>
			</div>
		</LiCol>
		<LiCol class="p-1" style="display: flex; gap: 5px">
			<LiButton>测试</LiButton>
			<LiButton type="primary">主要</LiButton>
			<LiButton type="success">成功</LiButton>
			<LiButton type="danger">危险</LiButton>
			<LiButton type="warning">警告</LiButton>
			<LiButton type="info">信息</LiButton>
			<LiButton disabled>失效</LiButton>
		</LiCol>
		<LiCol class="p-1" style="display: flex; gap: 5px">
			<LiButton plain>测试</LiButton>
			<LiButton type="primary" plain>主要</LiButton>
			<LiButton type="success" plain>成功</LiButton>
			<LiButton type="danger" plain>危险</LiButton>
			<LiButton type="warning" plain>警告</LiButton>
			<LiButton type="info" plain>信息</LiButton>
			<LiButton disabled plain>失效</LiButton>
		</LiCol>
		<LiCol class="p-1" style="display: flex; gap: 5px">
			<LiButton round>测试</LiButton>
			<LiButton type="primary" round>主要</LiButton>
			<LiButton type="success" round>成功</LiButton>
			<LiButton type="danger" round>危险</LiButton>
			<LiButton type="warning" round>警告</LiButton>
			<LiButton type="info" round>信息</LiButton>
			<LiButton disabled round>失效</LiButton>
		</LiCol>
		<LiCol class="p-1" style="display: flex; gap: 5px">
			<LiButton round disabled>测试</LiButton>
			<LiButton type="primary" disabled round>主要</LiButton>
			<LiButton type="success" disabled round>成功</LiButton>
			<LiButton type="danger" disabled round>危险</LiButton>
			<LiButton type="warning" disabled round>警告</LiButton>
			<LiButton type="info" disabled round>信息</LiButton>
			<LiButton disabled round>失效</LiButton>
		</LiCol>
		<LiCol class="p-1" style="display: flex; gap: 5px">
			<LiButton plain disabled>测试</LiButton>
			<LiButton type="primary" plain disabled>主要</LiButton>
			<LiButton type="success" plain disabled>成功</LiButton>
			<LiButton type="danger" plain disabled>危险</LiButton>
			<LiButton type="warning" plain disabled>警告</LiButton>
			<LiButton type="info" plain disabled>信息</LiButton>
			<LiButton plain disabled>失效</LiButton>
		</LiCol>
		<LiCol>
			<div style="background-color: #eee; padding: 5px 2px">
				<b>文本组件</b>
			</div>
		</LiCol>
		<LiCol class="p-1" style="display: flex; gap: 5px">
			<LiText>测试</LiText>
			<LiText type="primary">主要</LiText>
			<LiText type="success">成功</LiText>
			<LiText type="danger">危险</LiText>
			<LiText type="warning">警告</LiText>
			<LiText type="info">信息</LiText>
		</LiCol>
		<LiCol class="p-1" style="display: flex; gap: 5px">
			<LiText type="success" bold>信息</LiText>
			<LiText class="w-1" type="primary" truncated>
				我是一个长文本，我将会被truncated截断
			</LiText>
			<LiText tag="bline">底部线</LiText>
			<LiText tag="mline">底部线</LiText>
			<LiText tag="tline">底部线</LiText>
			<LiText tag="mark">着重</LiText>
		</LiCol>
	</LiRow>
</template>

<style scoped></style>
