<p align="center">
  <img alt="logo" src="https://s3.bmp.ovh/imgs/2024/08/28/136ab813ae9e0e5f.png" width="120" style="margin-bottom: 10px;">
</p>
<h3 align="center">Licht UI</h3>

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge&color=#4fc08d" />
</p>

---

<p align="center"><a href="https://xiaoxustudio.github.io/LichtUI/">查看演示</a></p>

### 介绍

`Licht UI` (简称：利齿 UI , t一般不发音) 是一个基于`Vue3`开发的轻量级组件库

适用于`中小型`的项目使用，我们旨在用`简洁快速`的组件开发 PC 网站后台产品。

我们的创作灵感来源于[Element Plus](https://github.com/element-plus/element-plus)

**packages/\* 各包说明：**
| 包名称      |           说明 |
| :---------- | -------------: |
| components  | 各组件实际位置 |
| theme-chalk |       组件样式 |
| utils       |       工具文件 |



## 使用

**PS : 毕设项目，不会进行发版，使用需自行构建**

本项目采用`monorepo`架构，并使用`pnpm`包管理工具

1. 克隆本项目

```sh
git clone https://github.com/xiaoxustudio/LichtUI.git
```

2. 打包

```sh
pnpm build
```

3. 本地引入打包的源代码

cd到你构建好的目录（默认是dist），然后输入以下命令

```sh
pnpm link -g # 当前是在构建好的dist目录下
```

然后在你需要使用的项目中添加刚才link的包

```sh
pnpm link -g licht-ui # 你需要使用licht-ui的项目下
```

最后在项目入口处全局导入

```ts
import { createApp } from "vue";
import LichtUI from "licht-ui/components"; // 导入组件
import "licht-ui/style/style.css"; // 导入样式
import "./style.css";
import App from "./App.vue";

createApp(App).use(LichtUI).mount("#app");
```



## 关于

作者：[徐然](https://github.com/xiaoxustudio)

联系方式：[xugame@qq.com](emailto://xugame@qq.com)

欢迎提出您宝贵的 **issue**，我们将会处理。

## 开源协议

本项目基于 [MIT](https://github.com/xiaoxustudio/LichtUI/blob/main/LICENSE-MIT)协议，请自由地享受和参与开源。

