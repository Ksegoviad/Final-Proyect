function updateTitle(buttonTitle) {
    document.getElementById('pageTitle').innerText = buttonTitle;
    const buttons= document.querySelectorAll('button');
    buttons.forEach(function (button){
        if (button.id != 'returnMenu'){
            button.style.display='none';
        }
    });
}

