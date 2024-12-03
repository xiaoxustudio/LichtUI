<template>
	<Transition name="fade">
		<span
			v-if="show"
			:class="[
				bem.b(),
				type === 'default' && bem.m('default'),
				type === 'primary' && bem.m('primary'),
				type === 'success' && bem.m('success'),
				type === 'danger' && bem.m('danger'),
				type === 'warning' && bem.m('warning'),
				type === 'info' && bem.m('info'),
			]"
		>
			<span><slot /></span>
			<span
				v-if="closed"
				:class="[
					bem.e('closed'),
					type === 'default' && hover && bem.em('closed', 'default'),
					type === 'primary' && hover && bem.em('closed', 'primary'),
					type === 'success' && hover && bem.em('closed', 'success'),
					type === 'danger' && hover && bem.em('closed', 'danger'),
					type === 'warning' && hover && bem.em('closed', 'warning'),
					type === 'info' && hover && bem.em('closed', 'info'),
				]"
				@mouseenter="hover = true"
				@mouseleave="hover = false"
				@click.once="handleClick"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
					<path
						fill="currentColor"
						d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
					></path>
				</svg>
			</span>
		</span>
	</Transition>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils";
	import { tagProp } from "./tag";
	import { ref } from "vue";
	defineOptions({ name: "LiTag" });
	defineProps(tagProp);
	const bem = createNamespace("tag");
	const show = ref(true);
	const hover = ref(false);
	const handleClick = () => {
		show.value = !show.value;
	};
</script>
<style scope lang="scss">
	.fade-move,
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s ease;
	}

	.fade-enter-from,
	.fade-leave-from {
		opacity: 0;
	}
</style>
