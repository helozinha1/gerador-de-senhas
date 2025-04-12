// Quando o botão "Gerar Senha" for clicado, executa a função
document.getElementById('generate').addEventListener('click', function () {
    // Obtém os valores das opções selecionadas
    const tamanho = parseInt(document.getElementById('length').value);
    const incluirMaiusculas = document.getElementById('include_uppercase').checked;
    const incluirMinusculas = document.getElementById('include_lowercase').checked;
    const incluirNumeros = document.getElementById('include_numbers').checked;
    const incluirSimbolos = document.getElementById('include_symbols').checked;

    // Gera a senha com base nas opções
    const senha = gerarSenha(tamanho, incluirMaiusculas, incluirMinusculas, incluirNumeros, incluirSimbolos);

    // Exibe a senha gerada no campo de exibição
    const passwordDisplay = document.getElementById('password_display');
    passwordDisplay.textContent = senha;
});

// Função para gerar a senha
function gerarSenha(tamanho, incluirMaiusculas, incluirMinusculas, incluirNumeros, incluirSimbolos) {
    const caracteresMaiusculos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const caracteresMinusculos = 'abcdefghijklmnopqrstuvwxyz';
    const caracteresNumericos = '0123456789';
    const caracteresSimbolos = '!@#$%^&*()_+[]{}|;:,.<>?';

    let conjuntoCaracteres = '';
    if (incluirMaiusculas) conjuntoCaracteres += caracteresMaiusculos;
    if (incluirMinusculas) conjuntoCaracteres += caracteresMinusculos;
    if (incluirNumeros) conjuntoCaracteres += caracteresNumericos;
    if (incluirSimbolos) conjuntoCaracteres += caracteresSimbolos;

    if (conjuntoCaracteres === '') {
        return 'Selecione pelo menos uma opção!';
    }

    let senha = '';
    for (let i = 0; i < tamanho; i++) {
        const indiceAleatorio = Math.floor(Math.random() * conjuntoCaracteres.length);
        senha += conjuntoCaracteres[indiceAleatorio];
    }

    return senha;
}