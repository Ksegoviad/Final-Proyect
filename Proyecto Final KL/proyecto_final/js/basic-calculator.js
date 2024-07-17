function restoreMenu(buttonId){
    document.getElementById(buttonId).style.display ='block';
}

function updateTitle(buttonTitle) {
    document.getElementById('pageTitle').innerText = buttonTitle;
    const buttons= document.querySelectorAll('button');
    buttons.forEach(function (button){
        if (button.id != 'buttonMenu'){
            button.style.display='none';
        }
    });
    restoreMenu('buttonMenu');
}

function restoreButtons(){
    document.getElementById("pageTitle").innerText="Seleccione una opción"
    buttons = document.querySelectorAll('button');
    buttons.forEach(function(button){
        button.style.display='block';
    })
    disappearMenu('buttonMenu');
}

function appearCalculator(){
    document.getElementById('calculator').style.display ='block';
}

function disappearCalculator(){
    document.getElementById('calculator').style.display ='none';
}

function basicCalculator(){
    appearCalculator();
    updateTitle("Calculadora básica");
    button();
}

function disappearMenu(buttonId){
    document.getElementById(buttonId).style.display ='none';
}
function returnMenu(){
    restoreButtons();
    disappearCalculator();
}

/*function deleteElement (){
    buttons= document.querySelectorAll('button');
    buttons.forEach(function (button){
        if (button.id === 'errase'){
            calculator.ans.value = calculator.ans.value.slice(0,-1);
            return;
        }
    });
}*/





