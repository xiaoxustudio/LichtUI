<template>
	<div :class="[
		bem.b(),
		bem.m(type),
		bem.m(ntype),
		bem.is('foucs', is_foucs),
		bem.is('disabled', disabled),
	]" @mouseenter.stop="is_mouse_enter = true" @mouseleave.stop="is_mouse_enter = false" @focusin="is_foucs = true"
		@focusout="is_foucs = false">
		<span class="left-inner" v-if="!!label">
			{{ label }}
		</span>
		<span class="left-inner" v-if="$slots?.label">
			<slot name="label" />
		</span>
		<input ref="inputRef" :type="ntype" :value="modelValue" @input="handleInput"
			:autocomplete="showPassword ? 'on' : 'off'" :placeholder="placeholder" :disabled="disabled" />
		<span :class="['show-password', 'right-inner']" v-if="showPassword || ntype === 'password'" @click="changeShow">
			<LeftIcon v-if="is_mouse_enter" :show="is_show" />
		</span>
		<span class="right-inner" v-if="$slots?.suffix">
			<slot name="suffix" />
		</span>
		<span :class="['right-inner', bem.m('clearable')]" v-if="clearable && !showPassword && !$slots?.suffix"
			@click="inputRef && (modelValue = '')">
			<ClaerIcon v-if="is_mouse_enter" />
		</span>
	</div>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils";
	import { inputProp } from "./input";
	import { ref } from "vue";
	import ClaerIcon from "./clear-icon.vue";
	import LeftIcon from "./pwd-icon.vue";
	defineOptions({ name: "LiInput" });
	defineProps(inputProp);

	const is_foucs = ref(false);
	const is_mouse_enter = ref(false);
	const is_show = ref(false);
	const inputRef = ref<HTMLInputElement>();

	const modelValue = defineModel<string>("modelValue", {
		default: "",
	});

	const bem = createNamespace("input");

	const handleInput = (event: Event) => {
		modelValue.value = (event.target as HTMLInputElement).value;
	};

	const changeShow = () => {
		is_show.value = !is_show.value;
		if (inputRef.value) {
			is_show.value
				? (inputRef.value.type = "text")
				: (inputRef.value.type = "password");
		}
	};
</script>
<style scope lang="scss"></style>
