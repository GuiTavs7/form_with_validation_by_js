const buttonSubmit = document.querySelector(".submit-button"); // Seleciona apenas uma classe
const inputs = document.querySelectorAll(".input"); // Seleciona todos os elementos com a classe ".input"
const spanMessages = document.querySelectorAll(".erro"); // Seleciona todos os elementos com a classe ".campo-obrigatorio"

// 1) CAMPOS VAZIOS DO FORM - VERMELHO

buttonSubmit.addEventListener("click", () => {

    const allFieldsFilled = Array.from(inputs).every((input) => input.value.trim() !== ""); // Só será true quando todos campos forem preenchidos

    const name = inputs[0].value; // Armazena apenas o nome digitado pelo usuário no input de nome

    // Se todos campos forem preenchidos:

    if (allFieldsFilled) {
        alert("Seu formulário foi enviado, " + name + "!");
    }

    inputs.forEach((input, index) => {
        if (input.value === "") {
            input.classList.add("campo-vazio");
            spanMessages[index].classList.add("ativo");
        } else {
            input.classList.remove("campo-vazio");
            spanMessages[index].classList.remove("ativo");
        }
    });
});

// 2) PREENCHIMENTO DO FORM - VERDE

inputs.forEach(input => {

    input.addEventListener("input", () => {

        if(input.value !== ""){
            input.classList.add("campo-preenchido");
        }
        else{
            input.classList.remove("campo-preenchido");
        }
    
    });

});