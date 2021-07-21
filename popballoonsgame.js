function startGame() {
    var level_game = document.getElementById('level_game').value;
    window.location.href = 'popballoonsgame2.html?' + level_game;
}

function inciaJogo() {

    var url = window.location.search;
    var nivel_jogo = url.replace("?", "");

    var tempo_segundos = 0;

    if (nivel_jogo == 1) { //easy - 120s
        tempo_segundos = 120;
    }

    if (nivel_jogo == 2) { //easy - 60s
        tempo_segundos = 60;
    }

    if (nivel_jogo == 3) { //easy - 30s
        tempo_segundos = 30;
    }

    //segundos no span
    document.getElementById('cronometro').innerHTML = tempo_segundos;


    // quantidade de baloes
    var qtde_baloes = 15;
    cria_baloes(qtde_baloes);

    //imprimir qted_baloes
    document.getElementById('baloes_inteiros').innerHTML = qtde_baloes;
    document.getElementById('baloes_estourados').innerHTML = 0;
}

function cria_baloes(qtde_baloes) {

    for (var i = 1; i <= qtde_baloes; i++) {

        var balao = document.createElement("img");
        balao.src = 'imagens/balao_azul_pequeno.png';
        balao.style.margin = '10px';

        document.getElementById('cenario').appendChild(balao);
    }
}
