const botao = document.getElementById('botaoCoracao');

botao.addEventListener('click', () => {
    document.body.classList.toggle('tema-verde');

    // Troca o coração
    if (document.body.classList.contains('tema-verde')) {
        botao.textContent = '❤️'; // Ativado
    } else {
        botao.textContent = '🤍'; // Desativado
    }
});