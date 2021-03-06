function pageTo(page) {
    document.querySelector(`.${page}`).classList.remove('hide');
    if (page === 'memes') {
        document.querySelector('.editor-page').classList.add('hide');
        updateMenu('memes');
    }
    populateMemes();
}

function updateMenu(page) {
    document.querySelector('.memes-button').classList.remove('mark');
    document.querySelector('.gallery-button').classList.remove('mark');
    document.querySelector('.about-button').classList.remove('mark');
    document.querySelector(`.${page}-button`).classList.add('mark');
}

function openEditor() {
    hideAll();
    // reveal the editor
    document.querySelector(`.editor-page`).classList.remove('hide');
    document.querySelector('.canvas').classList.remove('hide');
    renderCanvas();
}

function hideAll() {
    document.querySelector('.gallery').classList.add('hide');
    document.querySelector('.memes').classList.add('hide');
    document.querySelector('.editor-page').classList.add('hide');
    document.querySelector('.about').classList.add('hide');
    document.querySelector('.meme-modal').classList.add('hide');
}

function closeModal() {
    document.querySelector('.meme-modal').classList.add('hide');
}