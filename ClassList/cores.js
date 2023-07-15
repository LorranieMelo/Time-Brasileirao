const botao = document. getElementById("trocar-cor");
const botao2 = document.getElementById("vermelho");
const botao3 = document.getElementById("amarelo");
const botao4 = document.getElementById("preto");

botao.addEventListener('click', function trocarCor(){
    let div = document.getElementById('azul');  

    div.classList.add('verde');
})
botao2.addEventListener('click', function trocarCor(){
    let div = document.getElementById("azul");  

    div.classList.add("vermelho");
})
botao3.addEventListener('click', function trocarCor(){
    let div = document.getElementById("azul");  

    div.classList.add("amarelo");
})
botao4.addEventListener('click', function trocarCor(){
    let div = document.getElementById("azul");  

    div.classList.add("preto");
})

