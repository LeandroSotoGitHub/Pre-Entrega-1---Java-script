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
                                alert('El sendero secreto te conduce al a un laberinto mágico lleno de pasillos retorcidos y trampas encantadas. Lees un cartel, que enuncia lo siguiente: ')
                                alert('Bienvenido al Laberinto Mágico \nEste laberinto es un desafío para los valientes y astutos. Si has llegado hasta aquí, prepárate para poner a prueba tu ingenio. \nLa única salida de este laberinto se encuentra detrás de tres enigmas. Solo aquellos capaces de resolverlos podrán encontrar la salida hacia la libertad.')
                                let enigma1 = prompt('Enigma 1 Enigma de las Runas Encantadas\n"Las runas ancestrales decoran las paredes de este laberinto, cada una con un valor mágico. Presta atención y realiza el siguiente cálculo: suma el valor de las runas que representan el fuego (10), el agua (17) y la tierra (6). ¿Cuál es el resultado que despejará tu camino hacia la libertad?"')
                                if (enigma1 == 33){
                                    alert('Bien! Has pasado la primera prueba.')
                                    let enigma2 = prompt('Enigma 2 Enigma de las Gemas Místicas \nEn el corazón de este laberinto, las gemas místicas brillan con un resplandor único. Observa con atención y calcula: si una gema brilla con una intensidad de 15, otra con 23 y otra con 8, ¿cuál es el número mágico que revelará el camino hacia la salida?"')
                                    if (enigma2 == 46){
                                        alert('Bien! Has pasado la segunda prueba.')
                                        let enigma3 = prompt('ENIGMA 3 Enigma de las Estrellas Danzantes \n"En el cielo nocturno sobre este laberinto, las estrellas danzan al ritmo de la magia. Observa y calcula: si una estrella brilla con un resplandor de 28, otra con 14 y otra con 19, ¿cuál es el número celestial que te guiará hacia la salida de este misterioso laberinto?"')
                                        if (enigma3 == 61){
                                            alert("Felicidades, viajero astuto. Con ingenio y determinación, has superado los desafíos del Laberinto Mágico. Las puertas se abren ante ti, revelando el camino hacia la libertad. Avanza con valentía y recuerda siempre el poder de tu mente. Que tu viaje continúe con éxito.")
                                            alert('Has terminado tu aventura')
                                                gameOver = true;
                                                break;
                                        }else {
                                            alert("Valiente aventurero, parece que los enigmas del Laberinto Mágico han superado tu destreza. Te ves atrapado sin poder salir")
                                            gameOver = true;
                                            break;
                                        }
                                    } else{
                                        alert("Valiente aventurero, parece que los enigmas del Laberinto Mágico han superado tu destreza. Te ves atrapado sin poder salir")
                                        gameOver = true;
                                        break;
                                    }
                                } else{
                                    alert("Valiente aventurero, parece que los enigmas del Laberinto Mágico han superado tu destreza. Te ves atrapado sin poder salir")
                                    gameOver = true;
                                    break;
                                }
                            // Seguir camino Y MALECHORES // // // // // // // // // // // // // // // // // // // 
                            case 2: 
                                alert('Decidiste seguir, el camino secreto era demasiado tenebroso para ti. Pero te pierdes en el bosque, se hace de noche y unos bandidos reconocen que no eres de la zona.')
                                alert('Los bandidos se acercan cautelosamente, te miran con curiosidad y uno de ellos, el más parlanchín, rompe el tenso silencio. \n "¿Qué tenemos aquí?", dice con una sonrisa ladina. "Un forastero perdido en nuestros bosques. No pareces ser de estos lares, eso está claro"')
                                alert('Los otros bandidos asienten en silencio, observándote con atención.')
                                alert("'Pero no te preocupes', continúa el parlanchín. 'No somos tan malos como dicen por ahí. De hecho, podríamos ayudarte a encontrar tu camino de regreso... pero, por supuesto, todo tiene un precio'.")
                                alert("'¿Qué te parece si hacemos un pequeño trato?', propone el líder de los bandidos. 'Nosotros te proporcionamos un guía para llevarte de vuelta a la civilización, y a cambio tú nos ayudas con una pequeña tarea. Nada ilegal ni peligroso, te lo prometemos. ¿Qué dices? ¿Aceptas nuestro trato?'")
                                showScenario("Debes tomar una decision:", ["Aceptar trato", "Rechazar trato"]);
                                choice = parseInt(getInput("Ingresa el número de la opción que desees:"));
                                switch (choice){
                                    case 1:
                                        alert("'Verás, amigo', comienza, 'tenemos una pequeña disputa con un grupo de saqueadores que se han estado aprovechando de los viajeros en estos bosques. Estos no son como nosotros, son verdaderos maleantes que no tienen ningún respeto por nadie más que por sí mismos'. \nTodo lo que tendrás que hacer es ayudarnos a enfrentar a estos saqueadores y recuperar lo que nos han quitado")
                                        showScenario("Debes tomar una decision:", ["Aceptar trato", "Rechazar trato"]);
                                        choice = parseInt(getInput("Ingresa el número de la opción que desees:"));
                                        switch (choice){
                                            case 1: 
                                            alert("'¡Excelente elección, amigo!', exclama el líder de los bandidos. 'No te arrepentirás. \nSigues a los bandidos a través del denso bosque, confiando en que has tomado la decisión correcta. A medida que avanzan, te preparas mentalmente para la tarea que te espera.\n La historia de nuestro viajero termina aquí. Nunca sabremos que paso realmente.")
                                            gameOver = true;
                                            break;

                                            case 2:
                                            alert("'Como desees', dice el líder de los bandidos con una sonrisa forzada. Y se alejan sin que puedas ver para donde se dirigen \nEl sonido de ramas crujientes bajo tus pies te recuerda que estás completamente solo en este peligroso bosque. La noche pasa y nunca logras salir.")
                                            gameOver = true;
                                            break;
                                        }
                                        gameOver = true;
                                        break;
                                        case 2:
                                            alert("'Como desees', dice el líder de los bandidos con una sonrisa forzada. Y se alejan sin que puedas ver para donde se dirigen \nEl sonido de ramas crujientes bajo tus pies te recuerda que estás completamente solo en este peligroso bosque. La noche pasa y nunca logras salir.")
                                            gameOver = true;
                                            break;
                                }
                                gameOver = true;
                                break;
                        }
                        gameOver = true;
                        break;
