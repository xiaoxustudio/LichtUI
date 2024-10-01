<template>
    <label :class="[bem.b(), type === 'default' && bem.m('default'),
    type === 'primary' && bem.m('primary'),
    type === 'success' && bem.m('success'),
    type === 'danger' && bem.m('danger'),
    type === 'warning' && bem.m('warning'),
    type === 'info' && bem.m('info'),
    bem.is('disabled', disabled)]">
        <input ref="radioRef" :class="bem.e('original')" :name="data.name" type="radio" :value="label"
            :disabled="disabled" @click.stop="handleChange">
        <span :class="[bem.e('circle'), data.select == radioRef ? bem.e('circle-active') : '']"></span>
        <span v-if="label" @keydown.stop>
            {{ label }}
        </span>
        <slot v-else />
    </label>
</template>
<script setup lang="ts">
    import { createNamespace } from '@licht-ui/utils';
    import { radioEmits, radioProp } from './radio';
    import { inject, nextTick, ref } from 'vue';
    import EmitsEnum from '@licht-ui/utils/EmitEnum';
    import { radioGroupKey } from '@licht-ui/components/radio-group/src/constants';
    defineOptions({
        name: "LiRadio"
    })
    defineProps(radioProp)
    const bem = createNamespace("radio")
    const radioRef = ref<HTMLInputElement>()
    const emit = defineEmits(radioEmits)
    const handleChange = () => {
        const _val = radioRef.value?.checked
        nextTick(() => emit(EmitsEnum.CHANGE_EVENT, _val))
        data.emitChange(radioRef.value!)
    }
    const data = inject(radioGroupKey, {
        name: '',
        emitChange: function (_val: HTMLInputElement | null): void {
            console.warn('缺少LichtRadioGroup组件包裹');
        },
        select: null
    })
</script>
<style scope lang="scss"></style>
