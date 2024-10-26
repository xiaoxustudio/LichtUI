# Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

:::tip
组件默认使用 Flex 布局，不需要手动设置 type="flex"。

请注意父容器避免使用 inline 相关样式，会导致组件宽度不能撑满。
:::

## 基础用法

通过使用`row`组件和`col`组件，并通过向`col`组件传递`span`参数进行自由的布局操作

<preview path="../../components/base/layout.vue" desciption="通过使用`row`组件和`col`组件，并通过向`col`组件传递`span`参数进行自由的布局操作" ></preview>

## Row Attributes

| 参数      | 说明     | 类型   | 可选值       | 默认值   |
| --------- | -------- | ------ | ------------ | -------- |
| gutter    | 栅格间隔 | number |              | `0`      |
| direction | 排列方向 | string | row / column | `column` |

## Col Attributes

| 参数 | 说明           | 类型   | 可选值 | 默认值 |
| ---- | -------------- | ------ | ------ | ------ |
| span | 栅格占据的列数 | number |        | `24`   |
