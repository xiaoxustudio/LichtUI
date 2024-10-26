# Menu 菜单

为网站提供导航功能的菜单。

## 基础用法

基础用法

使用`list`绑定数据

<preview path="../../components/nav/menu/menu.vue" ></preview>

## 默认选择

默认选择使用`default-index`控制

<preview path="../../components/nav/menu/menu-default.vue" ></preview>

## 子菜单

使用`list`增加

<preview path="../../components/nav/menu/menu-submenu.vue" ></preview>

## 事件

默认选择使用`@command`、`@sub-command`控制

<preview path="../../components/nav/menu/menu-submenuEvent.vue" ></preview>

## 插槽

插槽控制页面的切换，并用`data`接收菜单项数据

<preview path="../../components/nav/menu/menu-slot.vue" ></preview>

## Menu Attributes

| 参数          | 说明     | 类型   | 可选值 | 默认值 |
| ------------- | -------- | ------ | ------ | ------ |
| list          | 菜单数据 | Array  |        | `[]`   |
| default-index | 默认选项 | number |        | `0`    |

## Menu Events

| 事件        | 参数                                  | 说明       |
| ----------- | ------------------------------------- | ---------- |
| command     | index: `number` ，data:`MenuItemData` | 第一层事件 |
| sub-command | index: `number` ，data:`MenuItemData` | 第二层事件 |

## Menu Slots

| 插槽名     | 作用域参数    | 说明     |
| ---------- | ------------- | -------- |
| \[number\] | data:选项数据 | 菜单内容 |
