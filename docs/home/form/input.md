# Input 输入框

通过鼠标或键盘输入字符

## 基础用法

<ViewSfc src="../../components/form/input/input.vue"></ViewSfc>

## 禁用状态

使用`disabled`控制禁用状态

<ViewSfc src="../../components/form/input/input-disabled.vue"></ViewSfc>

## 清空

使用`clearable`控制清空状态

<ViewSfc src="../../components/form/input/input-clearable.vue"></ViewSfc>

## 输入框类型

使用`type`控制输入框类型

<ViewSfc src="../../components/form/input/input-type.vue"></ViewSfc>

::: warning
注意和原始类型区分
:::

## 原始类型

使用`ntype`控制输入框类型

<ViewSfc src="../../components/form/input/input-ntype.vue"></ViewSfc>

::: warning
注意和输入框类型区分
:::

## 标签

使用`label`控制左侧标签

<ViewSfc src="../../components/form/input/input-label.vue"></ViewSfc>

## 自定义插槽

<ViewSfc src="../../components/form/input/input-custom.vue"></ViewSfc>

## Input Attributes

| 参数     | 说明     | 类型    | 可选值                                                | 默认值    |
| -------- | -------- | ------- | ----------------------------------------------------- | --------- |
| disabled | 禁用     | boolean |                                                       | `false`   |
| type     | 类型     | string  | default / primary / success / warning / info / danger | `default` |
| ntype    | 原始类型 | string  |                                                       | `text`    |

## Input Slots

| 插槽名 | 说明     |
| ------ | -------- |
| label  | 头部插槽 |
| suffix | 尾部插槽 |
