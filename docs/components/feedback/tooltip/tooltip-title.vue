<template>
    <LiToolTip title="测试">
        <LiButton>hover</LiButton>
    </LiToolTip>
    <LiToolTip :title="c">
        <LiButton>hover</LiButton>
    </LiToolTip>
</template>
<script setup lang="ts">
    import { computed } from 'vue';
    const c = computed(() => "测试" + Date.now())
</script>
<style scope lang="scss"></style>