/////////////////////////////////////////////// OPRCION 2 BUSCAR ANTIDOTO//////////////////////////////////////
                    case 2:
                        alert("Decides que buscar un antídoto es la manera más inteligente de obtener el tesoro.\n A lo lejos, divisas tres figuras en el bosque: un alquimista ocupado en sus experimentos, una criatura amistosa que parece dispuesta a ayudar y una tribu local que habita en la zona. ¿A quién decides acercarte en busca de ayuda?")
                        showScenario("Debes tomar una decision:", ["Alquimista", "Criatura amistosa", "Tribu local"]);
                        choice = parseInt(getInput("Ingresa el número de la opción que desees:"));
                        switch (choice){
                            // ALQUIMISTA// // // // // // // // // // // // // // // // // // // // // // // // // 
                            case 1:
                                alert("Decides acercarte al alquimista en busca de ayuda. Con pasos cautelosos, te abres paso entre los árboles hasta llegar a su morada, donde lo encuentras inmerso en sus experimentos alquímicos. Con una sonrisa amistosa, le cuentas sobre el tesoro escondido en el bosque, buscando su sabiduría o algún consejo. \nEl alquimista escucha atentamente tu relato, pero sus ojos brillan con avaricia al enterarse del tesoro. Sin perder tiempo, se levanta de su mesa de trabajo y te aturde con un gas soporífero. Cuando recuperas el conocimiento, te encuentras solo en el bosque, el tesoro y el alquimista han desaparecido sin dejar rastro. \nCon el corazón lleno de tristeza y desilusión, regresas a tu hogar con las manos vacías. La aventura que comenzó con esperanza y emoción ha terminado en decepción y pesar")
                                gameOver = true;
                                break;
                            // CRIATURA AMISTOSA// // // // // // // // // // // // // // // // // // // // 
                            case 2:
                                showScenario("Decides acercarte a la criatura amistosa en busca de ayuda. Te aproximas con cautela, pero la criatura te recibe con una sonrisa amable y un gesto de bienvenida. \nLa criatura te guía con destreza a través del bosque, sorteando hábilmente las trampas naturales y evitando las emboscadas de las serpientes venenosas \nFinalmente, llegas al lugar donde reposa el cofre del tesoro, rodeado por las serpientes. La criatura amistosa no vacila y utiliza su habilidad natural para calmar a las serpientes, permitiéndote abrir el cofre y reclamar tu premio. \nCon el tesoro en tu poder, la criatura te mira con ojos suplicantes, como si te estuviera pidiendo quedarse contigo. Tienes la opción de aceptar su compañía y llevarla contigo como mascota, o dejarla en el bosque para que continúe su vida salvaje.", ["Adoptar", "Dejar"]);
                                choice = parseInt(getInput("Ingresa el número de la opción que desees:"));
                                switch (choice){
                                    case 1:
                                        let nombreMascota = prompt("Que nombre deseas ponerle?")
                                        alert(`Conmovido por la lealtad y la amabilidad de ${nombreMascota}, decides aceptar su compañía y llevarla contigo como mascota. ${nombreMascota} te mira con alegría y gratitud, y te sigue con entusiasmo mientras te adentras en el bosque. \nAl llegar a casa, celebras tu victoria con ${nombreMascota} a tu lado, agradecido por haber encontrado no solo un tesoro, sino también a un amigo verdadero y leal. Juntos, enfrentarán nuevas aventuras y desafíos`)
                                        gameOver = true;
                                        break;
                                    case 2:
                                        alert("Con gratitud hacia la criatura por su ayuda, decides dejarla en el bosque para que continúe su vida salvaje. La criatura te mira con tristeza mientras te alejas, pero comprende tu decisión y se despide con un gesto amistoso.\nRegresas a casa con el tesoro en tu poder, reflexionando sobre la aventura que has vivido y la decisión que has tomado. Aunque te sientes un poco triste por dejar atrás a tu nueva amiga, sabes que es lo mejor para ella, permitiéndole seguir su vida en libertad.")
                                        gameOver = true;
                                        break;
                                }
                            // TRIBU LOCAL// // // // // // // // // // // // // // // // // // // 
                            case 3:
                                showScenario("Te encuentras con una tribu local que habita en el bosque. Al explicarles tu situación, la tribu muestra compasión y solidaridad. Te ofrecen su ayuda para llegar al tesoro de manera segura.\nJuntos, tú y la tribu local, trazan un plan para sortear las serpientes venenosas y llegar al tesoro. Con la sabiduría y la habilidad de la tribu, logras sortear los peligros del bosque y alcanzar el tesoro sano y salvo.\nAgradecido por la ayuda de la tribu, decides compartir el tesoro que has encontrado en el bosque con ellos como muestra de gratitud. La tribu te acoge como uno de los suyos y te ofrecen un lugar permanente en su comunidad.", ["Aceptar", "Rechazar"]);
                                choice = parseInt(getInput("Ingresa el número de la opción que desees:"));
                                switch (choice){
                                    case 1:
                                        alert('Con el paso del tiempo, te involucras cada vez más en la vida de la tribu local. Impulsado por un profundo sentido de gratitud y conexión con la comunidad, decides dedicar tu vida al servicio de los demás.\nGuiado por la sabiduría y las enseñanzas de la tribu, comienzas un viaje espiritual que te lleva a convertirte en sacerdote.')
                                        gameOver = true;
                                        break;
                                    case 2:
                                        alert('Agradeces y sigues camino. Grandes aventuras te esperan en tu ciudad natal')
                                        gameOver = true;
                                        break;
                                }
                        }
                        gameOver = true;
                        break;
                    case 3:
