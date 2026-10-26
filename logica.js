let pokebola = document.getElementById("pokebola");
let area = document.getElementById("area");

let posY = 0;
let posX = 0;
let direcaoY = 1;
let direcaoX = 1;
let velocidade = 100;
let animacao;

function posicaoAleatoria() {
    // calculando posição do X e do Y:
    posX = Math.random() * (area.clientWidth - pokebola.clientWidth);
    posY = Math.random() * (area.clientHeight - pokebola.clientHeight);

    pokebola.style.left = posX + "px";
    pokebola.style.top = posY + "px";
}

function moverImagem() {
    posX += velocidade * direcaoX;
    posY += velocidade * direcaoY;

    // limites verticais
    if (posY >= area.clientHeight - pokebola.clientHeight) {
        posY = area.clientHeight - pokebola.clientHeight;
        direcaoY = -1;
    }

    if (posY <= 0) {
        posY = 0;
        direcaoY = 1;
    }

    // limites horizontais
    if (posX >= area.clientWidth - pokebola.clientWidth) {
        posX = area.clientWidth - pokebola.clientWidth;
        direcaoX = -1;
    }

    if (posX <= 0) {
        posX = 0;
        direcaoX = 1;
    }

    pokebola.style.left = posX + "px";
    pokebola.style.top = posY + "px";

    // continua a animação
    animacao = requestAnimationFrame(moverImagem);
}

function iniciar() {
    cancelAnimationFrame(animacao);

    posicaoAleatoria();

    // garante que a animação comece novamente
    animacao = requestAnimationFrame(moverImagem);
}

function pausar() {
    cancelAnimationFrame(animacao);
}

function mudarImagem() {
    const imagens = [
        "./images/pokebola.png",
        "./images/charmander.gif",
        "./images/pokebola_blue.png",
        "./images/pikachu.gif",
        "./images/pokebola_open.png",
        "./images/squirtle.gif",
        "./images/mew.gif",
        "./images/pokevenon.gif",
        "./images/butterfree.gif",
        "./images/gengar.gif",
        "./images/raichu.gif",
        "./images/zapdos.gif",
        "./images/snorlax.gif",
        "./images/charizard.gif"
    ];

    const sorteada = imagens[Math.floor(Math.random() * imagens.length)];

    pokebola.src = sorteada;
}