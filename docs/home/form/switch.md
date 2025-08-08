# Switch 开关

选中值的开关

## 基础用法

<ViewSfc src="../../components/form/switch/switch.vue"></ViewSfc>

## 禁用状态

使用`disabled`控制禁用状态

<ViewSfc src="../../components/form/switch/switch-disabled.vue"></ViewSfc>

## 自定义值

使用`enable-val`、`disable-val`控制禁用状态

<ViewSfc src="../../components/form/switch/switch-label.vue"></ViewSfc>

## 插槽

使用`checked`获取当前值

<ViewSfc src="../../components/form/switch/switch-slot.vue"></ViewSfc>

## Input Attributes

| 参数        | 说明 | 类型    | 可选值                                                | 默认值    |
| ----------- | ---- | ------- | ----------------------------------------------------- | --------- |
| disabled    | 禁用 | boolean |                                                       | `false`   |
| disable-val | 关值 | string  |                                                       |           |
| enable-val  | 开值 | string  |                                                       |           |
| type        | 类型 | string  | default / primary / success / warning / info / danger | `default` |

## Input Slots

| 插槽名 | 说明                      |
| ------ | ------------------------- |
| -      | 默认， `checked` 为当前值 |
