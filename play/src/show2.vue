<template>
    <LiRow>
        <LiCol :style="{
            marginTop: '20px',
            display: 'flex',
            gap: '5px',
            flexDirection: 'column',
        }">
            <LiCard :style="{ maxWidth: '300px' }"> 测试 </LiCard>
            <LiCard :style="{ maxWidth: '300px' }" show-type="hover"> 测试 </LiCard>
            <LiCard header="标题" footer="2023-05-10" :style="{ maxWidth: '300px' }">
                测试
            </LiCard>
            <LiCard header="标题" footer="2023-05-10" :style="{ maxWidth: '300px' }">
                <template #header> 标题 </template>
                <template #default> 测试 </template>
                <template #fotter> 2023-05-10 </template>
            </LiCard>
        </LiCol>
        <LiCol>
            <LiAvatar name="徐然" bg-color="#ccc"></LiAvatar>
            <LiAvatar src="https://vue-devui.github.io/assets/logo.svg"></LiAvatar>
            <LiAvatar src="asdasd"></LiAvatar>
            <LiAvatar bg-color="#ccc" round></LiAvatar>
        </LiCol>
    </LiRow>
</template>
<script setup lang="ts"></script>
<style scope lang="scss"></style>
