declare class SkinViewer {
    /** 构造函数 */
    constructor(options: SkinViewerOptions);

    /** 皮肤模型常量 */
    static SKIN_TYPE: SKIN_TYPE_ENUM;

    /** 设置角色的旋转角度 */
    setMainRotate(rotateX: number, rotateY: number, rotateZ: number): void;

    /** 单独设置角色 x 分量旋转角度 */
    setMainRotateX(rotateX: number): void;

    /** 单独设置角色 y 分量旋转角度 */
    setMainRotateY(rotateY: number): void;

    /** 单独设置角色 z 分量旋转角度 */
    setMainRotateZ(rotateZ: number): void;

    /** 重置角色旋转角度 */
    resetMainRotate(): void;

    /** 获取角色旋转角度 */
    getMainRotate(): [rotateX: number, rotateY: number, rotateZ: number];

    /** 设置皮肤模型类型 */
    setSkinType(skinType: SKIN_TYPE_ENUM): void;

    /** 设置皮肤 */
    setSkin(skin: HTMLImageElement | HTMLCanvasElement): void;
}

interface SkinViewerOptions {
    /** 承载 SkinViewer 的容器 */
    container: HTMLElement;
}

interface SKIN_TYPE_ENUM {
    /** STEVE 模型 */
    STEVE: Symbol;
    /** ALEX 模型 */
    ALEX: Symbol;
}