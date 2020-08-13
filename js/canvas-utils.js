var gCanvas = document.getElementById('myCanvas');
var gCtx = gCanvas.getContext('2d');

function renderCanvas() {
    drawImg(gMeme.selectedImgId);

    drawText(0, 275, 70);
    drawText(1, 275, 500);
    
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

    let fontStr = gMeme.lines[lineNum].size+ 'px Impact';

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

function uploadImg(elForm, ev) {
    ev.preventDefault();
    document.getElementById('imgData').value = gCanvas.toDataURL("image/jpeg");

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        uploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        document.querySelector('.share-container').innerHTML = `
        <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           Share   
        </a>`
    }
    doUploadImg(elForm, onSuccess);
}


function downloadImg(elLink) {
    var imgContent = gCanvas.toDataURL('/gallery');
    elLink.href = imgContent
}