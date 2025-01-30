<template>
	<LiRow justify="center">
		<LiCol :span="4">
			<div
				class="block"
				v-for="index in 9"
				:style="`background: var(--li--color-primary-dark-${index});`"
				@click="() => CopyColor('primary', `--li--color-primary-dark-${index}`)"
			/>
		</LiCol>
		<LiCol :span="4">
			<div
				class="block"
				v-for="index in 9"
				:style="`background: var(--li--color-success-dark-${index});`"
				@click="() => CopyColor('success', `--li--color-success-dark-${index}`)"
			/>
		</LiCol>
		<LiCol :span="4">
			<div
				class="block"
				v-for="index in 9"
				:style="`background: var(--li--color-danger-dark-${index});`"
				@click="() => CopyColor('danger', `--li--color-danger-dark-${index}`)"
			/>
		</LiCol>
		<LiCol :span="4">
			<div
				class="block"
				v-for="index in 9"
				:style="`background: var(--li--color-info-dark-${index});`"
				@click="() => CopyColor('info', `--li--color-info-dark-${index}`)"
			/>
		</LiCol>
		<LiCol :span="4">
			<div
				class="block"
				v-for="index in 9"
				:style="`background: var(--li--color-warning-dark-${index});`"
				@click="() => CopyColor('warning', `--li--color-warning-dark-${index}`)"
			/>
		</LiCol>
	</LiRow>
</template>
<script setup lang="ts">
	import { message } from "@licht-ui/components";

	const CopyColor = (type: any, color: string) => {
		message({
			content: `已复制：${color}`,
			type,
		});
	};
</script>
<style scope lang="scss">
	.block {
		min-width: 75px;
		height: 25px;
		border: solid 1px transparent;
		cursor: pointer;
		display: block;
		&:hover {
			border: solid 1px white;
			box-shadow: 0 0 2px #333;
		}
	}
</style>
