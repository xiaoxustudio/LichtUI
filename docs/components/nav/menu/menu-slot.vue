<template>
    <LiMenu :default-index="1" :list="list">
        <template #1="{ data }">
            <LiText>{{ data }}</LiText>
            <LiButton>{{ data.label }}</LiButton>
        </template>
        <template #2="{ data }">
            <LiText>{{ data }}</LiText>
            <LiButton type="primary">{{ data.label }}</LiButton>
        </template>
        <template #3="{ data }">
            <LiText>{{ data }}</LiText>
            <LiButton type="success">{{ data.label }}</LiButton>
        </template>
    </LiMenu>
</template>
<script setup lang="ts">
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
<style scope lang="scss"></style>
