<template>
    <LiRadioGroup v-model="val">
        <LiRadio label="测试" default></LiRadio>
        <LiRadio type="primary" label="测试"></LiRadio>
        <LiRadio type="success" label="测试"></LiRadio>
        <LiRadio type="danger" label="测试"></LiRadio>
        <LiRadio type="warning" label="测试"></LiRadio>
        <LiRadio type="info" label="测试"></LiRadio>
    </LiRadioGroup>
</template>
<script setup lang="ts">
    import { ref } from 'vue';

    const val = ref(false)
</script>