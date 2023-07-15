let peso = document.getElementById('peso');
let altura = document.getElementById('altura');
let resultado = document.getElementById('resultado');
let total = document.getElementById('total');

resultado.addEventListener("click", function soma (){
    let peso = Number(document.getElementById('peso').value);
    let altura = Number(document.getElementById('altura').value);
    let total = document.getElementById('total');

    total.textContent = peso / (altura * altura);

})