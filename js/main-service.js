var gKeywords = {
    'happy': 12,
    'funny puk': 1
}

var gImgs = [{
    id: 1,
    url: 'img/popo.jpg',
    keywords: ['happy']
}];

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I never eat Falafel',
        size: 20,
        align: 'left',
        color: 'red'
    }]
}

var gCanvas;
var gCtx;

var gPage = 'gallery';

function init() {
    populateGallery();
}

function populateGallery() {
    var strHTML = '';
    var el = document.querySelector('.thumbnails');

    for (var i = 1; i < 18; i++) {
        strHTML += `<img src="content/${i}.jpg" class="thumbnail" onclick="onThClicked(${i})" />`;
    }
    el.innerHTML = strHTML;

}