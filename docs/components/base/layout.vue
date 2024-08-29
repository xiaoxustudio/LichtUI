<template>
	<LiRow>
		<LiCol>
			<div class="grid-content" />
		</LiCol>
	</LiRow>
	<LiRow>
		<LiCol :span="12">
			<div class="grid-content" />
		</LiCol>
		<LiCol :span="12">
			<div class="grid-content-light" />
		</LiCol>
	</LiRow>
	<LiRow>
		<LiCol :span="8">
			<div class="grid-content" />
		</LiCol>
		<LiCol :span="8">
			<div class="grid-content-light" />
		</LiCol>
		<LiCol :span="8">
			<div class="grid-content" />
		</LiCol>
	</LiRow>
	<LiRow>
		<LiCol :span="6">
			<div class="grid-content" />
		</LiCol>
		<LiCol :span="6">
			<div class="grid-content-light" />
		</LiCol>
		<LiCol :span="6">
			<div class="grid-content" />
		</LiCol>
		<LiCol :span="6">
			<div class="grid-content-light" />
		</LiCol>
	</LiRow>
	<LiRow>
		<LiCol :span="4">
			<div class="grid-content" />
		</LiCol>
		<LiCol :span="4">
			<div class="grid-content-light" />
		</LiCol>
		<LiCol :span="4">
			<div class="grid-content" />
		</LiCol>
		<LiCol :span="4">
			<div class="grid-content-light" />
		</LiCol>
		<LiCol :span="4">
			<div class="grid-content" />
		</LiCol>
		<LiCol :span="4">
			<div class="grid-content-light" />
		</LiCol>
	</LiRow>
</template>
<style scoped>
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
		height: 36px;
		background-color: lightgray;
	}
	.grid-content-light {
		border-radius: 4px;
		min-height: 36px;
		height: 36px;
		background-color: rgb(235, 235, 235);
	}
	.li-col {
		border-radius: 4px;
	}
</style>
