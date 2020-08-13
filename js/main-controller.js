function onMenuClicked(page) {

    gPage = page;
    hideAll();
    pageTo(page);
    updateMenu(page);

}

function onThClicked(image) {

    gMeme.selectedImgId = image;
    gMeme.selectedLineIdx = 0;



    openEditor(image);
}


function onTextChange(lineNumber) {
    
    gMeme.lines[lineNumber].txt = document.getElementById('line-a').value;
    renderCanvas();

}


function onColorSelect(scolor,lineNumber){
    gMeme.lines[lineNumber].color = scolor;
    // gMeme.lines[lineNumber].color = document.getElementById('line-a').value;
    renderCanvas();
}

// var gMeme = {
//     selectedImgId: 1,
//     selectedLineIdx: 0,
//     lines: [{
//         txt: 'I never eat Falafel',
//         size: 20,
//         align: 'left',
//         color: 'red'
//     }]