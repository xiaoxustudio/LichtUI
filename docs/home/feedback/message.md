# Message 全局消息

常用于主动操作后的反馈提示。

## 基础用法

这几种样式：`default`、`primary`、`danger`、`success`、`warning`、`info`。

<preview  path='../../components/feedback/message/msg.vue'></preview>

## 退出时间

使用`duration`控制

<preview path="../../components/feedback/message/msg-duration.vue"></preview>

## 关闭按钮

使用`closed`控制

<preview path="../../components/feedback/message/msg-close.vue"></preview>

## 出现位置

使用`location`控制

<preview path="../../components/feedback/message/msg-location.vue"></preview>

## message Attributes

| 参数     | 说明         | 类型    | 可选值                                                | 默认值    |
| -------- | ------------ | ------- | ----------------------------------------------------- | --------- |
| type     | 类型         | string  | default / primary / success / warning / info / danger | `default` |
| duration | 退出时间     | number  |                                                       | `2000`    |
| closed   | 是否可以关闭 | boolean |                                                       | `2000`    |
| location | 位置         | string  | left / middle / right                                 | `2000`    |
