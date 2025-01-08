<template>
    <LiSlider v-model="val" :step="10"></LiSlider>
</template>
<script setup lang="ts">
    import { ref } from "vue";

    const val = ref(0);
</script>
