// Seleciona o botão
const button = document.getElementById("themeButton");

// Quando clicar no botão
button.addEventListener("click", () => {

    // Alterna a classe dark
    document.body.classList.toggle("dark");

    // Alterna a classe light
    document.body.classList.toggle("light");

});