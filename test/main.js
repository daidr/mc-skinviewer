{
    const container = document.querySelector('.skinviewer-container');

    const skinViewer = new SkinViewer({ container });

    const customSkin = new Image();
    customSkin.onload = () => {
        skinViewer.setSkin(customSkin);
    }
    customSkin.src = './daidr.png';

    // 左右滑动事件
    {
        let startX = 0;
        let startY = 0;
        let defX = 0;
        let defY = 0;
        let pointDown = false;
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
}