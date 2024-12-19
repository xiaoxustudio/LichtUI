<template>
    <LiToolTip title="测试" :disabled="disabled">
        <LiButton @click="handleClick">{{ !disabled ? '可显示' : '不能显示' }}</LiButton>
    </LiToolTip>
</template>
<script setup lang="ts">
    import { ref } from 'vue';

    const disabled = ref(false)
    const handleClick = () => disabled.value = !disabled.value
</script>
<style scope lang="scss"></style>
