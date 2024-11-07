<template>
    <LiRow style="width: 600px;display: flex;" :gutter="50">
        <LiCol>
            <LiAlert closable @on-close="handleClose">徐然</LiAlert>
        </LiCol>
    </LiRow>
</template>
<script setup lang="ts">
    const handleClose = () => {
        alert("关闭")
    }
</script>
<style scope lang="scss"></style>
