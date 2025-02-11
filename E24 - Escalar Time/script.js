function escalar() {
    const position_jogador = document.getElementById('position').value
    const name_jogador = document.getElementById('name').value
    const number_jogador = document.getElementById('number').value
    
    const confirmatiton = confirm("Escalar " + name_jogador + " como " + position_jogador + "?")

    if(confirmatiton) {
        const lista = document.getElementById('list')
        const playerEscalado = document.createElement('li')
        playerEscalado.id = "player-" + number_jogador
        playerEscalado.innerText = position_jogador + " - " + name_jogador + " " + number_jogador
        lista.appendChild(playerEscalado)
    }

    position_jogador.value = ""
    name_jogador.value = " "
    number_jogador.value = " "
}

function removerJog() {
    const number_jogador = document.getElementById('numberRem').value
    const playerToRemove = document.getElementById('player-' + number_jogador)
    document.getElementById('list').removeChild(playerToRemove)

}
