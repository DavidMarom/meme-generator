var gCanvas;
var gCtx;

gCanvas = document.getElementById('myCanvas');
gCtx = gCanvas.getContext('2d');





function renderCanvas() {
    drawImg(gMeme.selectedImgId);

    drawText(gMeme.lines[0].txt, 250, 70);
     
}


function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);

}

function drawImg(imgToLoad) {
    const img = new Image();
    img.src = `content/${imgToLoad}.jpg`;
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height); //img,x,y,width,height

}

function drawText(text, x, y) {
    gCtx.lineWidth = '2';
    gCtx.strokeStyle = gMeme.lines[gMeme.selectedLineIdx].color;
    gCtx.fillStyle = 'white';
    gCtx.font = '40px Impact';
    gCtx.textAlign = 'center';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container');
    // Note: changing the canvas dimension this way clears the canvas
    gCanvas.width = elContainer.offsetWidth;
    gCanvas.height = elContainer.offsetHeight;
}