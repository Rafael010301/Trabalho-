
const formLogin = document.querySelector('.formUsuario');
const inputNome = document.querySelector('#nomeUsuario');
const inputSenha = document.querySelector('#senhaUsuario');

if (formLogin) {
    formLogin.addEventListener('submit', (event) => {
        event.preventDefault();

        const nomeValue = inputNome.value.trim();
        const senhaValue = inputSenha.value.trim();

        if (nomeValue === '' || senhaValue === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (nomeValue === 'osmarmotinha@senai.com.br' && senhaValue === '123456') {
            window.location.href = 'index.html';
        } else {
            alert('Nome de usuário ou senha incorretos.');
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    
    const cartoesTarefa = document.querySelectorAll('.cardTarefa');

    if (cartoesTarefa.length > 0) {
        cartoesTarefa.forEach(cartao => {
            cartao.addEventListener('click', () => {
                window.location.href = 'galeria.html';
            });
        });
    }
    
});