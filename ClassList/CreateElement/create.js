let div = document.getElementById('teste');

function createU1() {
    return `
    <ul>
    <li>Arroz</li>
    <li>Feijão</li>
    <li>Picanha</li>
    <li>Cerveja</li>
    <li>Batata</li>
    </ul>
    `
}
div.innerHTML = createU1();
document.getElementById('teste').innerHTML = createU1();