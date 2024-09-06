<script setup lang="ts">
	import { DropdownProp } from "@licht-ui/components/dropdown";
	import { AddCircle, CubeOutline } from "@vicons/ionicons5";
	import { ref } from 'vue';
	const val = ref('')
	const dropdown: DropdownProp['list'] = []
	for (let i in new Array(3).fill(1).map((_val, index) => index)) {
		dropdown.push({
			id: i.toString(),
			label: "列表" + i,
			data: { id: i }
		})
	}
	const handleChange = () => {
		console.log(val.value)
	}
	const handleDropdownItem = (index: any, item: any) => {
		console.log(index, item)
	}
	const list = [
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
		},
	]
</script>

<template>
	<LiRow>
		<LiCol style="margin-bottom: 5%;">
			<LiMenu :default-index="1" :list="list">
				<template v-for="index in 3" #[index]>
					页面{{ index }}
				</template>
			</LiMenu>
		</LiCol>
		<LiCol>
			<div style="background-color: #eee; padding: 5px 2px">
				<b>图标组件</b>
			</div>
		</LiCol>
		<LiCol>
			<LiIcon>
				<AddCircle />
			</LiIcon>
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
		<LiCol>
			<div style="background-color: #eee; padding: 5px 2px">
				<b>文本组件</b>
			</div>
		</LiCol>
		<LiCol>
			<LiInput label="$"></LiInput>
			<LiInput label="$" v-model="val" @change="handleChange" clearable></LiInput>
		</LiCol>
		<LiCol>
			<LiInput>
				<template #label>
					<LiIcon>
						<CubeOutline />
					</LiIcon>
				</template>
			</LiInput>
			<LiInput>
				<template #suffix>
					<LiIcon>
						<CubeOutline />
					</LiIcon>
				</template>
			</LiInput>
		</LiCol>
		<LiCol>
			<LiInput type="default" disabled></LiInput>
			<LiInput type="primary" disabled></LiInput>
			<LiInput type="success" disabled></LiInput>
			<LiInput type="danger" disabled></LiInput>
			<LiInput type="warning" disabled></LiInput>
			<LiInput type="info" disabled></LiInput>
		</LiCol>
		<LiCol>
			<LiInput type="default"></LiInput>
		</LiCol>
		<LiCol>
			<LiInput type="primary"></LiInput>
		</LiCol>
		<LiCol>
			<LiInput type="success"></LiInput>
		</LiCol>
		<LiCol>
			<LiInput type="danger"></LiInput>
		</LiCol>
		<LiCol>
			<LiInput type="warning"></LiInput>
		</LiCol>
		<LiCol>
			<LiInput type="info"></LiInput>
		</LiCol>
		<LiCol>
			<LiInput ntype="password" show-password></LiInput>
		</LiCol>
		<LiCol>
			<div style="background-color: #eee; padding: 5px 2px">
				<b>导航组件</b>
			</div>
		</LiCol>
		<LiCol style="height: 1000px;">
			<LiDropDown :list="dropdown" @command="handleDropdownItem" trigger="click">
				<LiButton>测试</LiButton>
			</LiDropDown>
			<LiDropDown :list="dropdown" @command="handleDropdownItem" position="top" trigger="click">
				<LiButton>测试</LiButton>
			</LiDropDown>
			<LiDropDown :list="dropdown" @command="handleDropdownItem">
				<LiButton>测试</LiButton>
			</LiDropDown>
			<LiDropDown :list="dropdown" @command="handleDropdownItem" position="top">
				<LiButton>测试</LiButton>
			</LiDropDown>
		</LiCol>
	</LiRow>
</template>

<style scoped></style>
