
let algumJogoAlugado = true;  // Inicializa como true, indicando que há um jogo alugado
let nomeDoJogoAlugado = 'Takenoko';  // Nome do jogo já alugado

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name').textContent;

    let botoes = document.getElementsByClassName('dashboard__item__button');

    if(botao.classList.contains('dashboard__item__button--return')){
        // Devolução de jogo:
        confirm(`Tem certeza que você deseja fazer a devolução de ${nomeDoJogoAlugado}?`);
        botao.classList.remove('dashboard__item__button--return');
        botao.classList.add('dashboard__item__button');
        imagem.classList.remove('dashboard__item__img--rented');
        botao.innerHTML = 'Alugar';

        // Mudança do estado do jogo:
        algumJogoAlugado = false;
        nomeDoJogoAlugado = '';

        // Habilita todos os botoes de aluguel;
        for(let i = 0; i < botoes.length; i++){
            botoes[i].disabled = false;
        }

    } else if(botao.classList.contains('dashboard__item__button')){
        if(algumJogoAlugado){
            alert(`O jogo ${nomeDoJogoAlugado} está alugado! Devolva para poder alugar outro.`);
        } else{
            // Aluguel de jogo:
            botao.classList.add('dashboard__item__button--return');
            imagem.classList.add('dashboard__item__img--rented');
            botao.innerHTML = 'Devolver';

            // Mudança do estado do jogo:
            algumJogoAlugado = true;
            nomeDoJogoAlugado = nomeJogo;

            // Desabilita botões de aluguel:
            for(let i = 0; i < botoes.length; i++){
                botoes[i].disabled = true;
            }
        }
    } 

    quantidadeDeJogosAlugados();
}

function quantidadeDeJogosAlugados(){
    let jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    console.log(jogosAlugados);
}