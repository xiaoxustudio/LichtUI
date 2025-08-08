# ToolTip 文字提示

常用于展示鼠标 hover 时的提示信息。

## 基础用法

<ViewSfc src='../../components/feedback/tooltip/tooltip.vue'></ViewSfc>

## 触发方式

使用`trigger`控制

<ViewSfc src="../../components/feedback/tooltip/tooltip-trigger.vue"></ViewSfc>

## 标题

使用`title`控制

<ViewSfc src="../../components/feedback/tooltip/tooltip-title.vue"></ViewSfc>

## 禁用

使用`disabled`控制

<ViewSfc src="../../components/feedback/tooltip/tooltip-disabled.vue"></ViewSfc>

## 自定义显示

使用`show`控制

<ViewSfc src="../../components/feedback/tooltip/tooltip-show.vue"></ViewSfc>

## 自定义内容

使用`title`插槽控制

<ViewSfc src="../../components/feedback/tooltip/tooltip-slot.vue"></ViewSfc>

## ToolTip Attributes

| 参数     | 说明       | 类型    | 可选值                      | 默认值      |
| -------- | ---------- | ------- | --------------------------- | ----------- |
| title    | 标题       | string  |                             | ``          |
| show     | 自定义显示 | boolean |                             | `undefined` |
| disabled | 禁用       | boolean |                             | `false`     |
| trigger  | 触发方式   | string  | hover / click / contextmenu | `hover`     |

## ToolTip Slots

| 插槽名 | 作用域参数 | 说明 |
| ------ | ---------- | ---- |
| title  |            | 标题 |
