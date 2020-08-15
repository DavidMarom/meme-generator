var gCanvas = document.getElementById('myCanvas');
var gCtx = gCanvas.getContext('2d');
var gMouse = 'up';

var gX = 10;
var gY = 10;

function renderCanvas() {
    drawImg(gMeme.selectedImgId);

    drawText(0, gMeme.lines[0].x, gMeme.lines[0].y);
    drawText(1, gMeme.lines[1].x, gMeme.lines[1].y);

}

function drawImg(imgToLoad) {
    const img = new Image();
    img.src = `content/${imgToLoad}.jpg`;
    // resizeCanvas();
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height); //img,x,y,width,height

}

function drawText(lineNum, x, y) {
    gCtx.lineWidth = gMeme.lines[lineNum].lineWidth;
    gCtx.strokeStyle = gMeme.lines[lineNum].color;
    gCtx.fillStyle = gMeme.lines[lineNum].colorFill;

    let fontStr = gMeme.lines[lineNum].size + 'px ' + gMeme.lines[lineNum].font;

    gCtx.font = fontStr;

    gCtx.textAlign = gMeme.lines[lineNum].align;
    gCtx.fillText(gMeme.lines[lineNum].txt, x, y);
    gCtx.strokeText(gMeme.lines[lineNum].txt, x, y);
}

// function resizeCanvas() {
//     const elContainer = document.querySelector('.canvas-container');
//     // Note: changing the canvas dimension this way clears the canvas
//     gCanvas.width = elContainer.offsetWidth;
//     gCanvas.height = elContainer.offsetHeight;
// }

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

    updatePanel();
}

function canvasUp(ev) {
    gMouse = 'up';
    document.getElementById("line-a").focus();
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


// function getImageX() {
//     var img = new Image;

//     img.onload = function () {
//         gX = img.naturalWidth;
//     }
//     img.src = `content/${gMeme.selectedImgId}.jpg`;
// }

function myResizeCanvas() {
    var img2 = new Image;

    img2.onload = function () {
        console.log('LOADED', img2.naturalWidth)
        gX = img2.naturalWidth;
        gY = img2.naturalHeight;

        
        const gCanvas = document.querySelector('.canvas-container');

        gCanvas.setAttribute("width", img2.naturalWidth);
        gCanvas.setAttribute("height", img2.naturalHeight);
        
        
        gMeme.lines[0].x=img2.naturalWidth/2;
                
        gMeme.lines[1].x=img2.naturalWidth/2;
        gMeme.lines[1].y=img2.naturalHeight-50;


        

        
        renderCanvas();
    }
    img2.src = `content/${gMeme.selectedImgId}.jpg`;

}