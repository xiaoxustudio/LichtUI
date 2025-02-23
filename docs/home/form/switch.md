# Switch 开关

选中值的开关

## 基础用法

<preview path="../../components/form/switch/switch.vue"></preview>

## 禁用状态

使用`disabled`控制禁用状态

<preview path="../../components/form/switch/switch-disabled.vue"></preview>

## 自定义值

使用`enable-val`、`disable-val`控制禁用状态

<preview path="../../components/form/switch/switch-label.vue"></preview>

## 插槽

使用`checked`获取当前值

<preview path="../../components/form/switch/switch-slot.vue"></preview>

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
