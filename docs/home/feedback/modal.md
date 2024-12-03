# Modal 模态框

在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基础用法

<preview  path='../../components/feedback/modal/modal.vue'></preview>

## 按钮文本

使用`ok-text`、`cancle-text`控制

<preview path="../../components/feedback/modal/modal-text.vue"></preview>

## 插槽

<preview path="../../components/feedback/modal/modal-slot.vue"></preview>

## message Attributes

| 参数     | 说明         | 类型    | 可选值                                                | 默认值    |
| -------- | ------------ | ------- | ----------------------------------------------------- | --------- |
| type     | 类型         | string  | default / primary / success / warning / info / danger | `default` |
| duration | 退出时间     | number  |                                                       | `2000`    |
| closed   | 是否可以关闭 | boolean |                                                       | `false`   |
| location | 位置         | string  | left / middle / right                                 | `left`    |

## Menu Slots

| 插槽名    | 作用域参数 | 说明 |
| --------- | ---------- | ---- |
| \[title\] |            | 标题 |
| -         |            | 内容 |
