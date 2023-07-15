let numero1 = document.getElementById('num1');
let numero2 = document.getElementById('num2');
let resultado = document.getElementById('resultado');
let total = document.getElementById('total');

resultado.addEventListener("click", function soma (){
    let numero1 = Number(document.getElementById('num1').value);
    let numero2 = Number(document.getElementById('num2').value);
    let total = document.getElementById('total');

    total.textContent = numero1 + numero2;

})