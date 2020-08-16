'use strict';

var gScreenRatio = 1;
var gUserMemes = [];

var gKeywords = {
    'fuck': 3,
    'president': 1,
    'woman': 10,
    'man': 1,
    'kid': 1,
    'dog': 14

}

var gImgs = [{
    keywords: ['trump', 'president', 'man', 'pres', 't', 'fuck']
}, {
    keywords: ['dr', 'evil', 'movie', 'powers', 'man']
}, {
    keywords: ['woman', 'oprah', 'tv', 'crazy']
}, {
    keywords: ['cat', 'cats', 'cute', 'animals', 'c']
}, {
    keywords: ['kids', 'k']
}, {
    keywords: ['funny', 'man']
}, {
    keywords: ['kids', 'shocked']
}, {
    keywords: ['tell me', 'tell', 'movie', 'man', 'm', 'mov']
}, {
    keywords: ['kids', 'kid', 'funny', 'k']
}, {
    keywords: ['obama', 'president', 'man', 'pres']
}, {
    keywords: ['sport', 'man']
}, {
    keywords: ['israel', 'hebrew', 'man']
}, {
    keywords: ['actors', 'actor', 'leonardo', 'movie', 'man', 'm', 'mov']
}, {
    keywords: ['actors', 'actor', 'movie', 'man', 'm', 'mov']
}, {
    keywords: ['actor', 'actors', 'man']
}, {
    keywords: ['actor', 'actors', 'man']
}, {
    keywords: ['president', 'putin', 'man', 'pres']
}, {
    keywords: ['animation', 'movie', 'ani', 'man', 'm', 'mov']
}, {
    keywords: ['dog', 'dogs', 'baby', 'babies', 'love', 'b', 'd', 'dog', 'dogs']
}, {
    keywords: ['movie', 'woman', 'nature', 'why', 'work', 'w']
}, {
    keywords: ['why', 'man', 'm', 'w']
}, {
    keywords: ['kid', 'kids', 'revenge', 'd','beach']
}, {
    keywords: ['dog','dogs','love','beach']
}, {
    keywords: ['kid', 'kids', 'africa', 'dance']
}, {
    keywords: ['trump', 'president', 'p', 'pr', 'pres', 'fuck', 't', 'man', 'd']
}, {
    keywords: ['dogs', 'love', 'dog', 'animals', 'd']
}];

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
            txt: 'Edit title',
            size: 80,
            align: 'center',
            color: '#000000',
            colorFill: '#ffffff',
            font: 'Impact',
            lineWidth: 3,
            x: 275,
            y: 100
        },
        {
            txt: '👆 Drag the text around',
            size: 40,
            align: 'center',
            color: '#000000',
            colorFill: '#ffffff',
            font: 'Impact',
            lineWidth: 2,

            x: 275,
            y: 400

        }
    ]
}

function loadDump() {
    gUserMemes = [];
    saveToStorage('memes', gUserMemes);
}

function init() {
    window.onload = detectScreenSize();
    if (!loadFromStorage('memes') || loadFromStorage('memes') == '') { // if nothing in storage
        loadDump();
    } else {
        gUserMemes = loadFromStorage('memes');
    }
    populateGallery();
    populateMemes();
    renderCloud();
}

// SETTERS

function setSelectedImgId(id) {
    gMeme.selectedImgId = id;
}

function setSelectedLineIdx(idx) {
    gMeme.selectedLineIdx = idx;
}

function setActiveElementColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color;
}

function setActiveElementFont(font) {
    gMeme.lines[gMeme.selectedLineIdx].font = font;
}

function changeActiveElementSize(size) {
    gMeme.lines[gMeme.selectedLineIdx].size += size;
}

function changeActiveElementStroke(size) {
    gMeme.lines[gMeme.selectedLineIdx].lineWidth += size;
}

function setActiveElementAlignDirection(side) {
    gMeme.lines[gMeme.selectedLineIdx].align = side;
}

// GETTERS

function getActiveCanvasElementIdx() {
    return (gMeme.selectedLineIdx);
}

function getActiveCanvasElementColor() {
    return (gMeme.lines[gMeme.selectedLineIdx].color);
}

function getActiveCanvasElementValue() {
    return (gMeme.lines[gMeme.selectedLineIdx].txt);
}

function getActiveCanvasElementFont() {
    return (gMeme.lines[gMeme.selectedLineIdx].font);
}

function setCanvasElementValue(Idx, value) {
    gMeme.lines[getActiveCanvasElementIdx(Idx)].txt = value;
}

function addSticker(str) {
    var obj = {
        txt: str,
        size: 80 * gScreenRatio,
        align: 'center',
        color: '#ffffff00',
        colorFill: '#000000',
        font: 'Arial',
        lineWidth: 1,
        x: 275,
        y: 200
    }
    gMeme.lines.push(obj);
    renderCanvas(); //controller

}

function increaseCloudWordClickCount(keyword) {
    gKeywords[keyword]++;
}