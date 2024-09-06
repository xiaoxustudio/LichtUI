<template>
	<ul :class="[
		bem.b(),
		direction == 'row' && bem.m('row'),
		direction == 'col' && bem.m('col'),
	]">
		<LiMenuItem @select-menu="handleSelectMenu" :key="index" v-for="(item, index) in list" :index="index"
			:data="item" :active="CurrentIndex === index">
			{{ item.label }}
		</LiMenuItem>
	</ul>
	<LiRow>
		<LiCol>
			<slot :name="CurrentIndex" :data="list?.[CurrentIndex]" />
		</LiCol>
	</LiRow>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils/create";
	import { MenuItemData } from "@licht-ui/components/menu-item";
	import { menuProp } from "./menu";
	import { ref } from "vue";
	defineOptions({ name: "LiMenu" });
	const prop = defineProps(menuProp);
	const bem = createNamespace("menu");
	const CurrentIndex = ref<number>(prop.defaultIndex)

	const handleSelectMenu = (index: number, _data: MenuItemData) => {
		CurrentIndex.value = index
	}
</script>
<style scope lang="scss"></style>
