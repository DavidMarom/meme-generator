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
    if (lineNum === 0) {
        gMeme.lines[0].txt = document.getElementById('line-a').value;
    }

    if (lineNum === 1) {
        gMeme.lines[1].txt = document.getElementById('line-b').value;
    }
    renderCanvas();

}

function onColorSelect(scolor, lineNumber) {
    gMeme.lines[lineNumber].color = scolor;
    // gMeme.lines[lineNumber].color = document.getElementById('line-a').value;
    renderCanvas();
}


function onSaveClicked(){

    
}

