var gLocalStore = [];

var gKeywords = {
    'fuck': 3,
    'president': 1,
    'woman': 1,
    'man': 1,
    'kid': 1,
    'dog': 1

}

var gImgs = [{
    keywords: ['trump', 'president', 'man', 'pres', 't', 'fuck']
}, {
    keywords: ['dogs', 'love', 'dog', 'animals', 'd']
}, {
    keywords: ['d', 'dog', 'dogs']
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
    keywords: ['kid', 'kids', 'baby', 'babies', 'love', 'b', 'd', 'dog', 'dogs']
}, {
    keywords: ['movie', 'woman', 'nature', 'why', 'work', 'w']
}, {
    keywords: ['why', 'man', 'm', 'w']
}, {
    keywords: ['kid', 'kids', 'revenge', 'd']
}, {
    keywords: ['man', 'evil', 'dr', 'babies', 'love', 'b', 'd']
}, {
    keywords: ['kid', 'kids', 'africa', 'dance']
}, {
    keywords: ['trump', 'president', 'p', 'pr', 'pres', 'fuck', 't', 'man', 'd']
}, {
    keywords: ['woman', 'oprah', 'tv', 'crazy']
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
    gLocalStore = [];
    saveToStorage('memes', gLocalStore);
    // populateMemes();
}

function init() {
    if (!loadFromStorage('memes') || loadFromStorage('memes') == '') { // if nothing in storage
        loadDump();
    } else {
        gLocalStore = loadFromStorage('memes');
    }
    populateGallery();
    populateMemes();
    renderCloud();
}

// RENDER GALLERY
function populateGallery() {
    var strHTML = '';
    var el = document.querySelector('.thumbnails');

    var srchEl = document.getElementById('srch').value;

    for (var i = 1; i < 27; i++) {

        if (srchEl == '') {
            strHTML += `<img src="content/${i}.jpg" class="thumbnail" onclick="onThClicked(${i})" />`;
        } else {
            if (gImgs[i - 1].keywords.includes(srchEl)) {
                strHTML += `<img src="content/${i}.jpg" class="thumbnail" onclick="onThClicked(${i})" />`;
            }
        }
    }
    el.innerHTML = strHTML;
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


    for (var i = 0; i < gLocalStore.length; i++) {
        strHTML += `<div class="father">
                        <img src="" class="thumbnail2 ttt${i}" onclick="onMemeClicked(${i})" />
                        <div class="son trash-btn" ><i class="fas fa-2x fa-trash-alt" width="30px" onclick="onDeleteMemeClicked(${i})"></i></div>
                    </div>`;
    }
    el.innerHTML = strHTML;
    for (var i = 0; i < gLocalStore.length; i++) {
        document.querySelector(`.ttt${i}`).setAttribute("src", gLocalStore[i]);
    }
}

function updatePanel() {
    document.getElementById('line-a').value = gMeme.lines[gMeme.selectedLineIdx].txt;
    document.querySelector('.color-picker').value = gMeme.lines[gMeme.selectedLineIdx].color;
    document.getElementById('font-select').value = gMeme.lines[gMeme.selectedLineIdx].font;
}

function populateMemeModal(i) {

    document.querySelector('.meme-present').setAttribute('src', gLocalStore[i]);

}

function renderCloud() {
    strHTML = '';

    Object.keys(gKeywords).forEach((key, index) => {
        strHTML += `<p style="font-size:${(gKeywords[key]*1)+10}px;" onclick="setWordSearchCound('${key}')">${key}</p>`;
    })

    document.querySelector('.cloud').innerHTML = strHTML;

}

function setWordSearchCound(key) {
    gKeywords[key]++;
    console.log(gKeywords[key]);
    document.getElementById('srch').value = key;
    renderCloud();
    populateGallery();

}