const botao = document.getElementById('informacao');
botao.addEventListener('click', function aparecer() {
    const div = document.getElementById ("info");

    if(div.classList.contains("sobre")){
        div.classList.remove("sobre")
    }else{
        div.classList.add("sobre");
    }
})