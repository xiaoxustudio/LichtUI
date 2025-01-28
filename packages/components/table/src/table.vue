<template>
	<div :class="[bem.b()]">
		<div :class="bem.em('header', 'wrapper')">
			<slot />
		</div>
		<div :class="[bem.e('column-data')]">
			<div
				:class="[
					bem.e('row'),
					index % 2 !== 0 && stripe && bem.em('row', 'stripe'),
				]"
				:key="index"
				v-for="(item, index) in tableData"
			>
				<div
					:class="[
						bem.e('row-data'),
						border && bem.m('border'),
						sindex % (renderKeys.length - 1) === 0 &&
							sindex !== 0 &&
							border &&
							bem.m('border-right'),
					]"
					:key="sitem"
					v-for="(sitem, sindex) of Object.keys(item).filter((v) =>
						renderKeys.includes(v)
					)"
				>
					{{ item[sitem] }}
				</div>
			</div>
			<div v-if="!renderKeys.length" :class="bem.m('empty')">Empty</div>
		</div>
	</div>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils";
	import { TableProviderpProp, tableProp } from "./table";
	import { provide, ref } from "vue";
	defineOptions({ name: "LiTable" });
	defineProps(tableProp);
	const bem = createNamespace("table");
	const renderKeys = ref<string[]>([]);
	provide(TableProviderpProp.renderKeys, renderKeys.value);
	provide(TableProviderpProp.setRenderKeys, (keys: string) => {
		renderKeys.value = [...new Set([...renderKeys.value, keys])].filter(
			(v) => v && v.length > 0
		);
	});
</script>
<style scope lang="scss"></style>
