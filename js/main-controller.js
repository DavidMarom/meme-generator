'use strict';

function onMenuClicked(page) {
    hideAll();
    pageTo(page);
    updateMenu(page);
}

function onThumbnailClicked(id) {
    setSelectedImgId(id);
    setSelectedLineIdx(0);
    resizeCanvas();
    openEditor();
    renderCanvas();
}

function onTextChange(lineNum) {
    setCanvasElementValue(lineNum, document.getElementById('line-a').value);
    renderCanvas();
}

function onColorSelect(scolor) {
    setActiveElementColor(scolor);
    renderCanvas();
}

function onFontChange(fontName) {
    setActiveElementFont(fontName);
    renderCanvas();
}

function onFontUp() {
    changeActiveElementSize(2);
    renderCanvas();
}

function onFontDown() {
    changeActiveElementSize(-2);
    renderCanvas();
}

function onStrokeUp() {
    changeActiveElementStroke(1);
    renderCanvas();
}

function onStrokeDown() {
    changeActiveElementStroke(-1);
    renderCanvas();
}

function onAlignClicked(side) {
    setActiveElementAlignDirection(side);
    renderCanvas();
}

function onSaveLocal() {
    saveMemeToLocalStorage(); //service
    populateMemes();
    pageTo('memes');
}

function onDeleteMemeClicked(number) {
    gUserMemes.splice(number, 1);
    saveToStorage('memes', gUserMemes);
    populateMemes();
}

function onSearchType() {
    populateGallery();
}

function onMemeClicked(memeNember) {
    document.querySelector('.meme-modal').classList.remove('hide');
    populateMemeModal(memeNember);
}

// RENDER MEMES
function populateMemes() {
    var strHTML = '';
    var el = document.querySelector('.thumbnails2');
    if (!loadFromStorage('memes') || loadFromStorage('memes') == '') {
        strHTML += `
        <div class="no-memes-message">
            <h1>You dont have any memes yet!</h1>
            <h2>Your saved memes will appear here</h2>

            <div class="save-btn2" onclick="onMenuClicked('gallery')">
                Create a meme now !
            </div>
        </div>`
        el.innerHTML = strHTML;
    }

    for (var i = 0; i < gUserMemes.length; i++) {
        strHTML += `<div class="father">
                        <img src="" class="thumbnail2 ttt${i}" onclick="onMemeClicked(${i})" />
                        <div class="son trash-btn" ><i class="fas fa-2x fa-trash-alt" width="30px" onclick="onDeleteMemeClicked(${i})"></i></div>
                    </div>`;
    }
    el.innerHTML = strHTML;
    for (var i = 0; i < gUserMemes.length; i++) {
        document.querySelector(`.ttt${i}`).setAttribute("src", gUserMemes[i]);
    }
}

// RENDER GALLERY
function populateGallery() {
    // var imgs = getImgs()
    var strHTML = '';
    var el = document.querySelector('.thumbnails');
    var srchEl = document.getElementById('srch').value;

    for (var i = 1; i < 27; i++) {
        if (srchEl == '') {
            strHTML += `<img src="content/${i}.jpg" class="thumbnail" onclick="onThumbnailClicked(${i})" />`;
        } else {
            if (gImgs[i - 1].keywords.includes(srchEl)) {
                strHTML += `<img src="content/${i}.jpg" class="thumbnail" onclick="onThumbnailClicked(${i})" />`;
            }
        }
    }
    el.innerHTML = strHTML;
}

function renderCloud() {
    var strHTML = '';
    Object.keys(gKeywords).forEach((key, index) => {
        strHTML += `<p style="font-size:${(gKeywords[key]*2)+10}px;" onclick="setWordSearchCound('${key}')">${key}</p>`;
    })
    document.querySelector('.cloud').innerHTML = strHTML;
}

function setWordSearchCound(keyword) {
    if (gKeywords[keyword] < 20) {
        increaseCloudWordClickCount(keyword)
    }
    document.getElementById('srch').value = keyword;
    renderCloud();
    populateGallery();
}

function updatePanel() {
    document.getElementById('line-a').value = getActiveCanvasElementValue();
    document.querySelector('.color-picker').value = getActiveCanvasElementColor();
    document.getElementById('font-select').value = getActiveCanvasElementFont();
}

function populateMemeModal(i) {
    document.querySelector('.meme-present').setAttribute('src', gUserMemes[i]);
}

function detectScreenSize() {
    var windowWidth = window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

    if (windowWidth < 500) {
        gScreenRatio = 0.5;
    }
}