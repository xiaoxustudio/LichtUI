# Alert 警告提示

头像组件

## 基础用法

基础用法

<preview path="../../components/show/alert/alert.vue" ></preview>

## 类型

使用`type`属性

<preview path="../../components/show/alert/alert-type.vue" ></preview>

## 关闭按钮

使用`closable`属性

<preview path="../../components/show/alert/alert-closable.vue" ></preview>

## 关闭事件

使用`on-close`属性

<preview path="../../components/show/alert/alert-onclose.vue" ></preview>

## alert Attributes

| 参数     | 说明         | 类型    | 可选值                                                | 默认值    |
| -------- | ------------ | ------- | ----------------------------------------------------- | --------- |
| type     | 类型         | string  | default / primary / success / warning / info / danger | `default` |
| closable | 显示关闭按钮 | boolean |                                                       |           |


## alert Events

| 事件     | 参数 | 说明             |
| -------- | ---- | ---------------- |
| on-close |      | 关闭时触发的事件 |