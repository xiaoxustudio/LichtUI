<template>
    当前值为：{{ val }}
    <LiSlider v-model="val" :min="-100" :max="200"></LiSlider>
</template>
<script setup lang="ts">
    import { ref } from "vue";

    const val = ref(-100);
</script>
