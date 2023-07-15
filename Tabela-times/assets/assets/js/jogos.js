function createGame(player1, hour, player2) {
    return `
    <li>
    <img src="./times/icon-${player1}.png" alt="Bandeira do ${player1}"/>
    <strong>${hour}</strong>
    <img src="./times/icon-${player2}.png" alt="Bandeira do ${player2}"/>
    </li>
    `
}
let delay = -0.4;
function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay:${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
    ${games}
    </ul>
    </div>
    `
}
document.querySelector("#cards").innerHTML = 
createCard("15/07", "Sábado", createGame("Corinthians", "21:00", "Palmeiras")) + 
createCard("20/07", "Quinta-Feira", createGame("SP", "21:00", "Vasco")) + 
createCard("21/07", "Sexta-Feira", createGame("Atletico", "18:00", "Bahia")) + createCard("19/07", "Segunda-Feira", createGame("bota", "21:00", "santos")) +
createCard("26/07", "Quarta-Feira", createGame("flamengo", "18:00", "inter")) + createCard("22/07", "Sabádo", createGame("Cruzeiro", "18:00", "gremio"))