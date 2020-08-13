function onMenuClicked(page) {
    gPage = page;
    hideAll();
    pageTo(page);
    updateMenu(page);
}

function onThClicked(image) {
    gMeme.selectedImgId = image;
    gMeme.selectedLineIdx = 0;
    openEditor();
}

function onTextChange(lineNum) {

    gMeme.lines[gMeme.selectedLineIdx].txt = document.getElementById('line-a').value;

    renderCanvas();
}

function onColorSelect(scolor) {
    gMeme.lines[gMeme.selectedLineIdx].color = scolor;
    // gMeme.lines[lineNumber].color = document.getElementById('line-a').value;
    renderCanvas();
}

function onFontChange(fontName) {
    gMeme.lines[gMeme.selectedLineIdx].font = fontName;
    renderCanvas();
}

function onFontUp() {
    gMeme.lines[gMeme.selectedLineIdx].size++;
    renderCanvas();
}

function onFontDown() {
    gMeme.lines[gMeme.selectedLineIdx].size--;
    renderCanvas();
}