<template>
    <LiButton @click="handleClick">徐然</LiButton>
</template>
<script setup lang="ts">
    import { message } from '@licht-ui/components/message';
    const handleClick = () => {
        message({
            content: '测试',
        })
        message({
            content: '测试', type: "primary"
        })
        message({
            content: '测试', type: "danger"
        })
        message({
            content: '测试', type: "default"
        })
        message({
            content: '测试', type: "info"
        })
        message({
            content: '测试', type: "warnning",
            closed: true
        })
        message({
            content: '测试', type: "success",
            closed: true
        })
    }
</script>
<style scope lang="scss"></style>
