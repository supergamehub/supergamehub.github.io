document.addEventListener('DOMContentLoaded', () => {
    console.log("¡Bienvenido a SuperGameHub!");

    // Inicializar BlockRain
    $('.blockrain-container').blockrain({
        autoplay: false,
        theme: 'retro',
        blockWidth: 10,
        difficulty: 'normal',
        playText: '¡Juega BlockRain!',
        playButtonText: 'Iniciar',
        gameOverText: 'Fin del Juego',
        restartButtonText: 'Reiniciar',
        scoreText: 'Puntuación'
    });
});

const juegosDisponibles = {
    game1: "Rompecabezas Azul",
    game2: "Escape Rojo",
    game3: "Aventura Verde",
    game4: "BlockRain"
};

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const canvasContainer = document.getElementById('canvas-container');

function jugar(idJuego) {
    if (juegosDisponibles[idJuego]) {
        canvasContainer.style.display = 'block';
        switch (idJuego) {
            case 'game1':
                iniciarJuegoRompecabezas();
                break;
            case 'game2':
                iniciarJuegoAccion();
                break;
            case 'game3':
                iniciarJuegoEstrategia();
                break;
            case 'game4':
                iniciarBlockRain();
                break;
            default:
                alert("El juego seleccionado no está disponible.");
        }
    } else {
        alert("El juego seleccionado no está disponible.");
    }
}

function salirJuego() {
    canvasContainer.style.display = 'none';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function iniciarJuegoRompecabezas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.font = '30px Arial';
    ctx.fillText('Juego de Rompecabezas', 250, 300);
    alert("Este es un rompecabezas en desarrollo.");
}

function iniciarJuegoAccion() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let x = 50;
    let y = 50;
    const velocidad = 5;

    function dibujarJugador() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'red';
        ctx.fillRect(x, y, 50, 50);
    }

    function moverJugador(e) {
        if (e.key === 'ArrowUp') y -= velocidad;
        if (e.key === 'ArrowDown') y += velocidad;
        if (e.key === 'ArrowLeft') x -= velocidad;
        if (e.key === 'ArrowRight') x += velocidad;
        dibujarJugador();
    }

    document.addEventListener('keydown', moverJugador);
    dibujarJugador();
}

function iniciarJuegoEstrategia() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'green';
    ctx.font = '30px Arial';
    ctx.fillText('Juego de Estrategia', 250, 300);
    alert("Este es un juego de estrategia en desarrollo.");
}

function iniciarBlockRain() {
    $('.blockrain-container').blockrain('start');
}
