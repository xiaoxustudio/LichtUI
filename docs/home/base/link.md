# Link 链接

文字超链接

## 基础用法

基础用法
:::raw
<ViewSfc src="../../components/base/link/link.vue" ></ViewSfc>
:::

## 禁用

使用`disabled`控制主题
:::raw
<ViewSfc src="../../components/base/link/link-disabled.vue" ></ViewSfc>
:::

## Row Attributes

| 参数     | 说明     | 类型    | 可选值                                                | 默认值    |
| -------- | -------- | ------- | ----------------------------------------------------- | --------- |
| type     | 类型     | string  | default / primary / success / warning / info / danger | `default` |
| disabled | 禁用状态 | boolean | true / false                                          | `false`   |