<template>
	<div ref="selectRef" :class="[
		bem.b(),
		type === 'default' && bem.m('default'),
		type === 'primary' && bem.m('primary'),
		type === 'success' && bem.m('success'),
		type === 'danger' && bem.m('danger'),
		type === 'warning' && bem.m('warning'),
		type === 'info' && bem.m('info')
	]" @click.stop="handleClick">
		<div :class="[bem.e('selection'), bem.is('disabled', disabled)]">
			<input :class="[bem.e('input'), bem.is('disabled', disabled)]" v-model="modelValue" type="text" readonly
				:disabled>
			<span :class="[bem.e('arrow'), bem.is('open', is_show), bem.is('disabled', disabled)]">
				<AIcon></AIcon>
			</span>
		</div>
		<ul :class="bem.e('droplist')" v-if="is_show">
			<li :class="bem.em('droplist', 'droplist-item')" :key="item.name + index" v-for="item, index in list"
				@click="handleDropDown(index, item)">
				{{ item.name }}
			</li>
		</ul>
	</div>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils/create";
	import { ListData, selectEmits, selectProp } from './select';
	import AIcon from './arrow-icon.vue';
	import { onMounted, onUnmounted, ref } from "vue";
	defineOptions({ name: "LiSelect" });
	const emit = defineEmits<selectEmits>()
	const prop = defineProps(selectProp);
	const bem = createNamespace("select");
	const is_show = ref(false)
	const selectRef = ref<HTMLDivElement>()
	const modelValue = defineModel<typeof selectProp['modelValue']>()
	const handleClick = () => {
		if (prop.disabled) return
		is_show.value = !is_show.value
	}
	const clickEvent = (e: MouseEvent) => {
		if (selectRef.value && e.target) {
			const dom = selectRef.value
			if (e.currentTarget !== dom)
				is_show.value = false
		}
	}
	const handleDropDown = (index: number, list: ListData) => {
		emit('command', index, list)
		modelValue.value = list.value
	}
	onMounted(() => {
		window.addEventListener('click', clickEvent);
	})
	onUnmounted(() => {
		window.removeEventListener('click', clickEvent);
	})
</script>
<style scope lang="scss"></style>
