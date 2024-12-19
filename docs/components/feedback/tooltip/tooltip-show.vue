<template>
    <LiToolTip title="测试" :show="show">
        <LiButton @click="handleToggle">切换</LiButton>
    </LiToolTip>
</template>
<script setup lang="ts">
    import { ref } from 'vue';

    const show = ref(false)
    const handleToggle = () => show.value = !show.value
</script>
<style scope lang="scss"></style>
