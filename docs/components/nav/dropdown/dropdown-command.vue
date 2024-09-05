<template>
    <LiDropDown :list="dropdown" @command="handleCommand">
        <LiButton>下拉</LiButton>
    </LiDropDown>
</template>
<script setup lang="ts">
    import { DropdownDataItem, DropdownProp } from '@licht-ui/components';

    const dropdown: DropdownProp['list'] = []
    for (let i in new Array(3).fill(1).map((_val, index) => index)) {
        dropdown.push({
            id: i.toString(),
            label: "列表" + i,
            data: { id: i }
        })
    }

    const handleCommand = (index: number, data: DropdownDataItem) => {
        console.log(index, data)
        alert(`点击项目：${index}\n数据：` + JSON.stringify(data))
    }
</script>
<style scope lang="scss"></style>
