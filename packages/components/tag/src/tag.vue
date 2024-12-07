<template>
	<Transition name="fade">
		<span
			v-if="show"
			:class="[
				bem.b(),
				bem.is('round', round),
				type === 'default' && bem.m('default'),
				type === 'primary' && bem.m('primary'),
				type === 'success' && bem.m('success'),
				type === 'danger' && bem.m('danger'),
				type === 'warning' && bem.m('warning'),
				type === 'info' && bem.m('info'),
				theme === 'dark' && type === 'default' && bem.em('dark', 'default'),
				theme === 'dark' && type === 'primary' && bem.em('dark', 'primary'),
				theme === 'dark' && type === 'success' && bem.em('dark', 'success'),
				theme === 'dark' && type === 'danger' && bem.em('dark', 'danger'),
				theme === 'dark' && type === 'warning' && bem.em('dark', 'warning'),
				theme === 'dark' && type === 'info' && bem.em('dark', 'info'),
				theme === 'plain' && type === 'default' && bem.em('plain', 'default'),
				theme === 'plain' && type === 'primary' && bem.em('plain', 'primary'),
				theme === 'plain' && type === 'success' && bem.em('plain', 'success'),
				theme === 'plain' && type === 'danger' && bem.em('plain', 'danger'),
				theme === 'plain' && type === 'warning' && bem.em('plain', 'warning'),
				theme === 'plain' && type === 'info' && bem.em('plain', 'info'),
			]"
		>
			<span><slot /></span>
			<span
				v-if="closable"
				:class="[
					bem.e('closable'),
					type === 'default' && hover && bem.em('closable', 'default'),
					type === 'primary' && hover && bem.em('closable', 'primary'),
					type === 'success' && hover && bem.em('closable', 'success'),
					type === 'danger' && hover && bem.em('closable', 'danger'),
					type === 'warning' && hover && bem.em('closable', 'warning'),
					type === 'info' && hover && bem.em('closable', 'info'),
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
