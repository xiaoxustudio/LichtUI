<template>
    <LiMenu :default-index="1" :list="list" @command="handleMenuItem" @sub-command="handleSubMenuItem">
    </LiMenu>
</template>
<script setup lang="ts">
    const list = [
        {
            icon: 'https://s3.bmp.ovh/imgs/2024/08/28/136ab813ae9e0e5f.png'
        },
        {
            label: "首页",
            list: [
                {
                    label: "菜单1"
                }, {
                    label: "菜单2"
                }, {
                    label: "菜单3"
                }
            ]
        },
        {
            label: "合集",
        },
        {
            label: "我的",
        },
    ]
    const handleMenuItem = (index: any, item: any) => {
        console.log(index, item)
        alert(`${index}, ${item.label}`)
    }
    const handleSubMenuItem = (index: any, item: any) => {
        console.log(index, item)
        alert(`${index}, ${item.label}`)
    }
</script>
<style scope lang="scss"></style>
