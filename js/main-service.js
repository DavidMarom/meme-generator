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
        align: 'left',
        color: 'black',
        colorFill: 'white',
        
        x:275,
        y:70
    },
    {
        txt: 'Bottom text',
        size: 40,
        align: 'left',
        color: 'black',
        colorFill: 'white',
        
        x:275,
        y:500

    }]
}

function init() {
    populateGallery();
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