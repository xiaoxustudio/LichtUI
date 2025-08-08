# Badge 徽章

按钮和图标上的数字或状态标记。

## 基础用法

基础用法

<ViewSfc src="../../components/show/badge/badge.vue" ></ViewSfc>

## 限制

使用`min`、`max`属性

<ViewSfc src="../../components/show/badge/badge-limit.vue" ></ViewSfc>

## 小点

使用`is-dot`属性

<ViewSfc src="../../components/show/badge/badge-is-dot.vue" ></ViewSfc>

## 插槽

<ViewSfc src="../../components/show/badge/badge-slot.vue" ></ViewSfc>

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
