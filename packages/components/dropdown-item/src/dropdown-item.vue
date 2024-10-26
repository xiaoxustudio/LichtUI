<template>
	<div :class="[bem.b()]">
		<LiCol>
			{{ text }}
		</LiCol>
	</div>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils/create";
	import { dropdownItemProp } from "./dropdown-item";
	defineOptions({
		name: "LiDropDownItem",
	});
	defineProps(dropdownItemProp);

	const bem = createNamespace("dropdownitem");
</script>
<style scope lang="scss"></style>
