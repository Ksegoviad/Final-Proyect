const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const button4 = document.querySelector('#button4');
const button5 = document.querySelector('#button5');
const button6 = document.querySelector('#returnMenu');

function updateTitle(buttonTitle) {
    document.getElementById('pageTitle').innerText = buttonTitle;
    const buttons= document.querySelectorAll('button');
    buttons.forEach(function (button){
        if (button.id != 'returnMenu'){
            button.style.display='none';
        }
    });
}
function restoreButtons(){
    document.getElementById("pageTitle").innerText="Seleccione una opción"
    buttons = document.querySelectorAll('button');
    buttons.forEach(function(button){
        button.style.display='block';
    })
}





