# Badge 徽章

按钮和图标上的数字或状态标记。

## 基础用法

基础用法

:::raw
<preview path="../../components/show/badge/badge.vue" ></preview>
:::

## 限制

使用`min`、`max`属性

<preview path="../../components/show/badge/badge-limit.vue" ></preview>

## 小点

使用`is-dot`属性

<preview path="../../components/show/badge/badge-is-dot.vue" ></preview>

## 插槽

<preview path="../../components/show/badge/badge-slot.vue" ></preview>

## Badge Attributes

| 参数   | 说明     | 类型    | 可选值                                                | 默认值    |
| ------ | -------- | ------- | ----------------------------------------------------- | --------- |
| type   | 类型     | string  | default / primary / success / warning / info / danger | `default` |
| is-dot | 小点状态 | boolean |                                                       | `false`   |
| min    | 最小值   | number  |                                                       | `0`       |
| max    | 最大值   | number  |                                                       | `99`      |

## Badge Slots

| 插槽名 | 说明     |
| ------ | -------- |
| -      | 内容     |
| value  | 徽章内容 |
