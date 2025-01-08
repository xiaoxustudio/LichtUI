# ToolTip 文字提示

常用于展示鼠标 hover 时的提示信息。

## 基础用法

<preview  path='../../components/feedback/tooltip/tooltip.vue'></preview>

## 触发方式

使用`trigger`控制

<preview path="../../components/feedback/tooltip/tooltip-trigger.vue"></preview>

## 标题

使用`title`控制

<preview path="../../components/feedback/tooltip/tooltip-title.vue"></preview>

## 禁用

使用`disabled`控制

<preview path="../../components/feedback/tooltip/tooltip-disabled.vue"></preview>

## 自定义显示

使用`show`控制

<preview path="../../components/feedback/tooltip/tooltip-show.vue"></preview>

## 自定义内容

使用`title`插槽控制

<preview path="../../components/feedback/tooltip/tooltip-slot.vue"></preview>

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
