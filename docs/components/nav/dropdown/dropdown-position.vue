<template>
    <LiDropDown :list="dropdown">
        <LiButton>下拉</LiButton>
    </LiDropDown>
    <LiDropDown :list="dropdown" position="bottom">
        <LiButton>下拉</LiButton>
    </LiDropDown>
    <LiDropDown :list="dropdown" position="top">
        <LiButton>下拉</LiButton>
    </LiDropDown>
</template>
<script setup lang="ts">
    import { DropdownProp } from '@licht-ui/components';

    const dropdown: DropdownProp['list'] = []
    for (let i in new Array(3).fill(1).map((_val, index) => index)) {
        dropdown.push({
            id: i.toString(),
            label: "列表" + i,
            data: { id: i }
        })
    }
</script>
<style scope lang="scss"></style>
