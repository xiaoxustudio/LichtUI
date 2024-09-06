---
# https://vitepress.dev/reference/default-theme-home-page

layout: home

hero:
  name: "LichtUI"
  text: "基于Vue3的UI组件库"
  tagline: TypeScript、简洁、方便
  image:
    src: /Logo.png
    alt: logo
  actions:
    - theme: brand
      text: 开始使用
      link: /home/start/installation
    - theme: alt
      text: 示例
      link: /home/start/examples

features:
  - title: TypeScript
    icon: 📝
    details: 基于TypeScript编写，拥有丰富的类型提示
  - title: 简洁
    icon: 🛒
    details: 个人开发，无后门
  - title: 方便
    icon: 🚀
    details: 即安即用
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-image-filter:blur(68px);
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #aaa 30%, #000 );
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #fefefe 50%, #e2e2e2 50%);
}
</style>
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/52703373?v=4&size=64',
    name: '徐然',
    title: 'Creator',
    desc:"前端工程师，独立游戏开发者",
    links: [
      { icon: 'github', link: 'https://github.com/xiaoxustudio' }
    ]
  },
]
</script>

<center><VPTeamMembers size="small" :members="members" /></center>
