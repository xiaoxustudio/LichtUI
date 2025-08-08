# Radio 单选框

选中值的单选框

## 基础用法

:::raw
<ViewSfc src="../../components/form/radio/radio.vue"></ViewSfc>
:::

## 禁用状态

使用`disabled`控制禁用状态
:::raw
<ViewSfc src="../../components/form/radio/radio-disabled.vue"></ViewSfc>
:::

## 插槽

:::raw
<ViewSfc src="../../components/form/radio/radio-slot.vue"></ViewSfc>
:::

## Input Attributes

| 参数     | 说明 | 类型    | 可选值                                                | 默认值    |
| -------- | ---- | ------- | ----------------------------------------------------- | --------- |
| disabled | 禁用 | boolean |                                                       | `false`   |
| default  | 默认 | boolean |                                                       | `false`   |
| type     | 类型 | string  | default / primary / success / warning / info / danger | `default` |

## Input Slots

| 插槽名 | 说明 |
| ------ | ---- |
| -      | 默认 |
