{
    // 常量
    const _ELEMENTS = Symbol('elements');
    const _SKIN = Symbol('skin');
    const _ROTATE = Symbol('rotate');
    const _SKIN_TYPE = Symbol('skinType');
    const [_SKIN_TYPE_STEVE, _SKIN_TYPE_ALEX] = [Symbol('skinTypeSteve'), Symbol('skinTypeAlex')];

    const _REFRESH_MAIN_ROTATE = Symbol('refreshMainRotate');

    const _DEAFULT_SKIN = new Image();
    _DEAFULT_SKIN.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABJlBMVEUAAAAqHQ0kGAgfEAt1Ry8vHw9qQDCGUzQmGgojIyNSKCYpHAwoGwonGwsyIxAtIBAvIA0rHg0oHAssHg4zJBFCKhI/KhUmGAsrHg4oGwskGAq2iWy9jnLGloC9i3K9jnSsdlo0JRIoGg0tHQ4vIhGqfWa0hG2tgG2ccly7iXKcaUwmGgwjFwmHWDqcY0U6KBT///9SPYm1e2csHhGEUjGWX0GIWjmcY0aze2K3gnK+iGyiakeAUzRiQy+dak+aY0SQXkOWX0B3QjWPXj6BUzmcZ0iKWTt0SC9vRSxtQyp6TjODVTufaEmaZEpWScwoKCgAzMwAYGAAqKhRMSUwKHImIVtGOqU6MYkAf38AW1sAmZkAnp4Ar68AaGiHVTuWb1s/Pz9ra2uD1kJWAAAAAXRSTlMAQObYZgAAAsVJREFUeAGk0uViwjAUBeBamrslpQsOU9zd3d3e/212YctfrKduX+0oMqqq4ajpxn+UR6NqhCCgGSY1KX0GIAT+gBeM+TigkfM7EPVpAK8FIE6Ay/USeH0CAMJAPwOXPAEwwKjqw7+Rc7CYy7bfBHFrIFTbdjELOJe9uAcADxNeIYTX5/e4vYJ5AAHZi5uAJwAsGAoz8f7x+fX9E2HhUJBBwCN7cRPg0ZiHW554IplIpTPZbNxjcU8symUvbgOc5/KFYilZrlQzlXKiVCzkc7hT9uIOIBqo1RvNVrtjmt1ev9mo1wJRBM7X3wN4eGwwHFFjPJliZnODjoaDGPfIXtwEKB3RRWO5Wm/m8+1ut10t94vDYkSpARiDKvfkiDlh5PZvu2WSrkYMA+EdN+kjeJUtB+gnBrtl2Sb3v0RKrjCZfGHadj2gCh76kXvUzGNp/vmr8+cyz7LZbXbPAZuuB8AMfQuQHQjfLOERsN8f9kcI5h5TSovm7a/tNucEZRExE2G27gZdAYcbAJRKSSIZ9WbIRcwlgphMLCf4AGDh2fsXTbKKWYGMkg5GeApYSlnMLKuZMauJEpDtfx0gRKgsy6LqZaoLZNIBFkKoE1QR3O8BMaIDAlBTVFlWkE09CQFtmkIdAcMSvMgbkA4oBSYOqQS0DmjtBgCNe+EMQC5mBLB1B3ApDwA6AdarTJkp1BEQBsDpdAacTr+hVFJS9QYIQPYGJBAwBciXcgNg4dmxlMPRFQHwgyxGUY1HAtpU4c8A+yMJyoyAlwChrtWxg1WrVq16Z14Yb6pvA2boK4CcB4tvlvAaYJgXIjxBYpLdDXoDQOddWQxe3gLQCTjPB58ChrngicZ5YZwLngN4O7sB8JZ2Bry9BAc0AurU2jsALqU6gHfl+mIH+wEQCKgvAsZ5IUATAb6U54Dxdt9/uX0DwNobKuH/BPwB2nOaeHznc/4AAAAASUVORK5CYII=';
    const _TEXTURE_MAP = {
        head: {
            inner: [
                [8, 8, 8, 8], // 前
                [24, 8, 8, 8], // 后
                [0, 8, 8, 8], // 左
                [16, 8, 8, 8], // 右
                [8, 0, 8, 8], // 上
                [16, 0, 8, 8], // 下
            ],
            outer: [
                [40, 8, 8, 8], // 前
                [56, 8, 8, 8], // 后
                [32, 8, 8, 8], // 左
                [48, 8, 8, 8], // 右
                [40, 0, 8, 8], // 上
                [48, 0, 8, 8], // 下
            ],
        },
        underhead: {
            body: {
                inner: [
                    [20, 20, 8, 12], // 前
                    [32, 20, 8, 12], // 后
                    [16, 20, 4, 12], // 左
                    [28, 20, 4, 12], // 右
                    [20, 16, 8, 4], // 上
                    [28, 16, 8, 4], // 下
                ],
                outer: [
                    [20, 36, 8, 12], // 前
                    [32, 36, 8, 12], // 后
                    [16, 36, 4, 12], // 左
                    [28, 36, 4, 12], // 右
                    [20, 32, 8, 4], // 上
                    [28, 32, 8, 4], // 下
                ]
            },
            legs: {
                left: {
                    inner: [
                        [20, 52, 4, 12], // 前
                        [28, 52, 4, 12], // 后
                        [16, 52, 4, 12], // 左
                        [24, 52, 4, 12], // 右
                        [20, 48, 4, 4], // 上
                        [24, 48, 4, 4], // 下
                    ],
                    outer: [
                        [4, 52, 4, 12], // 前
                        [12, 52, 4, 12], // 后
                        [0, 52, 4, 12], // 左
                        [8, 52, 4, 12], // 右
                        [4, 48, 4, 4], // 上
                        [8, 48, 4, 4], // 下
                    ]
                },
                right: {
                    inner: [
                        [4, 20, 4, 12], // 前
                        [12, 20, 4, 12], // 后
                        [0, 20, 4, 12], // 左
                        [8, 20, 4, 12], // 右
                        [4, 16, 4, 4], // 上
                        [8, 16, 4, 4], // 下
                    ],
                    outer: [
                        [4, 36, 4, 12], // 前
                        [12, 36, 4, 12], // 后
                        [0, 36, 4, 12], // 左
                        [8, 36, 4, 12], // 右
                        [4, 32, 4, 4], // 上
                        [8, 32, 4, 4], // 下
                    ]
                }
            },
            arms: {
                left: {
                    inner: [
                        [36, 52, 4, 12], // 前
                        [44, 52, 4, 12], // 后
                        [32, 52, 4, 12], // 左
                        [40, 52, 4, 12], // 右
                        [36, 48, 4, 4], // 上
                        [40, 48, 4, 4], // 下
                    ],
                    outer: [
                        [52, 52, 4, 12], // 前
                        [60, 52, 4, 12], // 后
                        [48, 52, 4, 12], // 左
                        [56, 52, 4, 12], // 右
                        [52, 48, 4, 4], // 上
                        [56, 48, 4, 4], // 下
                    ]
                },
                left_alex: {
                    inner: [
                        [36, 52, 3, 12], // 前
                        [43, 52, 3, 12], // 后
                        [32, 52, 4, 12], // 左
                        [40, 52, 4, 12], // 右
                        [36, 48, 3, 4], // 上
                        [39, 48, 3, 4], // 下
                    ],
                    outer: [
                        [52, 52, 3, 12], // 前
                        [59, 52, 3, 12], // 后
                        [48, 52, 4, 12], // 左
                        [56, 52, 4, 12], // 右
                        [52, 48, 3, 4], // 上
                        [55, 48, 3, 4], // 下
                    ]
                },
                right: {
                    inner: [
                        [44, 20, 4, 12], // 前
                        [52, 20, 4, 12], // 后
                        [40, 20, 4, 12], // 左
                        [48, 20, 4, 12], // 右
                        [44, 16, 4, 4], // 上
                        [48, 16, 4, 4], // 下
                    ],
                    outer: [
                        [44, 36, 4, 12], // 前
                        [52, 36, 4, 12], // 后
                        [40, 36, 4, 12], // 左
                        [48, 36, 4, 12], // 右
                        [44, 32, 4, 4], // 上
                        [48, 32, 4, 4], // 下
                    ]
                },
                right_alex: {
                    inner: [
                        [44, 20, 3, 12], // 前
                        [51, 20, 3, 12], // 后
                        [40, 20, 4, 12], // 左
                        [48, 20, 4, 12], // 右
                        [44, 16, 3, 4], // 上
                        [47, 16, 3, 4], // 下
                    ],
                    outer: [
                        [44, 36, 3, 12], // 前
                        [51, 36, 3, 12], // 后
                        [40, 36, 4, 12], // 左
                        [48, 36, 4, 12], // 右
                        [44, 32, 3, 4], // 上
                        [47, 32, 3, 4], // 下
                    ]
                },
            }
        }
    }

    // 初始化 DOM 元素
    const initElement = (container) => {
        // 最终返回的元素
        const elements = {};

        // 创建预览容器 d-skin-container
        const skinContainer = document.createElement('div');
        skinContainer.classList.add('d-skin-container');
        elements.skinContainer = skinContainer;

        // 创建整体容器 d-skin-main
        const skinMain = document.createElement('div');
        skinMain.classList.add('d-skin-main');
        skinContainer.appendChild(skinMain);
        elements.skinMain = skinMain;

        // 创建整体容器旋转层 d-skin-main-rotate
        const skinMainRotate = document.createElement('div');
        skinMainRotate.classList.add('d-skin-main-rotate');
        skinMain.appendChild(skinMainRotate);
        elements.skinMainRotate = skinMainRotate;

        // 创建整体容器位移层 d-skin-main-translate
        const skinMainTranslate = document.createElement('div');
        skinMainTranslate.classList.add('d-skin-main-translate');
        skinMainRotate.appendChild(skinMainTranslate);
        elements.skinMainTranslate = skinMainTranslate;

        // 创建头部容器 d-skin-head
        const skinHead = document.createElement('div');
        skinHead.classList.add('d-skin-head');
        skinMainTranslate.appendChild(skinHead);
        elements.skinHead = skinHead;

        // 创建头部内部容器 d-skin-head-inner
        const skinHeadInner = document.createElement('div');
        skinHeadInner.classList.add('d-skin-head-inner');
        skinHead.appendChild(skinHeadInner);
        elements.skinHeadInner = skinHeadInner;

        // 创建头部六个内面 (前后左右上下)
        const headInnerList = [];
        for (let i = 0; i < 6; i++) {
            const temp = document.createElement('img');
            temp.classList.add('d-skin-head-inner-cover');
            temp.classList.add(`d-skin-head-inner-cover-${i}`);
            temp.classList.add(`d-cover-${i}`);
            headInnerList.push(temp);
            skinHeadInner.appendChild(temp);
        }
        elements.headInnerList = headInnerList;

        // 创建头部外部容器 d-skin-head-outer
        const skinHeadOuter = document.createElement('div');
        skinHeadOuter.classList.add('d-skin-head-outer');
        skinHead.appendChild(skinHeadOuter);
        elements.skinHeadOuter = skinHeadOuter;

        // 创建头部六个外面 (前后左右上下)
        const headOuterList = [];
        for (let i = 0; i < 6; i++) {
            const temp = document.createElement('img');
            temp.classList.add('d-skin-head-outer-cover');
            temp.classList.add(`d-skin-head-outer-cover-${i}`);
            temp.classList.add(`d-cover-${i}`);
            headOuterList.push(temp);
            skinHeadOuter.appendChild(temp);
        }
        elements.headOuterList = headOuterList;

        // 创建头部以下容器 d-skin-underhead
        const skinUnderHead = document.createElement('div');
        skinUnderHead.classList.add('d-skin-underhead');
        skinMainTranslate.appendChild(skinUnderHead);
        elements.skinUnderHead = skinUnderHead;

        // 创建身体容器 d-skin-body
        const skinBody = document.createElement('div');
        skinBody.classList.add('d-skin-body');
        skinUnderHead.appendChild(skinBody);
        elements.skinBody = skinBody;

        // 创建身体内部容器 d-skin-body-inner
        const skinBodyInner = document.createElement('div');
        skinBodyInner.classList.add('d-skin-body-inner');
        skinBody.appendChild(skinBodyInner);
        elements.skinBodyInner = skinBodyInner;

        // 创建身体六个内面 (前后左右上下)
        const bodyInnerList = [];
        for (let i = 0; i < 6; i++) {
            const temp = document.createElement('img');
            temp.classList.add('d-skin-body-inner-cover');
            temp.classList.add(`d-skin-body-inner-cover-${i}`);
            temp.classList.add(`d-body-cover-${i}`);
            bodyInnerList.push(temp);
            skinBodyInner.appendChild(temp);
        }
        elements.bodyInnerList = bodyInnerList;

        // 创建身体外部容器 d-skin-body-outer
        const skinBodyOuter = document.createElement('div');
        skinBodyOuter.classList.add('d-skin-body-outer');
        skinBody.appendChild(skinBodyOuter);
        elements.skinBodyOuter = skinBodyOuter;

        // 创建身体六个外面 (前后左右上下)
        const bodyOuterList = [];
        for (let i = 0; i < 6; i++) {
            const temp = document.createElement('img');
            temp.classList.add('d-skin-body-outer-cover');
            temp.classList.add(`d-skin-body-outer-cover-${i}`);
            temp.classList.add(`d-body-cover-${i}`);
            bodyOuterList.push(temp);
            skinBodyOuter.appendChild(temp);
        }
        elements.bodyOuterList = bodyOuterList;

        // 创建腿部容器 d-skin-legs
        const skinLegs = document.createElement('div');
        skinLegs.classList.add('d-skin-legs');
        skinUnderHead.appendChild(skinLegs);
        elements.skinLegs = skinLegs;

        // 创建左腿容器 d-skin-leg-left
        const skinLegLeft = document.createElement('div');
        skinLegLeft.classList.add('d-skin-leg-left');
        skinLegs.appendChild(skinLegLeft);
        elements.skinLegLeft = skinLegLeft;

        // 创建左腿内部容器 d-skin-leg-left-inner
        const skinLegLeftInner = document.createElement('div');
        skinLegLeftInner.classList.add('d-skin-leg-left-inner');
        skinLegLeft.appendChild(skinLegLeftInner);
        elements.skinLegLeftInner = skinLegLeftInner;

        // 创建左腿六个内面 (前后左右上下)
        const legLeftInnerList = [];
        for (let i = 0; i < 6; i++) {
            const temp = document.createElement('img');
            temp.classList.add('d-skin-leg-left-inner-cover');
            temp.classList.add(`d-skin-leg-left-inner-cover-${i}`);
            temp.classList.add(`d-leg-cover-${i}`);
            legLeftInnerList.push(temp);
            skinLegLeftInner.appendChild(temp);
        }
        elements.legLeftInnerList = legLeftInnerList;

        // 创建左腿外部容器 d-skin-leg-left-outer
        const skinLegLeftOuter = document.createElement('div');
        skinLegLeftOuter.classList.add('d-skin-leg-left-outer');
        skinLegLeft.appendChild(skinLegLeftOuter);
        elements.skinLegLeftOuter = skinLegLeftOuter;

        // 创建左腿六个外面 (前后左右上下)
        const legLeftOuterList = [];
        for (let i = 0; i < 6; i++) {
            const temp = document.createElement('img');
            temp.classList.add('d-skin-leg-left-outer-cover');
            temp.classList.add(`d-skin-leg-left-outer-cover-${i}`);
            temp.classList.add(`d-leg-cover-${i}`);
            legLeftOuterList.push(temp);
            skinLegLeftOuter.appendChild(temp);
        }
        elements.legLeftOuterList = legLeftOuterList;

        // 创建右腿容器 d-skin-leg-right
        const skinLegRight = document.createElement('div');
        skinLegRight.classList.add('d-skin-leg-right');
        skinLegs.appendChild(skinLegRight);
        elements.skinLegRight = skinLegRight;

        // 创建右腿内部容器 d-skin-leg-right-inner
        const skinLegRightInner = document.createElement('div');
        skinLegRightInner.classList.add('d-skin-leg-right-inner');
        skinLegRight.appendChild(skinLegRightInner);
        elements.skinLegRightInner = skinLegRightInner;

        // 创建右腿六个内面 (前后左右上下)
        const legRightInnerList = [];
        for (let i = 0; i < 6; i++) {
            const temp = document.createElement('img');
            temp.classList.add('d-skin-leg-right-inner-cover');
            temp.classList.add(`d-skin-leg-right-inner-cover-${i}`);
            temp.classList.add(`d-leg-cover-${i}`);
            legRightInnerList.push(temp);
            skinLegRightInner.appendChild(temp);
        }
        elements.legRightInnerList = legRightInnerList;

        // 创建右腿外部容器 d-skin-leg-right-outer
        const skinLegRightOuter = document.createElement('div');
        skinLegRightOuter.classList.add('d-skin-leg-right-outer');
        skinLegRight.appendChild(skinLegRightOuter);
        elements.skinLegRightOuter = skinLegRightOuter;

        // 创建右腿六个外面 (前后左右上下)
        const legRightOuterList = [];
        for (let i = 0; i < 6; i++) {
            const temp = document.createElement('img');
            temp.classList.add('d-skin-leg-right-outer-cover');
            temp.classList.add(`d-skin-leg-right-outer-cover-${i}`);
            temp.classList.add(`d-leg-cover-${i}`);
            legRightOuterList.push(temp);
            skinLegRightOuter.appendChild(temp);
        }
        elements.legRightOuterList = legRightOuterList;

        // 创建手臂容器 d-skin-arms
        const skinArms = document.createElement('div');
        skinArms.classList.add('d-skin-arms');
        skinUnderHead.appendChild(skinArms);
        elements.skinArms = skinArms;

        // 创建左手容器 d-skin-arm-left
        const skinArmLeft = document.createElement('div');
        skinArmLeft.classList.add('d-skin-arm-left');
        skinArms.appendChild(skinArmLeft);
        elements.skinArmLeft = skinArmLeft;

        // 创建左手内部容器 d-skin-arm-left-inner
        const skinArmLeftInner = document.createElement('div');
        skinArmLeftInner.classList.add('d-skin-arm-left-inner');
        skinArmLeft.appendChild(skinArmLeftInner);
        elements.skinArmLeftInner = skinArmLeftInner;

        // 创建左手六个内面 (前后左右上下)
        const armLeftInnerList = [];
        for (let i = 0; i < 6; i++) {
            const temp = document.createElement('img');
            temp.classList.add('d-skin-arm-left-inner-cover');
            temp.classList.add(`d-skin-arm-left-inner-cover-${i}`);
            temp.classList.add(`d-arm-cover-${i}`);
            armLeftInnerList.push(temp);
            skinArmLeftInner.appendChild(temp);
        }
        elements.armLeftInnerList = armLeftInnerList;

        // 创建左手外部容器 d-skin-arm-left-outer
        const skinArmLeftOuter = document.createElement('div');
        skinArmLeftOuter.classList.add('d-skin-arm-left-outer');
        skinArmLeft.appendChild(skinArmLeftOuter);
        elements.skinArmLeftOuter = skinArmLeftOuter;

        // 创建左手六个外面 (前后左右上下)
        const armLeftOuterList = [];
        for (let i = 0; i < 6; i++) {
            const temp = document.createElement('img');
            temp.classList.add('d-skin-arm-left-outer-cover');
            temp.classList.add(`d-skin-arm-left-outer-cover-${i}`);
            temp.classList.add(`d-arm-cover-${i}`);
            armLeftOuterList.push(temp);
            skinArmLeftOuter.appendChild(temp);
        }
        elements.armLeftOuterList = armLeftOuterList;

        // 创建右手容器 d-skin-arm-right
        const skinArmRight = document.createElement('div');
        skinArmRight.classList.add('d-skin-arm-right');
        skinArms.appendChild(skinArmRight);
        elements.skinArmRight = skinArmRight;

        // 创建右手内部容器 d-skin-arm-right-inner
        const skinArmRightInner = document.createElement('div');
        skinArmRightInner.classList.add('d-skin-arm-right-inner');
        skinArmRight.appendChild(skinArmRightInner);
        elements.skinArmRightInner = skinArmRightInner;

        // 创建右手六个内面 (前后左右上下)
        const armRightInnerList = [];
        for (let i = 0; i < 6; i++) {
            const temp = document.createElement('img');
            temp.classList.add('d-skin-arm-right-inner-cover');
            temp.classList.add(`d-skin-arm-right-inner-cover-${i}`);
            temp.classList.add(`d-arm-cover-${i}`);
            armRightInnerList.push(temp);
            skinArmRightInner.appendChild(temp);
        }
        elements.armRightInnerList = armRightInnerList;

        // 创建右手外部容器 d-skin-arm-right-outer
        const skinArmRightOuter = document.createElement('div');
        skinArmRightOuter.classList.add('d-skin-arm-right-outer');
        skinArmRight.appendChild(skinArmRightOuter);
        elements.skinArmRightOuter = skinArmRightOuter;

        // 创建右手六个外面 (前后左右上下)
        const armRightOuterList = [];
        for (let i = 0; i < 6; i++) {
            const temp = document.createElement('img');
            temp.classList.add('d-skin-arm-right-outer-cover');
            temp.classList.add(`d-skin-arm-right-outer-cover-${i}`);
            temp.classList.add(`d-arm-cover-${i}`);
            armRightOuterList.push(temp);
            skinArmRightOuter.appendChild(temp);
        }
        elements.armRightOuterList = armRightOuterList;

        // 将预览容器追加至外部容器
        container.appendChild(skinContainer);

        return elements;
    }

    const attachTexture = (element, skin, x, y, width, height) => {
        const cvs = document.createElement('canvas')
        cvs.width = width;
        cvs.height = height;
        const ctx = cvs.getContext('2d');
        ctx.drawImage(skin, x, y, width, height, 0, 0, width, height);
        element.src = cvs.toDataURL();
    }

    const _refreshTexture = (elementList, mapList, skin) => {
        for (let i = 0; i < 6; i++) {
            const map = mapList[i];
            attachTexture(elementList[i], skin, map[0], map[1], map[2], map[3]);
        }
    }

    const refreshTexture = (elementList = {}, skin = _DEAFULT_SKIN, skinType = _SKIN_TYPE_STEVE) => {
        // 刷新头部内面
        _refreshTexture(elementList.headInnerList, _TEXTURE_MAP.head.inner, skin);

        // 刷新头部外面
        _refreshTexture(elementList.headOuterList, _TEXTURE_MAP.head.outer, skin);

        // 刷新身体内面
        _refreshTexture(elementList.bodyInnerList, _TEXTURE_MAP.underhead.body.inner, skin);

        // 刷新身体外面
        _refreshTexture(elementList.bodyOuterList, _TEXTURE_MAP.underhead.body.outer, skin);

        // 刷新左腿内面
        _refreshTexture(elementList.legLeftInnerList, _TEXTURE_MAP.underhead.legs.left.inner, skin);

        // 刷新左腿外面
        _refreshTexture(elementList.legLeftOuterList, _TEXTURE_MAP.underhead.legs.left.outer, skin);

        // 刷新右腿内面
        _refreshTexture(elementList.legRightInnerList, _TEXTURE_MAP.underhead.legs.right.inner, skin);

        // 刷新右腿外面
        _refreshTexture(elementList.legRightOuterList, _TEXTURE_MAP.underhead.legs.right.outer, skin);

        // 刷新左手内面
        if (skinType == _SKIN_TYPE_ALEX) {
            _refreshTexture(elementList.armLeftInnerList, _TEXTURE_MAP.underhead.arms.left_alex.inner, skin);
        } else {
            _refreshTexture(elementList.armLeftInnerList, _TEXTURE_MAP.underhead.arms.left.inner, skin);
        }

        // 刷新左手外面
        if (skinType == _SKIN_TYPE_ALEX) {
            _refreshTexture(elementList.armLeftOuterList, _TEXTURE_MAP.underhead.arms.left_alex.outer, skin);
        } else {
            _refreshTexture(elementList.armLeftOuterList, _TEXTURE_MAP.underhead.arms.left.outer, skin);
        }

        // 刷新右手内面
        if (skinType == _SKIN_TYPE_ALEX) {
            _refreshTexture(elementList.armRightInnerList, _TEXTURE_MAP.underhead.arms.right_alex.inner, skin);
        } else {
            _refreshTexture(elementList.armRightInnerList, _TEXTURE_MAP.underhead.arms.right.inner, skin);
        }

        // 刷新右手外面
        if (skinType == _SKIN_TYPE_ALEX) {
            _refreshTexture(elementList.armRightOuterList, _TEXTURE_MAP.underhead.arms.right_alex.outer, skin);
        } else {
            _refreshTexture(elementList.armRightOuterList, _TEXTURE_MAP.underhead.arms.right.outer, skin);
        }

    }

    window.SkinViewer = class {
        static SKIN_TYPE = {
            STEVE: _SKIN_TYPE_STEVE,
            ALEX: _SKIN_TYPE_ALEX
        }

        constructor(options) {
            const { container } = options;

            // container 必须提供，且必须是一个 DOM 元素
            if (!container) {
                throw new Error('container is required');
            }
            if (!(container instanceof HTMLElement)) {
                throw new Error('container must be a DOM element');
            }

            // 初始化 DOM 元素
            this[_ELEMENTS] = initElement(container);

            // 初始化皮肤类型
            this[_SKIN_TYPE] = SkinViewer.SKIN_TYPE.STEVE;

            // 初始化皮肤
            this[_SKIN] = _DEAFULT_SKIN;
            refreshTexture(this[_ELEMENTS], this[_SKIN], this[_SKIN_TYPE]);

            // 初始化角度
            this[_ROTATE] = {
                main: [0, 0, 0],
                head: [0, 0, 0],
                underhead: {
                    left_arm: [0, 0, 0],
                    right_arm: [0, 0, 0],
                    left_leg: [0, 0, 0],
                    right_leg: [0, 0, 0]
                }
            };
        }

        // 设置皮肤类型
        setSkinType(skinType) {
            // 倘若皮肤类型错误，则不做任何操作
            if (skinType !== SkinViewer.SKIN_TYPE.STEVE && skinType !== SkinViewer.SKIN_TYPE.ALEX) return;

            // 倘若皮肤类型没有变化，则不做任何操作
            if (skinType === this[_SKIN_TYPE]) return;

            // 设置皮肤类型
            this[_SKIN_TYPE] = skinType;

            if (this[_SKIN_TYPE] == _SKIN_TYPE_ALEX) {
                this[_ELEMENTS].skinArms.classList.add('d-skin-arms-alex');
            } else {
                this[_ELEMENTS].skinArms.classList.remove('d-skin-arms-alex');
            }

            // 刷新皮肤
            refreshTexture(this[_ELEMENTS], this[_SKIN], this[_SKIN_TYPE]);
        }

        // 设置皮肤
        setSkin(skin) {
            // 倘若 skin 不是一个 canvas 或 img 对象，则抛出异常
            if (!(skin instanceof HTMLCanvasElement) && !(skin instanceof HTMLImageElement)) {
                throw new Error('skin must be a canvas or image element');
            };
            // 设置皮肤
            this[_SKIN] = skin;

            // 刷新皮肤
            refreshTexture(this[_ELEMENTS], this[_SKIN], this[_SKIN_TYPE]);
        }

        // [内部] 用于刷新主角色的旋转
        [_REFRESH_MAIN_ROTATE]() {
            let [rotateX, rotateY, rotateZ] = this[_ROTATE].main;
            // 防止旋转超出一圈
            rotateX = rotateX % 360;
            rotateY = rotateY % 360;
            rotateZ = rotateZ % 360;

            this[_ELEMENTS].skinMain.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
        }

        // 用于得到主角色的旋转角度
        getMainRotate() {
            return this[_ROTATE].main;
        }

        // 用于设置主角色的旋转角度
        setMainRotate(x, y, z) {
            this[_ROTATE].main = [x, y, z];
            this[_REFRESH_MAIN_ROTATE]();
        }

        // 用于设置主角色的旋转角度 X 分量
        setMainRotateX(x) {
            this[_ROTATE].main[0] = x;
            this[_REFRESH_MAIN_ROTATE]();
        }

        // 用于设置主角色的旋转角度 Y 分量
        setMainRotateY(y) {
            this[_ROTATE].main[1] = y;
            this[_REFRESH_MAIN_ROTATE]();
        }

        // 用于设置主角色的旋转角度 Z 分量
        setMainRotateZ(z) {
            this[_ROTATE].main[2] = z;
            this[_REFRESH_MAIN_ROTATE]();
        }

        // 用于重置主角色的旋转角度
        resetMainRotate() {
            this[_ELEMENTS].skinMain.classList.add('d-skin-main-transition');
            this[_ROTATE].main = [0, 0, 0];
            this[_REFRESH_MAIN_ROTATE]();
            setTimeout(() => {
                this[_ELEMENTS].skinMain.classList.remove('d-skin-main-transition');
            }, 300);
        }

        // 用于获取内部的 Symbol 常量
        getInnerSymbol() {
            return {
                _SKIN,
                _SKIN_TYPE,
                _ROTATE,
                _ELEMENTS,
                _REFRESH_MAIN_ROTATE,
                _SKIN_TYPE_STEVE,
                _SKIN_TYPE_ALEX
            }
        }
    }
}