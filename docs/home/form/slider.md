# Slider 滑块

通过拖动滑块在一个固定区间内进行选择

<style>
    @media (prefers-reduced-motion: reduce) {
    *, ::before, ::after {
        animation: none !important;
        background-attachment: inherit !important;
        scroll-behavior: none !important;
        transition:none !important;
    }
}
</style>

## 基础用法

:::raw

<ViewSfc src="../../components/form/slider/slider.vue"></ViewSfc>

:::

## 限制范围

使用`min`、`max`属性

:::raw

<ViewSfc src="../../components/form/slider/slider-limit.vue"></ViewSfc>

:::

## 步长

使用`step`属性

:::raw

<ViewSfc src="../../components/form/slider/slider-step.vue"></ViewSfc>

:::

## sider Attributes

| 参数 | 说明   | 类型   | 可选值 | 默认值 |
| ---- | ------ | ------ | ------ | ------ |
| min  | 最小值 | number |        | `0`    |
| max  | 最大值 | number |        | `100`  |
| step | 步长   | number |        | `1`    |

