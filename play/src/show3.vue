<template>
	<LiButton @click="handleClick">徐然</LiButton>
	<LiButton @click="handleModal">Madal</LiButton>
	<LiModal
		:show="showModal"
		ok-text="徐然"
		cancle-text="徐然"
		@on-ok="showModal = !showModal"
		@on-cancle="showModal = !showModal"
	>
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
			<LiTag closed>测试</LiTag>
			<LiTag type="primary" closed>测试</LiTag>
			<LiTag type="success" closed>测试</LiTag>
			<LiTag type="danger" closed>测试</LiTag>
			<LiTag type="info" closed>测试</LiTag>
			<LiTag type="warning" closed>测试</LiTag>
		</LiCol>
	</LiRow>
</template>
<script setup lang="ts">
	import { message } from "@licht-ui/components/message";
	import { ref } from "vue";
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
	const showModal = ref(false);
	const handleModal = () => (showModal.value = !showModal.value);
</script>
<style scope lang="scss"></style>
