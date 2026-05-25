const form = document.getElementById("formEndereco");

const cepInput = document.getElementById("cep");
const ufInput = document.getElementById("uf");

cepInput.addEventListener("input", () => {
    let valor = cepInput.value.replace(/\D/g, "");

    if (valor.length > 5) {
        valor = valor.replace(/^(\d{5})(\d{1,3})$/, "$1-$2");
    }

    cepInput.value = valor;
});

ufInput.addEventListener("input", () => {
    ufInput.value = ufInput.value.toUpperCase();
});

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const cep = cepInput.value;
    const logradouro = document.getElementById("logradouro").value.trim();
    const numero = document.getElementById("numero").value.trim();
    const uf = ufInput.value.trim();

    const regexCEP = /^(\d{5})-(\d{3})$/;
    const regexNumero = /^\d+$/;
    const regexUF = /^[A-Z]{2}$/;

    if (!regexCEP.test(cep)) {
        alert("CEP inválido. Use o formato 00000-000.");
        return;
    }

    if (logradouro.length < 5) {
        alert("Logradouro deve conter no mínimo 5 caracteres.");
        return;
    }

    if (!regexNumero.test(numero)) {
        alert("Número deve conter apenas dígitos.");
        return;
    }

    if (!regexUF.test(uf)) {
        alert("UF inválida. Digite 2 letras maiúsculas.");
        return;
    }

    alert("Endereço cadastrado com sucesso");
});