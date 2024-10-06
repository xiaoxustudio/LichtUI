<template>
    <LiSwitch v-model="val">
        <template #default="{ checked }">
            {{ checked }}
        </template>
    </LiSwitch>
</template>
<script setup lang="ts">
    import { ref } from 'vue';

    const val = ref(false)
</script>