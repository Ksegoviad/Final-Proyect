const loginContainer = document.getElementById('loginContainer');
const loginForm = document.getElementById('loginForm');

// Mostrar el contenedor del login
loginContainer.style.display = 'block';

// Iniciar sesión con el usuario y contraseña
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
        loginContainer.style.display = 'none';
        document.getElementById('paginaContainer').style.display = 'block';
    } else if (!storedPassword) {
        localStorage.setItem(username, password);
        document.getElementById('loginMessage').textContent = 'Usuario registrado.';
        document.getElementById('loginMessage').style.color = 'green';
    } else {
        document.getElementById('loginMessage').textContent = 'Usuario o contraseña incorrectos';
        document.getElementById('loginMessage').style.color = 'red';
    }
});

function restoreMenu(buttonId) {
    document.getElementById(buttonId).style.display = 'block';
}

function updateTitle(buttonTitle) {
    document.getElementById('pageTitle').innerText = buttonTitle;
    const buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        if (button.id !== 'buttonMenu') {
            button.style.display = 'none';
        }
    });
    restoreMenu('buttonMenu');
}

function restoreButtons() {
    document.getElementById('pageTitle').innerText = 'Seleccione una opción';
    const buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        button.style.display = 'block';
    });
    disappearMenu('buttonMenu');
}

function appearCalculator() {
    document.getElementById('calculator').style.display = 'block';
}

function disappearCalculator() {
    document.getElementById('calculator').style.display = 'none';
}

function basicCalculator() {
    appearCalculator();
    updateTitle('Calculadora básica');
}

function disappearMenu(buttonId) {
    document.getElementById(buttonId).style.display = 'none';
}

function returnMenu() {
    restoreButtons();
    disappearCalculator();
}
