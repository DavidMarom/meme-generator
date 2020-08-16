function onMenuClicked(page) {
    gPage = page;
    hideAll();
    pageTo(page);
    updateMenu(page);
}

function onThClicked(image) { //img
    gMeme.selectedImgId = image;
    gMeme.selectedLineIdx = 0;
    // service: updateMeme(img)
    myResizeCanvas(); // no "my"
    openEditor();
    renderCanvas();
}

function onTextChange(lineNum) {
    gMeme.lines[gMeme.selectedLineIdx].txt = document.getElementById('line-a').value;
    renderCanvas();
}

function onColorSelect(scolor) {
    gMeme.lines[gMeme.selectedLineIdx].color = scolor;
    renderCanvas();
}

function onFontChange(fontName) {
    gMeme.lines[gMeme.selectedLineIdx].font = fontName;
    renderCanvas();
}

function onFontUp() {
    gMeme.lines[gMeme.selectedLineIdx].size += 2;
    renderCanvas();
}

function onFontDown() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 2;
    renderCanvas();
}

function onStrokeUp() {
    gMeme.lines[gMeme.selectedLineIdx].lineWidth += 1;
    renderCanvas();
}

function onStrokeDown() {
    gMeme.lines[gMeme.selectedLineIdx].lineWidth -= 1;
    renderCanvas();
}

function onAlignClicked(side) {
    gMeme.lines[gMeme.selectedLineIdx].align = side;
    renderCanvas();
}

function onSaveLocal() {
    saveToLocalStorage(); //service
    populateMemes();
    pageTo('memes');
}

function onDeleteMemeClicked(number) {
    gLocalStore.splice(number, 1);
    saveToStorage('memes', gLocalStore);
    populateMemes();
}

function onSearchType() {
    populateGallery();
}

function onMemeClicked(memeNember) {
    document.querySelector('.meme-modal').classList.remove('hide');
    populateMemeModal(memeNember);
}

