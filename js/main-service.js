var gKeywords = {
    'happy': 12,
    'funny puk': 1
}

var gImgs = [{
    id: 1,
    url: '',
    keywords: ['happy']
}];

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
            txt: 'Top text',
            size: 80,
            align: 'center',
            color: '#000000',
            colorFill: '#ffffff',
            font:'Impact',
            lineWidth: 4,
            x: 275,
            y: 70
        },
        {
            txt: 'Bottom text',
            size: 40,
            align: 'center',
            color: '#000000',
            colorFill: '#ffffff',
            font:'Impact',
            lineWidth: 2,

            x: 275,
            y: 500

        }
    ]
}

function init() {
    populateGallery();

    // loadFromLocalhost();

}

// RENDER GALLERY
function populateGallery() {
    var strHTML = '';
    var el = document.querySelector('.thumbnails');

    for (var i = 1; i < 18; i++) {
        strHTML += `<img src="content/${i}.jpg" class="thumbnail" onclick="onThClicked(${i})" />`;
    }
    el.innerHTML = strHTML;
}

function updatePanel() {
    document.getElementById('line-a').value = gMeme.lines[gMeme.selectedLineIdx].txt;
    document.querySelector('.color-picker').value = gMeme.lines[gMeme.selectedLineIdx].color;
    document.getElementById('font-select').value = gMeme.lines[gMeme.selectedLineIdx].font;

}

