<template>
	<LiButton @click="handleClick">徐然</LiButton>
	<LiButton @click="handleModal">Madal</LiButton>
	<LiModal
		:show="showModal"
		ok-text="徐然"
		@on-ok="showModal = !showModal"
		@on-cancle="showModal = !showModal"
	>
		我啊是第几哦按时间段俩势均力敌加萨里的吉拉斯觉得i来加深理解低价奥斯陆冬季俩手机的丽萨讲道理加萨莉的就是俩就类似啊甲第六十九i拉丝机
	</LiModal>
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
