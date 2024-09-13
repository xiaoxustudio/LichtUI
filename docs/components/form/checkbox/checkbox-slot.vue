<template>
    <LiCheckBox v-model="val">
        选项
    </LiCheckBox>
</template>
<script setup lang="ts">
    import { ref } from 'vue';

    const val = ref(false)
</script>