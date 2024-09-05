<template>
	<div :class="[bem.b()]" v-if="slots?.default" @mouseenter="is_show = true" @mouseleave="is_show = false">
		<LiRow :id="randid" :style="cssStyle" :class="[bem.m('container')]">
			<LiDropDownItem :key="'dropdownitem' + index + item.id" v-for="(item, index) in list" :text="item.label"
				:meta="item?.data" @click="handleItem(item, index)"></LiDropDownItem>
		</LiRow>
		<div ref="slotRef">
			<slot />
		</div>
	</div>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils/create";
	import { dropdownEmits, dropdownProp, DropdownDataItem } from "./dropdown";
	import { CSSProperties, onMounted, onUnmounted, ref, useSlots, watch } from "vue";

	defineOptions({
		name: "LiDropDown",
	});
	const prop = defineProps(dropdownProp);
	const emit = defineEmits<dropdownEmits>()
	const randid = `li-dropdown-id-${Math.floor(Math.random() * 99999 + 1)}`

	const slots = useSlots()
	const is_show = ref(false)
	const slotRef = ref<HTMLDivElement>()
	const cssStyle = ref<CSSProperties>({
		bottom: 'auto',
		top: 'auto',
	})
	const handleItem = (item:
		DropdownDataItem, index:
			number) => {
		emit('command', index, item)
	}

	const bem = createNamespace("dropdown");

	const scrollEvent = () => {
		if (!slotRef.value) return;
		if (is_show.value) {
			cssStyle.value.transform = 'scaleY(1)'
		} else {
			cssStyle.value.transform = ''
		}
		const element = slotRef.value;
		const drc = document.querySelector(`#${randid}`);
		if (!drc) return
		const elementRect = element.getBoundingClientRect();
		const drcRect = drc.getBoundingClientRect();
		const Reset = () => {
			cssStyle.value.bottom = 'auto';
			cssStyle.value.top = `${elementRect.height}px`;
		}
		const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

		if (prop.position === "bottom") {
			cssStyle.value.transformOrigin = `left top`;
			if (elementRect.bottom + drcRect.height > viewportHeight) {
				cssStyle.value.top = 'auto';
				cssStyle.value.bottom = `${elementRect.height}px`;
			} else if (drcRect.bottom > viewportHeight) {
				Reset()
			} else {
				Reset()
			}
		} else if (prop.position === "top") {
			cssStyle.value.transformOrigin = `bottom`;
			if (drcRect.height - elementRect.top < 0) {
				cssStyle.value.top = 'auto';
				cssStyle.value.bottom = `${elementRect.height}px`;
			} else {
				Reset()
			}
		}
	}
	watch([is_show], scrollEvent)
	onMounted(() => {
		window.addEventListener('scroll', scrollEvent);
	})
	onUnmounted(() => {
		window.addEventListener('scroll', scrollEvent);
	})
</script>