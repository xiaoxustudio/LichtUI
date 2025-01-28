<template>
	<LiRow>
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
				<b>表单组件</b>
			</div>
		</LiCol>
		<LiCol>
			<LiInput label="$"></LiInput>
			<LiInput
				label="$"
				v-model="val"
				@change="handleChange"
				clearable
			></LiInput>
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
			<LiCheckBox v-model="booleanVal">测试</LiCheckBox>
			<LiCheckBox type="primary" v-model="booleanVal">测试</LiCheckBox>
			<LiCheckBox type="success" v-model="booleanVal">测试</LiCheckBox>
			<LiCheckBox type="danger" v-model="booleanVal">测试</LiCheckBox>
			<LiCheckBox type="warning" v-model="booleanVal">测试</LiCheckBox>
			<LiCheckBox type="info" v-model="booleanVal">测试</LiCheckBox>
		</LiCol>
		<LiCol>
			<LiCheckBox disabled v-model="booleanVal">测试</LiCheckBox>
			<LiCheckBox disabled type="primary" v-model="booleanVal" label="测试" />
			<LiCheckBox disabled type="success" v-model="booleanVal">测试</LiCheckBox>
			<LiCheckBox disabled type="danger" v-model="booleanVal">测试</LiCheckBox>
			<LiCheckBox disabled type="warning" v-model="booleanVal">测试</LiCheckBox>
			<LiCheckBox disabled type="info" v-model="booleanVal">测试</LiCheckBox>
		</LiCol>
		<LiCol>
			<LiRadioGroup v-model="group">
				<LiRadio>测试</LiRadio>
				<LiRadio type="primary">测试</LiRadio>
				<LiRadio type="success">测试</LiRadio>
				<LiRadio type="danger">测试</LiRadio>
				<LiRadio type="warning">测试</LiRadio>
				<LiRadio type="info" value="测试">测试</LiRadio>
			</LiRadioGroup>
			<LiToolTip title="获取值">
				<LiButton>获取值 {{ group }}</LiButton>
			</LiToolTip>
		</LiCol>
		<LiCol>
			<LiRadio disabled>测试</LiRadio>
			<LiRadio disabled type="primary" label="测试" />
			<LiRadio disabled type="success">测试</LiRadio>
			<LiRadio disabled type="danger">测试</LiRadio>
			<LiRadio disabled type="warning">测试</LiRadio>
			<LiRadio disabled type="info">测试</LiRadio>
		</LiCol>
		<LiCol>
			<LiSwitch v-model="switchVal"></LiSwitch>
			<LiSwitch v-model="switchVal" type="primary" />
			<LiSwitch v-model="switchVal" type="success"></LiSwitch>
			<LiSwitch v-model="switchVal" type="danger"></LiSwitch>
			<LiSwitch v-model="switchVal" type="warning"></LiSwitch>
			<LiSwitch v-model="switchVal" type="info"></LiSwitch>
		</LiCol>
		<LiCol>
			<LiSwitch v-model="switchVal" enable-val="开" disable-val="关">
				<template #default="{ checked }">
					{{ checked }}
				</template>
			</LiSwitch>
			<LiSwitch
				v-model="switchVal"
				enable-val="开"
				disable-val="关"
				type="primary"
			/>
			<LiSwitch
				v-model="switchVal"
				enable-val="开"
				disable-val="关"
				type="success"
			></LiSwitch>
			<LiSwitch
				v-model="switchVal"
				enable-val="开"
				disable-val="关"
				type="danger"
			></LiSwitch>
			<LiSwitch
				v-model="switchVal"
				enable-val="开"
				disable-val="关"
				type="warning"
			></LiSwitch>
			<LiSwitch
				v-model="switchVal"
				enable-val="开"
				disable-val="关"
				type="info"
			></LiSwitch>
		</LiCol>
		<LiCol>
			<LiSwitch v-model="switchVal" disabled></LiSwitch>
			<LiSwitch v-model="switchVal" disabled type="primary" />
			<LiSwitch v-model="switchVal" disabled type="success"></LiSwitch>
			<LiSwitch v-model="switchVal" disabled type="danger"></LiSwitch>
			<LiSwitch v-model="switchVal" disabled type="warning"></LiSwitch>
			<LiSwitch v-model="switchVal" disabled type="info"></LiSwitch>
		</LiCol>
		<LiCol>
			<LiSelect
				v-model="selectVal"
				:list="optionList"
				@command="(index: any, item: any) => console.log(index, item)"
			>
			</LiSelect>
			<LiSelect v-model="selectVal" disabled></LiSelect>
		</LiCol>
		<LiCol>
			<div style="background-color: #eee; padding: 5px 2px">
				<b>导航组件</b>
			</div>
		</LiCol>
		<LiCol style="height: 1000px">
			<LiDropDown
				:list="dropdown"
				@command="handleDropdownItem"
				trigger="click"
			>
				<LiButton>测试</LiButton>
			</LiDropDown>
			<LiDropDown
				:list="dropdown"
				@command="handleDropdownItem"
				position="top"
				trigger="click"
			>
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
<script lang="ts" setup>
	import { DropdownDataItem, ListData } from "@licht-ui/components";
	import { ref } from "vue";
	const val = ref("");
	import { AddCircle, CubeOutline } from "@vicons/ionicons5";
	const booleanVal = ref(false);
	const group = ref(false);
	const switchVal = ref(false);
	const selectVal = ref("");
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
	const handleChange = () => {
		console.log(val.value);
	};
	const handleDropdownItem = (index: any, item: any) => {
		console.log(index, item);
	};
	const dropdown: DropdownDataItem[] = [];
	for (let i in new Array(3).fill(1).map((_val, index) => index)) {
		dropdown.push({
			id: i.toString(),
			label: "列表" + i,
			data: { id: i },
		});
	}
</script>
