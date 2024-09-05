# DropDown 下拉菜单

将动作或菜单折叠到下拉菜单中。

## 基础用法

基础用法

<preview path="../../components/nav/dropdown/dropdown.vue" ></preview>

## 方向

使用`position`进行控制，可选值：`top`、`bottom`(默认)

<preview path="../../components/nav/dropdown/dropdown-position.vue" ></preview>

## 事件

使用`command`进行拦截，可接收点击项的参数

<preview path="../../components/nav/dropdown/dropdown-command.vue" ></preview>

## DropDown Attributes

| 参数     | 说明     | 类型   | 可选值     | 默认值   |
| -------- | -------- | ------ | ---------- | -------- |
| position | 显示位置 | string | top/bottom | `bottom` |

## DropDown Events

| 事件    | 参数                                  | 说明               |
| ------- | ------------------------------------- | ------------------ |
| command | index: `number` ，data:`DropDownDataItem` | 可接收点击项的参数 |
