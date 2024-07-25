document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value.trim();
        const checkbox = document.getElementById('checkbox');

        if (email === "" || senha === "") {
            alert("Por favor, preencha todos os campos.");
        } else if (!checkbox.checked) {
            alert("Você deve concordar com os termos e condições.");
        } else {
            window.location.href = "../HTML/home.html";
        }
    });
});
