<template>
	<Transition name="fade">
		<div
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
			<Close
				v-if="closable"
				:class="[bem.e('close')]"
				@click.once="handleClose"
			/>
			<slot />
		</div>
	</Transition>
</template>
<script setup lang="ts">
	import { createNamespace } from "@licht-ui/utils";
	import { alertProp, AlertEmits } from "./alert";
	import Close from "./close.vue";
	import { onMounted, ref } from "vue";
	defineOptions({ name: "LiAlert" });
	const emit = defineEmits<AlertEmits>();
	const prop = defineProps(alertProp);
	const bem = createNamespace("alert");
	const show = ref(true);
	const handleClose = () => {
		show.value = !show.value;
		emit("onClose");
	};
	onMounted(() => {
		if (
			!prop.closable &&
			prop.autoClose &&
			typeof prop.autoClose === "number"
		) {
			setTimeout(() => {
				show.value = !show.value;
			}, prop.autoClose);
		}
	});
</script>
<style scope lang="scss">
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>
