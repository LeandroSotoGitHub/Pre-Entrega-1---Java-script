// Función para mostrar un mensaje y solicitar la entrada del usuario
function getInput(texto) {
    return prompt(texto);
}

// Función para mostrar una situación y opciones disponibles
function showScenario(scenario, options) {
    alert(scenario);
    let optionsMessage = "Opciones disponibles:\n";
    for (let i = 0; i < options.length; i++) {
        optionsMessage += `${i + 1}. ${options[i]}\n`;
    }
    alert(optionsMessage);
}
// // Función para resolver enigmas
// function resolverEnigma(valor1, valor2, valor3) {
//     let valor = valor1 + valor2 + valor3;
//     if (valor)
// }

// Función para determinar el ganador del juego "piedra, papel o tijera"
function determineWinner(playerChoice, guardianChoice) {
    if (playerChoice === guardianChoice) {
        return "empate";
    } else if (
        (playerChoice === "Piedra" && guardianChoice === "Tijera") ||
        (playerChoice === "Papel" && guardianChoice === "Piedra") ||
        (playerChoice === "Tijera" && guardianChoice === "Papel")
    ) {
        return "jugador";
    } else {
        return "guardián";
    }
}
// Función para mostrar las opciones y obtener la elección del jugador
function piedraPapeloTijera(descripcion,options) {
    alert(descripcion)
    let message = "Elige tu movimiento:\n";
    for (let i = 0; i < options.length; i++) {
        message += (i + 1) + ". " + options[i] + "\n";
    }
    alert(message);
}
// Función para simular una aventura
function adventure() {
    let playerName = getInput("¡Bienvenido a la aventura! Antes de comenzar, ¿cómo te llamas?");
    alert(`Hola ${playerName}, prepárate para embarcarte en una emocionante aventura.`);

    let choice;
    let gameOver = false;

    while (!gameOver) {

        showScenario("Te encuentras en un cruce de caminos. ¿Hacia dónde quieres ir?", ["Explorar el bosque", "Seguir el camino principal"]);
        choice = parseInt(getInput("Ingresa el número de la opción que desees:"));
        switch (choice) {
            case 1:
//=============================================== ESCENARIO 1: EXPLORAR BOSQUE =================================
                showScenario("Decidiste explorar el bosque. Te adentras en la espesura y encuentras un tesoro escondido rodeado de serpientes, ¿Qué decides hacer?", ["Huir del bosque", "Buscar un antídoto", "Estudiar el comportamiento de las serpientes"]);
                choice = parseInt(getInput("Ingresa el número de la opción que desees:"));
                switch (choice) {
                    case 1:
////////////////////////////////////////////Opción 1: Huir del bosque/////////////////////////////////////////////
                        showScenario("Optaste por huir del bosque para evitar enfrentarte a las serpientes, de camino te cruzas con un sendero secreto", ["Adentrarte", "Seguir camino"]);
                        choice = parseInt(getInput("Ingresa el número de la opción que desees:"));
                        switch (choice){
                            // OPCION LABERINTO// // // // // // // // // // // // // // // // // // // // // // 
                            case 1:
                                alert(quest.bosque.huir.adentrate.laberinto)
                                alert(quest.bosque.huir.adentrate.laberinto2)
                                let enigma1 = prompt(quest.bosque.huir.adentrate.enigmaTexto1)
                                if (enigma1 == 33){
                                    alert('Bien! Has pasado la primera prueba.')
                                    let enigma2 = prompt(quest.bosque.huir.adentrate.enigmaTexto2)
                                    if (enigma2 == 46){
                                        alert('Bien! Has pasado la segunda prueba.')
                                        let enigma3 = prompt(quest.bosque.huir.adentrate.enigmaTexto3)
                                        if (enigma3 == 61){
                                            alert(quest.bosque.huir.adentrate.enigmaGanador)
                                            alert('Has terminado tu aventura')
                                                gameOver = true;
                                                break;
                                        }else {
                                            alert(quest.bosque.huir.adentrate.enigmaPerdedor)
                                            gameOver = true;
                                            break;
                                        }
                                    } else{
                                        alert(quest.bosque.huir.adentrate.enigmaPerdedor)
                                        gameOver = true;
                                        break;
                                    }
                                } else{
                                    alert(quest.bosque.huir.adentrate.enigmaPerdedor)
                                    gameOver = true;
                                    break;
                                }
                            // Seguir camino Y MALECHORES // // // // // // // // // // // // // // // // // // // 
                            case 2: 
                                alert(quest.bosque.huir.seguir.bandidos1)
                                alert(quest.bosque.huir.seguir.bandidos2)
                                alert(quest.bosque.huir.seguir.bandidos3)
                                alert(quest.bosque.huir.seguir.bandidos4)
                                showScenario(quest.bosque.huir.seguir.bandidos5, ["Aceptar trato", "Rechazar trato"]);
                                choice = parseInt(getInput("Ingresa el número de la opción que desees:"));
                                switch (choice){
                                    case 1:
                                        showScenario(quest.bosque.huir.seguir.bandidosAceptarTrato.si, ["Aceptar trato", "Rechazar trato"]);
                                        choice = parseInt(getInput("Ingresa el número de la opción que desees:"));
                                        switch (choice){
                                            case 1: 
                                            alert(quest.bosque.huir.seguir.bandidosTrato.si2)
                                            gameOver = true;
                                            break;
                                            case 2:
                                            alert(quest.bosque.huir.seguir.bandidosTrato.no)
                                            gameOver = true;
                                            break;
                                        }
                                        gameOver = true;
                                        break;
                                        case 2:
                                            alert(quest.bosque.huir.seguir.bandidosTrato.no)
                                            gameOver = true;
                                            break;
                                }
                                gameOver = true;
                                break;
                        }
                        gameOver = true;
                        break;
/////////////////////////////////////////////// OPCION 2 BUSCAR ANTIDOTO//////////////////////////////////////
                    case 2:
                        alert("Decides que buscar un antídoto es la manera más inteligente de obtener el tesoro.\n A lo lejos, divisas tres figuras en el bosque: un alquimista ocupado en sus experimentos, una criatura amistosa que parece dispuesta a ayudar y una tribu local que habita en la zona. ¿A quién decides acercarte en busca de ayuda?")
                        showScenario("Debes tomar una decision:", ["Alquimista", "Criatura amistosa", "Tribu local"]);
                        choice = parseInt(getInput("Ingresa el número de la opción que desees:"));
                        switch (choice){
                            // ALQUIMISTA// // // // // // // // // // // // // // // // // // // // // // // // // 
                            case 1:
                                alert(quest.bosque.antidoto.alquimista)
                                gameOver = true;
                                break;
                            // CRIATURA AMISTOSA// // // // // // // // // // // // // // // // // // // // 
                            case 2:
                                showScenario(quest.bosque.antidoto.criatura.presentacion, ["Adoptar", "Dejar"]);
                                choice = parseInt(getInput("Ingresa el número de la opción que desees:"));
                                switch (choice){
                                    case 1:
                                        let nombreMascota = prompt("Que nombre deseas ponerle?")
                                        alert(`Conmovido por la lealtad y la amabilidad de ${nombreMascota}, decides aceptar su compañía y llevarla contigo como mascota. ${nombreMascota} te mira con alegría y gratitud, y te sigue con entusiasmo mientras te adentras en el bosque. \nAl llegar a casa, celebras tu victoria con ${nombreMascota} a tu lado, agradecido por haber encontrado no solo un tesoro, sino también a un amigo verdadero y leal. Juntos, enfrentarán nuevas aventuras y desafíos`)
                                        gameOver = true;
                                        break;
                                    case 2:
                                        alert(quest.bosque.antidoto.criatura.dejar)
                                        gameOver = true;
                                        break;
                                }
                                gameOver = true;
                                break;
                            // TRIBU LOCAL// // // // // // // // // // // // // // // // // // // 
                            case 3:
                                showScenario(quest.bosque.antidoto.tribu.presentacion, ["Aceptar", "Rechazar"]);
                                choice = parseInt(getInput("Ingresa el número de la opción que desees:"));
                                switch (choice){
                                    case 1:
                                        alert(quest.bosque.antidoto.tribu.aceptar)
                                        gameOver = true;
                                        break;
                                    case 2:
                                        alert(quest.bosque.antidoto.tribu.rechazar)
                                        gameOver = true;
                                        break;
                                }
                        }
                        gameOver = true;
                        break;
                    case 3:
//////////////////////////////////////// Opción 3 ANALIZAR COMPORTAMIENTO //////////////////////////////////////////
                        alert(quest.bosque.comportamiento.presentacion);
                        // llave1
                        alert(quest.bosque.comportamiento.llaves.llave1)
                        // llave2
                        alert(quest.bosque.comportamiento.llaves.llave2)
                        // llave3
                        alert(quest.bosque.comportamiento.llaves.llave3)
                        showScenario("Debes tomar una decision:", ["Llave de la Serpiente Dorada", "Llave de la Pluma de Águila", "Llave del Ojo de la Luna"]);
                        choice = parseInt(getInput("Ingresa el número de la opción que desees:"));
                        switch (choice){
                            // llave 1 - incorrecta
                            case 1:
                                alert(quest.bosque.comportamiento.llaves.incorrecta)
                            gameOver = true;
                            break;
                            // llave 2 - incorrecta
                            case 2:
                                alert(quest.bosque.comportamiento.llaves.incorrecta)
                                gameOver = true;
                                break;
                                case 3:
                            // llave 3 - CORRECTA
                                alert(quest.bosque.comportamiento.llaves.correcta.texto1)
                                alert(quest.bosque.comportamiento.llaves.correcta.texto2)
                            gameOver = true;
                            break;  
                        }
                        break;
                    default:
                        alert("Por favor, ingresa un número válido.");
                        break;
                }
                gameOver = true;
                break;
//========================================== ESCENARIO 2:AVENIDA PRINCIPAL ======================================
            case 2:
                showScenario(quest.caminoPrincipal.presentacion, ["Explorar el castillo", "Seguir el camino"]);
                choice = parseInt(getInput("Ingresa el número de la opción que desees:"));
                switch (choice) {
                    // Explorar castillo// // // // // // // // // // // // // // // // 
                    case 1:
                        alert(quest.caminoPrincipal.castillo.presentacion.texto1)
                        alert(quest.caminoPrincipal.castillo.presentacion.texto2)
                        showScenario("Debes tomar una decision:", ["Explorar el pasadizo secreto", "Seguir explorando"]);
                        choice = parseInt(getInput("Ingresa el número de la opción que desees:"));
                        switch (choice) {
                            // Explorar pasadizo// // // // // // // // // // // // // // // //
                            case 1:
                                alert(quest.caminoPrincipal.castillo.pasadizo.presentacion)
                                showScenario("Ahora tienes que decidir. ¿Qué camino agarrar?", ["Izquierda", "Derecha"]);
                                choice = parseInt(getInput("Ingresa el número de la opción que desees:"));
                                if(choice == 1){
                                    alert('¡Bien hecho viajero! Tienes otra decision enfrete de tus ojos')
                                    showScenario("Ahora tienes que decidir. ¿Qué camino agarrar?", ["Izquierda", "Derecha"]);
                                    choice = parseInt(getInput("Ingresa el número de la opción que desees:"));
                                    if(choice == 1){
                                        alert('¡Bien hecho viajero! Tienes la ultima decision enfrete de tus ojos, piensa bien!')
                                        showScenario("Ahora tienes que decidir. ¿Qué camino agarrar?", ["Izquierda", "Derecha"]);
                                        choice = parseInt(getInput("Ingresa el número de la opción que desees:"));
                                        if(choice == 2){
                                            alert(quest.caminoPrincipal.castillo.pasadizo.completado.texto1)
                                            alert(quest.caminoPrincipal.castillo.pasadizo.completado.texto2)
                                            gameOver = true;
                                            break;
                                        }else{
                                            alert(quest.caminoPrincipal.castillo.pasadizo.perdido)
                                            gameOver = true;
                                            break;
                                        }
                                    }else{
                                        alert(quest.caminoPrincipal.castillo.pasadizo.perdido)
                                        gameOver = true;
                                        break;
                                    }
                                }else {
                                    alert(quest.caminoPrincipal.castillo.pasadizo.perdido)
                                    gameOver = true;
                                    break;}
                            break;
                            
                            // Seguir camino// // // // // // // // // // // // // // // //   
                            case 2:
                                showScenario(quest.caminoPrincipal.castillo.seguirExplorando.presentacion, ["Explorar el sótano", "Seguir camino"]);
                                choice = parseInt(getInput("Ingresa el número de la opción que desees:"));
                                switch (choice){
                                    // Explorar sotano// // // // // // // // // //
                                    case 1:
                                        alert(quest.caminoPrincipal.castillo.seguirExplorando.sotano.texto1)
                                        alert(quest.caminoPrincipal.castillo.seguirExplorando.sotano.texto2)
                                        gameOver = true;
                                        break;
                                    // NO Explorar sotano// // // // // // // // // //
                                    case 2:
                                        alert(quest.caminoPrincipal.castillo.seguirExplorando.espejo.texto1)
                                        alert(quest.caminoPrincipal.castillo.seguirExplorando.espejo.texto2)
                                        gameOver = true;
                                        break;    
                                }
                            gameOver = true;
                            break;
                        }
                        gameOver = true;
                        break;
                        // Seguir camino NO explorar castillo // // // // // // // // // // // // // // // //
                    case 2:
                        showScenario(quest.caminoPrincipal.seguirCaminoPrincipal.presentacion, ["Jardin", "Estanque","Ruinas"])
                        choice = parseInt(getInput("Ingresa el número de la opción que desees:"));
                        switch(choice){
                            // Jardin // // // // // // // // // // // // // // // // 
                            case 1:
                                showScenario(quest.caminoPrincipal.seguirCaminoPrincipal.jardin.presentacion, ["Comer", "No comer"])
                                choice = parseInt(getInput("Ingresa el número de la opción que desees:"));
                                switch (choice){
                                    // COMER FRUTA
                                    case 1:
                                        alert(quest.caminoPrincipal.seguirCaminoPrincipal.jardin.fruta.comer.texto1)
                                        alert(quest.caminoPrincipal.seguirCaminoPrincipal.jardin.fruta.comer.texto2)
                                        alert(quest.caminoPrincipal.seguirCaminoPrincipal.jardin.fruta.comer.texto3)
                                        gameOver = true;
                                        break
                                    // NO COMER FRUTA
                                    case 2:
                                        alert(quest.caminoPrincipal.seguirCaminoPrincipal.jardin.fruta.noComer)
                                        gameOver = true;
                                        break
                                }
                                gameOver = true;
                                break;
                            // Estanque // // // // // // // // // // // // // // // // 
                            case 2:
                                alert(quest.caminoPrincipal.seguirCaminoPrincipal.estanque.texto1)
                                alert(quest.caminoPrincipal.seguirCaminoPrincipal.estanque.texto2)
                            gameOver = true;
                            break
                            // Ruinas // // // // // // // // // // // // // // // //
                            case 3:
                                alert(quest.caminoPrincipal.seguirCaminoPrincipal.ruinas.presentacion.texto1)
                                alert(quest.caminoPrincipal.seguirCaminoPrincipal.ruinas.presentacion.texto2)
                                let empate = true;
                                while (empate) {
                                    // Opciones para el juego
                                    let options = ["Piedra", "\n2. Papel", "\n3. Tijera"];
                                    // Mostrar escenario y obtener elección del jugador
                                    piedraPapeloTijera('Con el corazón latiendo con fuerza, aceptas el desafío y te enfrentas al guardián en un duelo de habilidad y astucia.', [options])
                                    let playerChoiceIndex = parseInt(getInput("Ingresa el número de la opción que desees:")) - 1;
                                    let playerChoice = options[playerChoiceIndex];
                                
                                    // Elección aleatoria del guardián
                                    let guardianChoice = options[Math.floor(Math.random() * options.length)];
                                
                                    // Determinar el ganador
                                    let result = determineWinner(playerChoice, guardianChoice);
                                
                                    if (result === "empate") {
                                        alert("El guardián ancestral y tú están en un empate, Ambos hacen sus elecciones con rapidez y precisión, mostrando sus manos al mismo tiempo.");
                                    } else {
                                        alert("Elegiste: " + playerChoice + "\nEl guardián eligió: " + guardianChoice + "\nEl ganador es: " + result);
                                        empate = false; // Terminar el bucle si no hay empate
                                    }
                                    if (result === "jugador"){
                                        alert(quest.caminoPrincipal.seguirCaminoPrincipal.ruinas.ganador.texto1)
                                        alert(quest.caminoPrincipal.seguirCaminoPrincipal.ruinas.ganador.texto2)
                                        gameOver = true
                                        break;}else {
                                            alert(quest.caminoPrincipal.seguirCaminoPrincipal.ruinas.perdedor.texto1)
                                            alert (quest.caminoPrincipal.seguirCaminoPrincipal.ruinas.perdedor.texto2)
                                            gameOver = true
                                            break;
                                        }
                                }
                            gameOver = true;
                            break
                        }
                        gameOver = true;
                        break;
                // default:
                // alert("Por favor, ingresa un número válido.");
                }
                gameOver = true;
                break;
        }
        break;
    }
    
    alert(`¡Gracias por jugar, ${playerName}!`);
}

// Iniciar la aventura cuando se carga la página
adventure();