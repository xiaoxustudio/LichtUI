<template>
    <LiCard header="标题" footer="2023-05-10" :style="{ maxWidth: '300px' }">
        测试
    </LiCard>
    <LiCard header="标题" footer="2023-05-10" :style="{ maxWidth: '300px' }">
        <template #header>
            标题
        </template>
        <template #default>
            测试
        </template>
        <template #fotter>
            2023-05-10
        </template>
    </LiCard>
</template>
<script setup lang="ts">

</script>
<style scope lang="scss"></style>
