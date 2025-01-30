<template>
	<LiRow justify="center">
		<LiCol :span="4">
			<div
				:style="`width: 80px; text-align: center;color:var(--li--color-primary)`"
			>
				primary
			</div>
			<div
				class="block"
				v-for="index in 9"
				:style="`background: var(--li--color-primary-light-${index});`"
				@click="
					() => CopyColor('primary', `--li--color-primary-light-${index}`)
				"
			/>
		</LiCol>
		<LiCol :span="4">
			<div
				:style="`width: 80px; text-align: center;color:var(--li--color-success)`"
			>
				success
			</div>
			<div
				class="block"
				v-for="index in 9"
				:style="`background: var(--li--color-success-light-${index});`"
				@click="
					() => CopyColor('success', `--li--color-success-light-${index}`)
				"
			/>
		</LiCol>
		<LiCol :span="4">
			<div
				style="width: 80px; text-align: center"
				:style="`width: 80px; text-align: center;color:var(--li--color-danger)`"
			>
				danger
			</div>
			<div
				class="block"
				v-for="index in 9"
				:style="`background: var(--li--color-danger-light-${index});`"
				@click="() => CopyColor('danger', `--li--color-danger-light-${index}`)"
			/>
		</LiCol>
		<LiCol :span="4">
			<div
				style="width: 80px; text-align: center"
				:style="`width: 80px; text-align: center;color:var(--li--color-info)`"
			>
				info
			</div>
			<div
				class="block"
				v-for="index in 9"
				:style="`background: var(--li--color-info-light-${index});`"
				@click="() => CopyColor('info', `--li--color-info-light-${index}`)"
			/>
		</LiCol>
		<LiCol :span="4">
			<div
				:style="`width: 80px; text-align: center;color:var(--li--color-warning)`"
			>
				warning
			</div>
			<div
				class="block"
				v-for="index in 9"
				:style="`background: var(--li--color-warning-light-${index});`"
				@click="
					() => CopyColor('warning', `--li--color-warning-light-${index}`)
				"
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
		width: 25px;
		height: 25px;
		border: solid 1px transparent;
		cursor: pointer;
		&:hover {
			border: solid 1px white;
			box-shadow: 0 0 2px #333;
		}
	}
</style>
