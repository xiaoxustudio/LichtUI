<template>
	<LiButton @click="handleClick">徐然</LiButton>
	<LiButton @click="handleModal">Madal</LiButton>
	<LiModal :show="showModal" ok-text="徐然" cancle-text="徐然" @on-ok="showModal = !showModal"
		@on-cancle="showModal = !showModal">
		我啊是第几哦按时间段俩势均力敌加萨里的吉拉斯觉得i来加深理解低价奥斯陆冬季俩手机的丽萨讲道理加萨莉的就是俩就类似啊甲第六十九i拉丝机
	</LiModal>
	<LiRow :gutter="20">
		<LiCol style="display: flex; gap: 20px">
			<LiTag>测试</LiTag>
			<LiTag type="primary">测试</LiTag>
			<LiTag type="success">测试</LiTag>
			<LiTag type="danger">测试</LiTag>
			<LiTag type="info">测试</LiTag>
			<LiTag type="warning">测试</LiTag>
		</LiCol>
		<LiCol style="display: flex; gap: 20px">
			<LiTag closable>测试</LiTag>
			<LiTag type="primary" closable>测试</LiTag>
			<LiTag type="success" closable>测试</LiTag>
			<LiTag type="danger" closable>测试</LiTag>
			<LiTag type="info" closable>测试</LiTag>
			<LiTag type="warning" closable>测试</LiTag>
		</LiCol>
		<LiCol style="display: flex; gap: 20px">
			<LiTag theme="dark">测试</LiTag>
			<LiTag type="primary" theme="dark">测试</LiTag>
			<LiTag type="success" theme="dark">测试</LiTag>
			<LiTag type="danger" theme="dark">测试</LiTag>
			<LiTag type="info" theme="dark">测试</LiTag>
			<LiTag type="warning" theme="dark">测试</LiTag>
		</LiCol>
		<LiCol style="display: flex; gap: 20px">
			<LiTag theme="plain">测试</LiTag>
			<LiTag type="primary" theme="plain">测试</LiTag>
			<LiTag type="success" theme="plain">测试</LiTag>
			<LiTag type="danger" theme="plain">测试</LiTag>
			<LiTag type="info" theme="plain">测试</LiTag>
			<LiTag type="warning" theme="plain">测试</LiTag>
		</LiCol>
		<LiCol style="display: flex; gap: 20px">
			<LiTag round>测试</LiTag>
			<LiTag type="primary" round>测试</LiTag>
			<LiTag type="success" round>测试</LiTag>
			<LiTag type="danger" round>测试</LiTag>
			<LiTag type="info" round>测试</LiTag>
			<LiTag type="warning" round>测试</LiTag>
		</LiCol>
		<LiCol style="display: flex; gap: 20px">
			<LiLink href="http://www.baidu.com">测试</LiLink>
			<LiLink type="primary" href="http://www.baidu.com">测试</LiLink>
			<LiLink type="success" href="http://www.baidu.com">测试</LiLink>
			<LiLink type="danger" href="http://www.baidu.com">测试</LiLink>
			<LiLink type="info" href="http://www.baidu.com">测试</LiLink>
			<LiLink type="warning" href="http://www.baidu.com">测试</LiLink>
		</LiCol>
		<LiCol style="display: flex; gap: 20px">
			<LiLink href="http://www.baidu.com" disabled>测试</LiLink>
			<LiLink type="primary" href="http://www.baidu.com" disabled>测试</LiLink>
			<LiLink type="success" href="http://www.baidu.com" disabled>测试</LiLink>
			<LiLink type="danger" href="http://www.baidu.com" disabled>测试</LiLink>
			<LiLink type="info" href="http://www.baidu.com" disabled>测试</LiLink>
			<LiLink type="warning" href="http://www.baidu.com" disabled>测试</LiLink>
		</LiCol>
		<LiCol style="display: flex; gap: 20px">
			<LiSlider />
		</LiCol>
		<LiCol style="display: flex; gap: 20px">
			<LiSlider v-model="progress" @on-change="handleSliderChange" />
		</LiCol>
		<LiCol style="display: flex; gap: 20px">
			<LiSlider v-model="progress" :step="10" @on-change="handleSliderChange" />
		</LiCol>
		<LiCol style="display: flex; gap: 20px">
			<LiSlider :value="30" disabled />
		</LiCol>
		<LiCol style="display: flex; gap: 20px">
			<LiSlider :value="30" disabled />
		</LiCol>
		<LiCol style="display: flex; gap: 20px">
			<LiToolTip title="测试">
				<LiButton>hover</LiButton>
			</LiToolTip>
			<LiToolTip title="测试" trigger="click">
				<LiButton>click</LiButton>
			</LiToolTip>
			<LiToolTip title="测试" trigger="contextmenu">
				<LiButton>contextmenu</LiButton>
			</LiToolTip>
		</LiCol>
		<LiCol style="display: flex; gap: 20px">
			<LiToolTip title="测试" :show="showTooltip">
				<LiButton @click="showTooltip = !showTooltip">切换</LiButton>
			</LiToolTip>
		</LiCol>
		<LiCol>
			<LiCollapse>
				<LiCollapseItem title="测试">测试</LiCollapseItem>
				<LiCollapseItem>测试</LiCollapseItem>
			</LiCollapse>
			<LiCollapse accordion>
				<LiCollapseItem title="测试">测试</LiCollapseItem>
				<LiCollapseItem>测试</LiCollapseItem>
			</LiCollapse>
		</LiCol>
		<LiCol>
			<LiTable :tableData="tableData">
				<LiTableItem prop="date"></LiTableItem>
				<LiTableItem prop="name"></LiTableItem>
				<LiTableItem prop="address"></LiTableItem>
			</LiTable>
			<LiTable :tableData="tableData" stripe>
				<LiTableItem prop="date"></LiTableItem>
				<LiTableItem prop="name"></LiTableItem>
				<LiTableItem prop="address"></LiTableItem>
			</LiTable>
			<LiTable :tableData="tableData" border>
				<LiTableItem prop="date"></LiTableItem>
				<LiTableItem prop="name"></LiTableItem>
				<LiTableItem prop="address"></LiTableItem>
			</LiTable>
		</LiCol>
		<LiCol style="display: flex; gap: 20px">
			<LiBadge is-dot>
				<LiButton>测试</LiButton>
			</LiBadge>
			<LiBadge>
				<template #value> 徐然最帅 </template>
				<LiButton>测试</LiButton>
			</LiBadge>
			<LiBadge value="徐然" :min="0" :max="99">
				<LiButton>测试</LiButton>
			</LiBadge>
			<LiBadge :value="10" :min="0" :max="99">
				<LiButton>测试</LiButton>
			</LiBadge>
			<LiBadge :value="10" :min="0" :max="99" type="primary">
				<LiButton>测试</LiButton>
			</LiBadge>
			<LiBadge :value="10" :min="0" :max="99" type="success">
				<LiButton>测试</LiButton>
			</LiBadge>
			<LiBadge :value="10" :min="0" :max="99" type="info">
				<LiButton>测试</LiButton>
			</LiBadge>
			<LiBadge :value="10" :min="0" :max="99" type="warning">
				<LiButton>测试</LiButton>
			</LiBadge>
		</LiCol>
	</LiRow>
</template>
<script setup lang="ts">
	import { message } from "@licht-ui/components/message";
	import { ref } from "vue";
	const showModal = ref(false);
	const progress = ref(0);
	const showTooltip = ref(false);
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
	const handleModal = () => (showModal.value = !showModal.value);
	const handleSliderChange = (val: number) => console.log("SliderChange:", val);
	const handleClick = () => {
		message({
			content: "测试",
		});
		message({
			content: "测试",
			type: "primary",
		});
		message({
			content: "测试",
			type: "danger",
		});
		message({
			content: "测试",
			type: "default",
		});
		message({
			content: "测试",
			type: "info",
			location: "left",
		});
		message({
			content: "测试",
			type: "warning",
			closed: true,
			location: "center",
		});
		message({
			content: "测试",
			type: "success",
			closed: true,
			location: "right",
		});
	};
</script>
<style scope lang="scss"></style>
