<template>
    <li ref="LiRef" :class="[bem.b(), active && bem.m('active')]" @click="handleClick">
        <LiIcon v-if="data?.icon">
            <img :class="[bem.m('icon')]" ref="IconRef" :src="data?.icon" style="height: inherit;" />
        </LiIcon>
        <slot />
    </li>
</template>
<script setup lang="ts">
    import { createNamespace } from '@licht-ui/utils/create';
    import { menuItemProp } from './menu-item';
    import { onMounted, ref } from 'vue';
    defineOptions({
        name: "LiMenuItem",
    })
    const prop = defineProps(menuItemProp)
    const emit = defineEmits(['select-menu'])

    const LiRef = ref<HTMLLIElement>()
    const IconRef = ref<HTMLImageElement>()
    const bem = createNamespace("menuitem")
    const handleClick = () => {
        emit("select-menu", prop.index, prop.data)
    }

    onMounted(() => {
        if (IconRef.value && LiRef.value) {
            const bound = LiRef.value.getBoundingClientRect()
            IconRef.value.style.width = `${prop.data?.label ? bound.height / 2 + 'px' : bound.height / 1 - 1 + 'px'}`
        }
    })
</script>
<style scope lang="scss"></style>
