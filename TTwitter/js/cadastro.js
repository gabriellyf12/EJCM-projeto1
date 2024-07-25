document.addEventListener('DOMContentLoaded', function() {
    const cadastroForm = document.getElementById('cadastroForm');
    const cadastrarButton = document.getElementById('cadastrarButton');

    cadastrarButton.addEventListener('click', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const datanascimento = document.getElementById('datanascimento').value.trim();
        const senha = document.getElementById('senha').value.trim();
        const confirmarSenha = document.getElementById('confirmarSenha').value.trim();
        const checkbox = document.getElementById('checkbox');

        if (nome === "" || email === "" || senha === "" || confirmarSenha === "") {
            alert("Por favor, preencha todos os campos obrigatórios.");
        } 
        else if (senha !== confirmarSenha) {
            alert("As senhas não correspondem.");
        } 
        else if (!checkbox.checked) {
            alert("Você deve concordar com os termos e condições.");
        }
         else {
            alert("Cadastro realizado com sucesso!");
            window.location.href = "../HTML/home.html";
        }
    });
});
