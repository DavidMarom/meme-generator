var gCanvas = document.getElementById('myCanvas');
var gCtx = gCanvas.getContext('2d');
var gMouse ='up';

function renderCanvas() {
    drawImg(gMeme.selectedImgId);

    drawText(0, gMeme.lines[0].x, gMeme.lines[0].y);
    drawText(1, gMeme.lines[1].x, gMeme.lines[1].y);

}

function drawImg(imgToLoad) {
    const img = new Image();
    img.src = `content/${imgToLoad}.jpg`;
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height); //img,x,y,width,height

}

function drawText(lineNum, x, y) {
    gCtx.lineWidth = '2';
    gCtx.strokeStyle = gMeme.lines[lineNum].color;
    gCtx.fillStyle = gMeme.lines[lineNum].colorFill;

    let fontStr = gMeme.lines[lineNum].size + 'px Impact';

    gCtx.font = fontStr;

    gCtx.textAlign = 'center';
    gCtx.fillText(gMeme.lines[lineNum].txt, x, y);
    gCtx.strokeText(gMeme.lines[lineNum].txt, x, y);
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container');
    // Note: changing the canvas dimension this way clears the canvas
    gCanvas.width = elContainer.offsetWidth;
    gCanvas.height = elContainer.offsetHeight;
}

function canvasDown(ev) {
    gMouse = 'down';
    const {
        offsetX,
        offsetY
    } = ev;
    if ((Math.abs(offsetY - gMeme.lines[0].y)) + (Math.abs(offsetX - gMeme.lines[0].y)) < (Math.abs(offsetY - gMeme.lines[1].y)) + (Math.abs(offsetX - gMeme.lines[1].y))) {
        gMeme.selectedLineIdx = 0;
    } else {
        gMeme.selectedLineIdx = 1;
    }
}

function canvasUp(ev) {
    gMouse = 'up';
}

function canvasMove(ev) {
    if (gMouse === 'down') {

    const {
        offsetX,
        offsetY
    } = ev;

        gMeme.lines[gMeme.selectedLineIdx].x = offsetX;
        gMeme.lines[gMeme.selectedLineIdx].y = offsetY;
        renderCanvas();
    }
}