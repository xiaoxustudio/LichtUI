<template>
    <div @mouseenter="enterDrop = true" @mouseleave="enterDrop = false" ref="MIDropRef" :class="bem.b()" :style="{
        width: '100%',
    }">
        <ul>
            <li :key="item.label + index.toString()" v-for="item, index in prop.data"
                @click.stop="handleClick(index, item)">
                {{ item.label }}
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
    import { createNamespace } from '@licht-ui/utils';
    import { inject, ref, watchEffect } from 'vue';
    import { menuItemDropProp } from './menu-item-drop';
    import { MenuItemEmits } from './menu-item';
    const MIDropRef = ref<HTMLDivElement>()
    const bem = createNamespace("menuitemdrop")
    const prop = defineProps(menuItemDropProp)
    const UpdatePos = () => {
        if (MIDropRef.value) {
            MIDropRef.value.style.top = `100%`
        }
    }
    const enterDrop = inject('enterDrop')
    const emit = defineEmits<MenuItemEmits>()
    const handleClick = (index: any, item: any) => {
        emit('SelectSubMenu', index, item)
    }
    watchEffect(() => {
        UpdatePos()
    })
</script>
<style scope lang="scss"></style>
