# Avatar 头像

头像组件

## 基础用法

基础用法

<ViewSfc src="../../components/show/avatar/avatar.vue" ></ViewSfc>

## 大小

大小使用`size`操作

<ViewSfc src="../../components/show/avatar/avatar-size.vue" ></ViewSfc>

## 颜色

颜色使用`bg-color`、`name-color`操作

<ViewSfc src="../../components/show/avatar/avatar-color.vue" ></ViewSfc>

## 图片链接

使用`src`操作

<ViewSfc src="../../components/show/avatar/avatar-src.vue" ></ViewSfc>

## Avatar Attributes

| 参数       | 说明       | 类型         | 可选值             | 默认值   |
| ---------- | ---------- | ------------ | ------------------ | -------- |
| size       | 大小       | string       | small/middle/large | `middle` |
| bg-color   | 背景颜色   | string       |                    |          |
| name-color | 文字颜色   | string       |                    |          |
| src        | 源图片     | string       |                    |          |
| round      | 是否为圆型 | boolean      |                    | `false`  |
| style-img  | 图片样式   | CSSPrototype |                    |          |
