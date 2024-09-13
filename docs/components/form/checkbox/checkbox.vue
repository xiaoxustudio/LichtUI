<template>
    <LiCheckBox label="选项1" v-model="val"></LiCheckBox>
    <LiCheckBox type="primary" label="选项1" v-model="val"></LiCheckBox>
    <LiCheckBox type="success" label="选项1" v-model="val"></LiCheckBox>
    <LiCheckBox type="danger" label="选项1" v-model="val"></LiCheckBox>
    <LiCheckBox type="warning" label="选项1" v-model="val"></LiCheckBox>
    <LiCheckBox type="info" label="选项1" v-model="val"></LiCheckBox>
</template>
<script setup lang="ts">
    import { ref } from 'vue';

    const val = ref(false)
</script>