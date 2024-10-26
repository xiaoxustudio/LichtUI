<template>
	<li
		ref="LiRef"
		:class="[bem.b(), active && bem.m('active')]"
		@click.stop="handleClick"
		@mouseenter="_is_show_sub_menu = true"
		@mouseleave="!enterDrop && (_is_show_sub_menu = false)"
	>
		<div :style="{ width: '100%', height: '100%' }">
			<LiIcon v-if="data?.icon">
				<img
					:class="[bem.m('icon')]"
					ref="IconRef"
					:src="data?.icon"
					style="height: inherit"
				/>
			</LiIcon>
			<slot />
		</div>
		<MenuItemDrop
			v-if="_is_show_sub_menu && data?.list"
			:data="data?.list"
			@SelectSubMenu="handleSubMenu"
		>
		</MenuItemDrop>
	</li>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils/create";
	import { MenuItemData, MenuItemEmits, menuItemProp } from "./menu-item";
	import MenuItemDrop from "./menu-item-drop.vue";
	import { onMounted, provide, ref } from "vue";
	// import { DropdownDataItem } from '@licht-ui/components/dropdown';
	defineOptions({
		name: "LiMenuItem",
	});
	const prop = defineProps(menuItemProp);
	const emit = defineEmits<MenuItemEmits>();

	const LiRef = ref<HTMLLIElement>();
	const IconRef = ref<HTMLImageElement>();
	const bem = createNamespace("menuitem");
	const handleClick = () => {
		emit("SelectMenu", prop.index!, prop.data!);
	};
	const handleSubMenu = (index: number, item: MenuItemData) => {
		emit("SelectSubMenu", index, item);
	};
	const _is_show_sub_menu = ref(false);
	const enterDrop = ref(false);
	provide("enterDrop", enterDrop);
	onMounted(() => {
		if (IconRef.value && LiRef.value) {
			const bound = LiRef.value.getBoundingClientRect();
			IconRef.value.style.width = `${prop.data?.label ? bound.height / 2 + "px" : bound.height / 1 - 1 + "px"}`;
		}
	});
</script>
<style scope lang="scss"></style>
