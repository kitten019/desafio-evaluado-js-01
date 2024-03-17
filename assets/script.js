numJugadas = Number(prompt(`Ingrese la cantidad de veces que desea jugar: `));
opcionesJuego = [`piedra`, `papel`, `tijera`]
puntajeMaquina = 0;
puntajeJugador = 0;

for (let i = 0; i < numJugadas; i++) {
    opcionJugador = prompt(`Ingrese su opción (piedra, papel o tijera): `).toLowerCase();
    while (!opcionesJuego.includes(opcionJugador)) {
        console.log(`Opción incorrecta! Ingrese piedra, papel o tijera`);
        continue;
    }

    indiceOpcionComputador = Math.floor((Math.random() * 3));
    opcionComputador = opcionesJuego[indiceOpcionComputador]

    if (opcionJugador == `tijera` && opcionComputador == `papel` || opcionJugador == `papel` && opcionComputador == `piedra` ||
        opcionJugador == `piedra` && opcionComputador == `tijera`) {
        puntajeJugador++;
        console.log(`Tu has elegido ${opcionJugador} y el computador ha elegido ${opcionComputador},¡Has ganado!`);
    } else if (opcionJugador == opcionComputador) {
        console.log(`Tu has elegido ${opcionJugador} y el computador ha elegido ${opcionComputador}, han empatado`);
    } else {
        puntajeMaquina++;
        console.log(`Tu has elegido ${opcionJugador} y el computador ha elegido ${opcionComputador},¡Perdiste!`);
    }
    console.log(`Puntaje actual - Jugador: ${puntajeJugador}, Computadora: ${puntajeMaquina}\n`);
}
console.log(`Puntaje final - Jugador: ${puntajeJugador}, Computadora: ${puntajeMaquina}`);

//Muestra el conteo final del puntaje y quien ganó
if (puntajeJugador > puntajeMaquina) {
    console.log(`!Felicidades!, !Has ganado esta partida!`);
}else if(puntajeJugador == puntajeMaquina) {
    console.log(`Ha habido un empate en la partida`)
}else{
    console.log(`!Lástima!, Has perdido esta partida`);
}

