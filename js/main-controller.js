function onMenuClicked(page){

    gPage=page;
    hideAll();
    pageTo(page);
    updateMenu(page);

}

function onThClicked(image) {
    gSelectedImage=image;
    openEditor(image);
}