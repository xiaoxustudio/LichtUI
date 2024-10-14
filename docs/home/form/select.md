# Select 下拉框

选中值的开关

## 基础用法

<preview path="../../components/form/select/select.vue"></preview>

## 禁用状态

使用`disabled`控制禁用状态

<preview path="../../components/form/select/select-disabled.vue"></preview>

## 事件

使用`command`监听选择事件

<preview path="../../components/form/select/select-command.vue"></preview>

## Input Attributes

| 参数     | 说明 | 类型    | 可选值 | 默认值  |
| -------- | ---- | ------- | ------ | ------- |
| disabled | 禁用 | boolean |        | `false` |

## DropDown Events

| 事件    | 参数                                      | 说明               |
| ------- | ----------------------------------------- | ------------------ |
| command | index: `number` ，data:`DropDownDataItem` | 可接收点击项的参数 |