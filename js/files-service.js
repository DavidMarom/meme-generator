function downloadImg(elLink) { // in use with yellow download btn
    var imgContent = gCanvas.toDataURL('');
    elLink.href = imgContent
}

function saveToLocalStorage() {
    gLocalStore.push(document.getElementById('myCanvas').toDataURL('image/jpeg'));
    console.log(gLocalStore.length);
    saveToStorage('memes',gLocalStore);
}

function uploadImg(elForm, ev) {
    ev.preventDefault();
    document.getElementById('myCanvas').value = gCanvas.toDataURL("image/jpeg");

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        uploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        document.querySelector('.share-container').innerHTML = `
        <a class="fb-btn2" href="www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
        <i class="fab fa-facebook-f"></i></a>`
    }
    doUploadImg(elForm, onSuccess);
}

function doUploadImg(elForm, onSuccess) {
    var formData = new FormData(elForm);
    fetch('ca-upload.com/here/upload.php', {
            method: 'POST',
            body: formData
        })
        .then(function (res) {
            return res.text()
        })
        .then(onSuccess)
        .catch(function (err) {
            console.error(err)
        })
}

function saveToStorage(key, val) {
    var str = JSON.stringify(val);
    localStorage.setItem(key, str)
}

function loadFromStorage(key) {
    var str = localStorage.getItem(key);
    var val = JSON.parse(str)
    return val;
}