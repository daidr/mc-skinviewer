SkinViewer
=========
[![GitHub commit](https://img.shields.io/github/last-commit/daidr/mc-skinviewer?style=flat-square)](https://github.com/daidr/mc-skinviewer/commit/master)
[![MIT License](https://img.shields.io/badge/license-MIT-yellowgreen.svg?style=flat-square)](https://github.com/daidr/mc-skinviewer/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/daidr/mc-skinviewer?style=flat-square)](https://github.com/daidr/mc-skinviewer/issues)

基于 css transform 的 mc 皮肤预览器

[DEMO](https://page.daidr.me/mc-skinviewer/test)

## 特点

* 自适应支持
* 支持 alex 和 steve 模型
* 支持自定义动画
* 体积较小
* 支持头部、手臂、腿部的 transform 调节

## 使用方法

### 基本

最少只需要载入 `skinviewer.css` 与 `skinviewer.js` 即可正常使用 SkinViewer

```html
<link rel="stylesheet" href="skinviewer.css">
<script src="skinviewer.js"></script>

<div class="my-custom-skinviewer" width='600px'></div>

<script>
  const container = document.querySelector('.my-custom-skinviewer');
  const skinViewer = new SkinViewer({ container });
</script>
```

这些代码将会在 `my-custom-skinviewer` 中初始化一个渲染默认 steve 皮肤的 SkinViewer

### 尺寸设置

或许你已经注意到了，上面的代码为 `my-custom-skinviewer` 设置了固定 600px 的宽度值，这是因为 SkinViewer 的大小完全取决于父容器的宽度值（父容器宽度的 30%），倘若不限制父容器宽度，SkinViewer 将无法正常显示。当然，你完全可以在父容器上设置这些不确定的宽度值 `width:50vw` `width:100%`

或许对于你来说，默认情况下 SkinViewer 继承父容器宽度的 30% 还是太大了。那么，你可以通过设置父容器内第一层级 div 容器的 `width` 或 `scale` 属性来调整 SkinViewer 的大小。就像下面这样。

```css
.my-custom-skinviewer > div {
    transform: scale(0.5);
}
```

### 皮肤设置

当然，我们也提供了修改皮肤模型和皮肤贴图的功能，倘若你需要载入一个路径为 `./skin.png` 的 Alex 模型皮肤。你可以像下面这样做。

```js
skinViewer.setSkinType(SkinViewer.SKIN_TYPE.ALEX);

const customSkin = new Image();
customSkin.onload = () => {
    skinViewer.setSkin(customSkin);
}
customSkin.src = './skin.png';
```

SkinViewer 的 `setSkin` 方法接收一个 skin 参数，这个参数可以是 HTMLImageElement 或 HTMLCanvasElement 类型的。虽然看起来有些繁琐，但这能让你更好地控制贴图加载的过程。

### 动画设置

默认情况下，skinviewer 不会携带任何动画，并且不会响应任何事件（实际上，SkinViewer 目前也没有提供绑定事件的功能）

不过，我们默认提供了一个动画样式库 `skinviewer-animation.css`，包含了诸如 360°旋转、走路、跑步等一系列的常见动画。

提示：你可以对 头部、手部、腿部的容器进行 transform 操作，且 transform-origin 已经被默认设置为正确的位置，但不能对容器内的子元素(如类名为_cover结尾的元素)执行 transform 操作。

```html
<link rel="stylesheet" href="skinviewer-animation.css">

<div class="my-custom-skinviewer d-skin-aciton-rotate" width='600px'></div>
```

动画样式库提供了下面这些类名，通过对父容器添加对应的类名，就可以让 SkinViewer 播放对应的动画。

`d-skin-aciton-rotate` - 将会循环播放 360° 旋转动画

`d-skin-aciton-walk` - 将会循环播放走路动画

`d-skin-aciton-run` - 将会循环播放跑步动画

`d-skin-aciton-rotate-paused` - 将会暂停旋转动画

`d-skin-action-skeleton-paused` - 将会暂停骨骼动画

**目前暂未实现头部摆动的动画**

### 简单交互

当然，你也许会需要一些简单的交互，比如通过拖动来旋转视角。那么，你可以试试监听父容器的相关事件，实现所需要的交互。

[DEMO](https://page.daidr.me/mc-skinviewer/test) 页面中的鼠标拖动视角就是一个很好的示例。

```js
// 选择父容器
let container = document.querySelector('.my-custom-skinviewer');
{
    let startX = 0;
    let startY = 0;
    let defX = 0;
    let defY = 0;
    let pointDown = false;

    // 监听 pointer 相关的事件
    container.addEventListener('pointerdown', (e) => {
        const { clientX, clientY } = e;
        startX = clientX;
        startY = clientY;
        const [a, b] = skinViewer.getMainRotate();
        defX = a;
        defY = b;
        pointDown = true;
    })

    container.addEventListener('pointermove', (e) => {
        if (!pointDown) return;
        const { clientX, clientY } = e;
        const deltaX = clientX - startX;
        const deltaY = clientY - startY;
        skinViewer.setMainRotate(defX - deltaY, defY + deltaX, 0);
    })

    container.addEventListener('pointerup', (e) => {
        pointDown = false;
        skinViewer.resetMainRotate();
    })
}
```

## 功能实现

- [x] 完整的动画支持

- [x] steve 和 alex 模型皮肤支持

- [ ] 非标准皮肤尺寸(高像素或64*32)

- [ ] 披风材质支持

- [ ] 特殊模型材质支持(耳朵)


## 协议

[MIT license](./LICENCE)