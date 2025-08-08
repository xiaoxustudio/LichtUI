# DropDown 下拉菜单

将动作或菜单折叠到下拉菜单中。

## 基础用法

基础用法

<ViewSfc src="../../components/nav/dropdown/dropdown.vue" ></ViewSfc>

## 方向

使用`position`进行控制，可选值：`top`、`bottom`(默认)

<ViewSfc src="../../components/nav/dropdown/dropdown-position.vue" ></ViewSfc>

## 触发方式

使用`trigger`进行控制，可选值：`click`、`hover`(默认)

<ViewSfc src="../../components/nav/dropdown/dropdown-trigger.vue" ></ViewSfc>

## 事件

使用`command`进行拦截，可接收点击项的参数

<ViewSfc src="../../components/nav/dropdown/dropdown-command.vue" ></ViewSfc>

## DropDown Attributes

| 参数     | 说明     | 类型   | 可选值      | 默认值    |
| -------- | -------- | ------ | ----------- | --------- |
| position | 显示位置 | string | top/bottom  | `bottom`  |
| trigger  | 触发方式 | string | click/hover | `trigger` |

## DropDown Events

| 事件    | 参数                                      | 说明               |
| ------- | ----------------------------------------- | ------------------ |
| command | index: `number` ，data:`DropDownDataItem` | 可接收点击项的参数 |