//////////////////////////////////////// Opción 3 ANALIZAR COMPORTAMIENTO //////////////////////////////////////////
                        alert("“Al elegir estudiar las serpientes observas su comportamiento a la distancia, con paciencia y astucia identificas movimientos y sonidos que parecen indicar cuando las serpientes están alertas.\nCon esa información, te acercas lentamente a ellas. Sin embargo, al adentrarte en su guarida, tus movimientos inadvertidos despiertan a un guardián místico del bosque que las vigila. \n El guardián, con una figura imponente y misteriosa, te mira con intensidad y sabiduría. En ese mismo instante te acerca un cofre que contiene un antídoto que necesitas para llegar al tesoro, dicho antídoto te dotará de talento para llegar al tesoro sin que las serpientes se perturben. \nCon determinación examinas las llaves para elegir cuál será la indicada para poder emprender el camino hacia el tesoro.");
                        // llave1
                        alert('Llave de la Serpiente Dorada: \nEsta llave tiene un brillo dorado y está adornada con símbolos serpentinos entrelazados. Al sostenerla, sientes una cálida energía que parece emanar de la propia naturaleza.')
                        // llave2
                        alert('Llave de la Pluma de Águila: \nEsta llave es más pequeña y ligera que las otras, con un diseño elegante y plateado. Está decorada con una pluma de águila en su extremo, simbolizando la libertad y la visión aguda.')
                        // llave3
                        alert('Llave del Ojo de la Luna: \nEsta llave tiene un aspecto misterioso y enigmático, con un brillo plateado y un diseño lunar grabado en su superficie. La llave parece estar imbuida con el poder de la noche y la guía de la luna en la oscuridad.')
                        showScenario("Debes tomar una decision:", ["Llave de la Serpiente Dorada", "Llave de la Pluma de Águila", "Llave del Ojo de la Luna"]);
                        choice = parseInt(getInput("Ingresa el número de la opción que desees:"));
                        switch (choice){
                            // llave 1 - incorrecta
                            case 1:
                                alert('Al girar la llave elegida, una ráfaga de energía emerge, dispersando las serpientes y sacudiendo el bosque. Te das cuenta de tu error y aceptas las consecuencias')
                            gameOver = true;
                            break;
                            // llave 2 - incorrecta
                            case 2:
                                alert('Al girar la llave elegida, una ráfaga de energía emerge, dispersando las serpientes y sacudiendo el bosque. Te das cuenta de tu error y aceptas las consecuencias')
                                gameOver = true;
                                break;
                                case 3:
                            // llave 3 - CORRECTA
                                alert('El guardián místico asiente con aprobación. Te indica el camino hacia el cofre que contiene el antídoto. Las serpientes parecen calmarse a tu paso. Al abrir el cofre con la llave elegida, encuentras el antídoto.')
                                alert('Dentro del cofre, encuentras una mezcla de riquezas materiales, artefactos mágicos y conocimientos antiguos. Monedas de oro brillan a la luz del sol, junto a joyas preciosas y objetos de valor incalculable. También descubres artefactos mágicos antiguos, imbuidos con poderes místicos y habilidades únicas que despiertan tu curiosidad. Además, entre los tesoros, encuentras antiguos manuscritos y pergaminos que contienen conocimientos perdidos y secretos olvidados, revelando la historia y los misterios del bosque.\nCon el tesoro en tu poder, te preparas para regresar a casa con una riqueza más allá de tus sueños más salvajes y un conocimiento que podría cambiar el curso de la historia.')
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
                showScenario("Avanzas por el camino principal y tu mirada se encuentra con una vista sorprendente: un imponente castillo en ruinas emerge en la distancia, sus torres desmoronadas se alzan contra el cielo. ¿Qué decides hacer?", ["Explorar el castillo", "Seguir el camino"]);
                choice = parseInt(getInput("Ingresa el número de la opción que desees:"));
                switch (choice) {
                    // Explorar castillo// // // // // // // // // // // // // // // // 
                    case 1:
                        alert('Con determinación, decides adentrarte en las sombras del castillo en ruinas, a medida que cruzas el umbral, te encuentras inmerso en un mundo de pasado y misterio, donde cada rincón parece susurrar secretos olvidados.')
                        alert('Tus ojos se detienen en una sección de la pared que parece más antigua y desgastada que el resto. Con cuidado, pasas tus manos sobre la superficie, sintiendo las grietas y las irregularidades en la piedra.\nCon un gesto decidido, presionas el relieve con fuerza, y un suave clic resonando en la sala mientras la piedra cede ante tu toque. Una sección de la pared se desliza silenciosamente hacia un lado, revelando un pasaje secreto que se adentra en la oscuridad.')
                        showScenario("Debes tomar una decision:", ["Explorar el pasadizo secreto", "Seguir el camino"]);
                        choice = parseInt(getInput("Ingresa el número de la opción que desees:"));
                        switch (choice) {
                            // Explorar pasadizo// // // // // // // // // // // // // // // //
                            case 1:
                                alert('Con determinación, decides adentrarte en el pasadizo secreto, tus pasos resonando en la piedra mientras te adentras en la oscuridad del castillo en ruinas. A medida que avanzas, el pasadizo se ensancha y se bifurca en múltiples direcciones, creando un laberinto de túneles que se extiende ante ti como un entramado de sombras y misterios. Cada giro y cada esquina oculta nuevos peligros y secretos por descubrir.')
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
                                            alert('¡Bien hecho viajero! tus elecciones te llevan por el camino correcto, y pronto encuentras la salida del laberinto. Llegas al corazón del castillo, donde descubres la clave para deshacer la maldición que lo ha mantenido en ruinas durante siglos.')
                                            alert('Con la maldición levantada, el castillo recupera su antigua gloria y belleza.Como reconocimiento por tu prudencia y habilidad, los antiguos guardianes del castillo te otorgan un tesoro invaluable y la gratitud eterna de su gente. Con tu misión cumplida, regresas a casa como un héroe, con la cabeza en alto y el corazón lleno de satisfacción.')
                                            gameOver = true;
                                            break;
                                        }else{
                                            alert('Te encuentras perdido en un laberinto de túneles oscuros y pasadizos confusos. La sensación de desesperación crece a medida que te das cuenta de que estás atrapado en la infinidad del laberinto, con ninguna señal de salida a la vista. Te lamentas por no haber tomado decisiones más cuidadosas y te preparas para enfrentar un futuro incierto en las profundidades del castillo en ruinas.')
                                            gameOver = true;
                                            break;
                                        }
                                    }else{
                                        alert('Te encuentras perdido en un laberinto de túneles oscuros y pasadizos confusos. La sensación de desesperación crece a medida que te das cuenta de que estás atrapado en la infinidad del laberinto, con ninguna señal de salida a la vista. Te lamentas por no haber tomado decisiones más cuidadosas y te preparas para enfrentar un futuro incierto en las profundidades del castillo en ruinas.')
                                        gameOver = true;
                                        break;
                                    }
                                }else {
                                    alert('Te encuentras perdido en un laberinto de túneles oscuros y pasadizos confusos. La sensación de desesperación crece a medida que te das cuenta de que estás atrapado en la infinidad del laberinto, con ninguna señal de salida a la vista. Te lamentas por no haber tomado decisiones más cuidadosas y te preparas para enfrentar un futuro incierto en las profundidades del castillo en ruinas.')
                                    gameOver = true;
                                    break;}
                            break;
                            
                            // Seguir camino// // // // // // // // // // // // // // // //   
                            case 2:
                                alert('Decides que el pasadizo secreto no es la mejor opción para seguir explorando y prefieres continuar investigando el castillo. De repente, te topas con una escalera que desciende hacia un sótano oscuro y misterioso.')
                                showScenario("Ahora tienes que decidir: ", ["Explorar el sótano", "Seguir camino"]);
                                choice = parseInt(getInput("Ingresa el número de la opción que desees:"));
                                switch (choice){
                                    // Explorar sotano// // // // // // // // // //
                                    case 1:
                                        alert('Decides que el sótano es demasiado tentador como para ignorarlo, y con una mezcla de emoción y precaución, desciendes por la escalera hacia la oscuridad. Al llegar al fondo, te encuentras en una habitación lúgubre y claustrofóbica, donde los rayos de luz apenas penetran.')
                                        alert('De repente, una vez dentro, la puerta detrás de ti se cierra con un estruendo sordo, dejándote atrapado en la oscuridad del sótano. Intentas abrirla desesperadamente, pero está sellada con magia oscura que impide cualquier escape. Ahi te das cuenta que tu aventura ha llegado a su fin')
                                        gameOver = true;
                                        break;
                                    // NO Explorar sotano// // // // // // // // // //
                                    case 2:
                                        alert('Decides que el sótano no es un lugar al que quieres aventurarte y decides seguir explorando otras áreas del castillo. Mientras recorres una habitación polvorienta, tu mirada se posa en un espejo antiguo y misterioso que se encuentra en una esquina. Te acercas para inspeccionarlo y te encuentras cautivado por tu propio reflejo.')
                                        alert('Sin embargo, a medida que observas el espejo, te das cuenta de que tu imagen comienza a distorsionarse y a cambiar, reflejando un mundo diferente y desconcertante. Antes de que puedas reaccionar, te sientes atraído hacia el espejo y te encuentras atrapado en su reflejo, incapaz de escapar.')
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
                        showScenario('Decides que no quieres arriesgarte a entrar en el castillo en ruinas y prefieres explorar los terrenos circundantes. Te aventuras por los alrededores del castillo, descubriendo antiguos jardines cubiertos de maleza, estanques tranquilos y ruinas adicionales que cuentan historias olvidadas', ["Jardin", "Estanque","Ruinas"])
                        choice = parseInt(getInput("Ingresa el número de la opción que desees:"));
                        switch(choice){
                            // Jardin // // // // // // // // // // // // // // // // 
                            case 1:
                                showScenario('Mientras exploras los exuberantes jardines, te encuentras rodeado de una variedad de flora exótica y hermosa que ha crecido salvajemente entre las ruinas del castillo. Entre las ramas retorcidas y las flores brillantes, notas un arbusto cargado de frutos coloridos y apetitosos. Uno de los frutos llama especialmente tu atención: es grande, jugoso y emana un aroma embriagador que te hace agua la boca. Te encuentras frente a una elección tentadora.', ["Comer", "No comer"])
                                choice = parseInt(getInput("Ingresa el número de la opción que desees:"));
                                switch (choice){
                                    // COMER FRUTA
                                    case 1:
                                        alert('Con una mezcla de curiosidad y hambre, decides arriesgarte y probar el fruto exótico que has encontrado en los jardines del castillo.')
                                        alert('Sin embargo, a medida que saboreas el dulce néctar de la fruta, una sensación extraña comienza a apoderarse de ti. Tu cabeza se vuelve mareada y confusa, y las imágenes de tu pasado comienzan a desvanecerse en la neblina de la memoria. No importa cuánto te esfuerces, no puedes recordar quién eres, de dónde vienes o cuál era tu misión original en este lugar misterioso.')
                                        alert('Perdido en un mar de olvido, te encuentras atrapado en un ciclo interminable de confusión y desorientación. Sin un propósito claro o recuerdos para guiarte, te das cuenta de que tu aventura ha llegado a su fin.')
                                        gameOver = true;
                                        break
                                    // NO COMER FRUTA
                                    case 2:
                                        alert('Aunque tu decisión de no comer el fruto te deja con el estómago vacío por el momento, te sientes tranquilo sabiendo que has evitado un posible peligro desconocido. Sigues explorando con cautela, confiando en tu instinto para guiarte a través de los misteriosos jardines del castillo en ruinas. \nPero no encuentras nada, y te vuelves al pueblo con las manos vacías.')
                                        gameOver = true;
                                        break
                                }
                                gameOver = true;
                                break;
                            // Estanque // // // // // // // // // // // // // // // // 
                            case 2:
                                alert('Mientras descansas en la orilla del estanque, te sientes cada vez más atraído por la serenidad del agua y la belleza de tu propio reflejo que baila en la superficie. Un impulso irresistible te impulsa a sumergirte en el estanque, convencido de que algo especial te espera en sus profundidades')
                                alert('Sin embargo, tan pronto como te sumerges, sientes un cambio repentino en la atmósfera a tu alrededor. El agua se vuelve fría como el hielo y las sombras del fondo del estanque se agitan, como si ocultaran algo oscuro y peligroso. Te das cuenta demasiado tarde de que has caído en una trampa encantada, y ahora estás atrapado en el abrazo gélido del estanque maldito.')
                            gameOver = true;
                            break
                            // Ruinas // // // // // // // // // // // // // // // //
                            case 3:
                                alert('Mientras exploras las ruinas adicionales, te adentras en una sala olvidada, llena de reliquias antiguas y artefactos misteriosos. Entre los escombros y la polvareda, encuentras un pergamino antiguo cuidadosamente enrollado, con inscripciones en una lengua antigua y desconocida. A medida que lo desenrollas, las palabras cobran vida ante tus ojos, revelando los secretos de la maldición que ha mantenido al castillo en ruinas durante siglos.')
                                alert('Justo cuando terminas de leer el pergamino, una figura misteriosa emerge de las sombras, sosteniendo una piedra en la mano. Esta figura, una especie de guardián ancestral del castillo, te reta a un juego de "piedra, papel o tijera" para demostrar tu valía y obtener el pergamino.')
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
                                        alert('Impresionado por tu determinación y habilidad, el guardián te entrega el pergamino con un gesto de respeto. Ahora, armado con el conocimiento necesario para deshacer la maldición. Con la maldición levantada, el castillo recupera su antigua gloria y belleza.')
                                        alert('Con la maldición levantada, el castillo recupera su antigua gloria y belleza. Como reconocimiento por tu prudencia y habilidad, los antiguos guardianes del castillo te otorgan un tesoro invaluable y la gratitud eterna de su gente. Con tu misión cumplida, regresas a casa como un héroe, con la cabeza en alto y el corazón lleno de satisfacción.')
                                        gameOver = true
                                        break;}else {
                                            alert('El guardián ancestral se mantiene firme frente a ti, con una expresión imperturbable en su rostro tallado en piedra. Con un movimiento rápido, hace su elección, y te muestra su mano. Te das cuenta de que has sido superado, y una sensación de decepción se apodera de ti mientras observas impotente cómo el guardián sostiene la piedra, superando tu elección de tijera.')
                                            alert ('Con un gesto de pesar, el guardián niega con la cabeza y retira el pergamino de tu alcance. Te das cuenta de que has perdido la oportunidad de desvelar los secretos que guarda el antiguo documento y deshacer la maldición que ha afligido al castillo durante tanto tiempo. Con un suspiro resignado, te retiras de la sala y vuelves a tu pueblo, derrotado. ')
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