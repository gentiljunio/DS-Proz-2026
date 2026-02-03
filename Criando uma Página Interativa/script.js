
const corpo = document.getElementById('corpo');
const btnVerde = document.getElementById('btnVerde');
const btnOriginal = document.getElementById('btnOriginal');
const btnMensagem = document.getElementById('btnMensagem');

btnVerde.addEventListener('click', () => {
    corpo.style.backgroundColor = 'green';
});

btnOriginal.addEventListener('click', () => {
    corpo.style.backgroundColor = 'white';
});

btnMensagem.addEventListener('click', () => {
    alert("Olá! Seja bem-vindo ao meu app da aula 01 Introdução ao JavaScript.");
});