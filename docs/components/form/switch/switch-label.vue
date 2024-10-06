<template>
    <LiSwitch v-model="val" enable-val="开" disable-val="关"></LiSwitch>
    <LiSwitch v-model="val" enable-val="开" disable-val="关" type="primary"></LiSwitch>
    <LiSwitch v-model="val" enable-val="开" disable-val="关" type="success"></LiSwitch>
    <LiSwitch v-model="val" enable-val="开" disable-val="关" type="danger"></LiSwitch>
    <LiSwitch v-model="val" enable-val="开" disable-val="关" type="warning"></LiSwitch>
    <LiSwitch v-model="val" enable-val="开" disable-val="关" type="info"></LiSwitch>
</template>
<script setup lang="ts">
    import { ref } from 'vue';

    const val = ref(false)
</script>