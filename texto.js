let quest = {
    bosque:{
        huir:{
            adentrate:{
                laberinto:'El sendero secreto te conduce al a un laberinto mágico lleno de pasillos retorcidos y trampas encantadas. Lees un cartel, que enuncia lo siguiente: ',
                laberinto2:'Bienvenido al Laberinto Mágico \nEste laberinto es un desafío para los valientes y astutos. Si has llegado hasta aquí, prepárate para poner a prueba tu ingenio. \nLa única salida de este laberinto se encuentra detrás de tres enigmas. Solo aquellos capaces de resolverlos podrán encontrar la salida hacia la libertad.',
                enigmaTexto1:'Enigma 1 Enigma de las Runas Encantadas\n"Las runas ancestrales decoran las paredes de este laberinto, cada una con un valor mágico. Presta atención y realiza el siguiente cálculo: suma el valor de las runas que representan el fuego (10), el agua (17) y la tierra (6). ¿Cuál es el resultado que despejará tu camino hacia la libertad?"',
                enigmaTexto2:'Enigma 2 Enigma de las Gemas Místicas \nEn el corazón de este laberinto, las gemas místicas brillan con un resplandor único. Observa con atención y calcula: si una gema brilla con una intensidad de 15, otra con 23 y otra con 8, ¿cuál es el número mágico que revelará el camino hacia la salida?"',
                enigmaTexto3:'ENIGMA 3 Enigma de las Estrellas Danzantes \n"En el cielo nocturno sobre este laberinto, las estrellas danzan al ritmo de la magia. Observa y calcula: si una estrella brilla con un resplandor de 28, otra con 14 y otra con 19, ¿cuál es el número celestial que te guiará hacia la salida de este misterioso laberinto?"',
                enigmaGanador: "Felicidades, viajero astuto. Con ingenio y determinación, has superado los desafíos del Laberinto Mágico. Las puertas se abren ante ti, revelando el camino hacia la libertad. Avanza con valentía y recuerda siempre el poder de tu mente. Que tu viaje continúe con éxito.",
                enigmaPerdedor: "Valiente aventurero, parece que los enigmas del Laberinto Mágico han superado tu destreza. Te ves atrapado sin poder salir",
            },
            seguir: {
                bandidos1: 'Decidiste seguir, el camino secreto era demasiado tenebroso para ti. Pero te pierdes en el bosque, se hace de noche y unos bandidos reconocen que no eres de la zona.',
                bandidos2: 'Los bandidos se acercan cautelosamente, te miran con curiosidad y uno de ellos, el más parlanchín, rompe el tenso silencio. \n "¿Qué tenemos aquí?", dice con una sonrisa ladina. "Un forastero perdido en nuestros bosques. No pareces ser de estos lares, eso está claro"',
                bandidos3: 'Los otros bandidos asienten en silencio, observándote con atención.',
                bandidos4: "'Pero no te preocupes', continúa el parlanchín. 'No somos tan malos como dicen por ahí. De hecho, podríamos ayudarte a encontrar tu camino de regreso... pero, por supuesto, todo tiene un precio'.",
                bandidos5: "'¿Qué te parece si hacemos un pequeño trato?', propone el líder de los bandidos. 'Nosotros te proporcionamos un guía para llevarte de vuelta a la civilización, y a cambio tú nos ayudas con una pequeña tarea. Nada ilegal ni peligroso, te lo prometemos. ¿Qué dices? ¿Aceptas nuestro trato?'",
                    bandidosTrato:{
                        si: "'Verás, amigo', comienza, 'tenemos una pequeña disputa con un grupo de saqueadores que se han estado aprovechando de los viajeros en estos bosques. Estos no son como nosotros, son verdaderos maleantes que no tienen ningún respeto por nadie más que por sí mismos'. \nTodo lo que tendrás que hacer es ayudarnos a enfrentar a estos saqueadores y recuperar lo que nos han quitado",
                        si2:"'¡Excelente elección, amigo!', exclama el líder de los bandidos. 'No te arrepentirás. \nSigues a los bandidos a través del denso bosque, confiando en que has tomado la decisión correcta. A medida que avanzan, te preparas mentalmente para la tarea que te espera.\n La historia de nuestro viajero termina aquí. Nunca sabremos que paso realmente.",
                        no: "'Como desees', dice el líder de los bandidos con una sonrisa forzada. Y se alejan sin que puedas ver para donde se dirigen \nEl sonido de ramas crujientes bajo tus pies te recuerda que estás completamente solo en este peligroso bosque. La noche pasa y nunca logras salir.",
                    },
            },
        },
        antidoto:{
            presentacion: "Decides que buscar un antídoto es la manera más inteligente de obtener el tesoro.\n A lo lejos, divisas tres figuras en el bosque: un alquimista ocupado en sus experimentos, una criatura amistosa que parece dispuesta a ayudar y una tribu local que habita en la zona. ¿A quién decides acercarte en busca de ayuda?",
            alquimista: "Decides acercarte al alquimista en busca de ayuda. Con pasos cautelosos, te abres paso entre los árboles hasta llegar a su morada, donde lo encuentras inmerso en sus experimentos alquímicos. Con una sonrisa amistosa, le cuentas sobre el tesoro escondido en el bosque, buscando su sabiduría o algún consejo. \nEl alquimista escucha atentamente tu relato, pero sus ojos brillan con avaricia al enterarse del tesoro. Sin perder tiempo, se levanta de su mesa de trabajo y te aturde con un gas soporífero. Cuando recuperas el conocimiento, te encuentras solo en el bosque, el tesoro y el alquimista han desaparecido sin dejar rastro. \nCon el corazón lleno de tristeza y desilusión, regresas a tu hogar con las manos vacías. La aventura que comenzó con esperanza y emoción ha terminado en decepción y pesar",
            criatura:{
                presentacion:"Decides acercarte a la criatura amistosa en busca de ayuda. Te aproximas con cautela, pero la criatura te recibe con una sonrisa amable y un gesto de bienvenida. \nLa criatura te guía con destreza a través del bosque, sorteando hábilmente las trampas naturales y evitando las emboscadas de las serpientes venenosas \nFinalmente, llegas al lugar donde reposa el cofre del tesoro, rodeado por las serpientes. La criatura amistosa no vacila y utiliza su habilidad natural para calmar a las serpientes, permitiéndote abrir el cofre y reclamar tu premio. \nCon el tesoro en tu poder, la criatura te mira con ojos suplicantes, como si te estuviera pidiendo quedarse contigo. Tienes la opción de aceptar su compañía y llevarla contigo como mascota, o dejarla en el bosque para que continúe su vida salvaje.",
                dejar:"Con gratitud hacia la criatura por su ayuda, decides dejarla en el bosque para que continúe su vida salvaje. La criatura te mira con tristeza mientras te alejas, pero comprende tu decisión y se despide con un gesto amistoso.\nRegresas a casa con el tesoro en tu poder, reflexionando sobre la aventura que has vivido y la decisión que has tomado. Aunque te sientes un poco triste por dejar atrás a tu nueva amiga, sabes que es lo mejor para ella, permitiéndole seguir su vida en libertad.",
            },
            tribu:{
                presentacion:"Te encuentras con una tribu local que habita en el bosque. Al explicarles tu situación, la tribu muestra compasión y solidaridad. Te ofrecen su ayuda para llegar al tesoro de manera segura.\nJuntos, tú y la tribu local, trazan un plan para sortear las serpientes venenosas y llegar al tesoro. Con la sabiduría y la habilidad de la tribu, logras sortear los peligros del bosque y alcanzar el tesoro sano y salvo.\nAgradecido por la ayuda de la tribu, decides compartir el tesoro que has encontrado en el bosque con ellos como muestra de gratitud. La tribu te acoge como uno de los suyos y te ofrecen un lugar permanente en su comunidad.",
                aceptar:'Con el paso del tiempo, te involucras cada vez más en la vida de la tribu local. Impulsado por un profundo sentido de gratitud y conexión con la comunidad, decides dedicar tu vida al servicio de los demás.\nGuiado por la sabiduría y las enseñanzas de la tribu, comienzas un viaje espiritual que te lleva a convertirte en sacerdote.',
                rechazar:'Agradeces y sigues camino. Grandes aventuras te esperan en tu ciudad natal',
            },
        },
        comportamiento:{
            presentacion:"Al elegir estudiar las serpientes observas su comportamiento a la distancia, con paciencia y astucia identificas movimientos y sonidos que parecen indicar cuando las serpientes están alertas.\nCon esa información, te acercas lentamente a ellas. Sin embargo, al adentrarte en su guarida, tus movimientos inadvertidos despiertan a un guardián místico del bosque que las vigila. \n El guardián, con una figura imponente y misteriosa, te mira con intensidad y sabiduría. En ese mismo instante te acerca un cofre que contiene un antídoto que necesitas para llegar al tesoro, dicho antídoto te dotará de talento para llegar al tesoro sin que las serpientes se perturben. \nCon determinación examinas las llaves para elegir cuál será la indicada para poder emprender el camino hacia el tesoro.",
            llaves:{
                llave1:'Llave de la Serpiente Dorada: \nEsta llave tiene un brillo dorado y está adornada con símbolos serpentinos entrelazados. Al sostenerla, sientes una cálida energía que parece emanar de la propia naturaleza.',
                llave2:'Llave de la Pluma de Águila: \nEsta llave es más pequeña y ligera que las otras, con un diseño elegante y plateado. Está decorada con una pluma de águila en su extremo, simbolizando la libertad y la visión aguda.',
                llave3:'Llave del Ojo de la Luna: \nEsta llave tiene un aspecto misterioso y enigmático, con un brillo plateado y un diseño lunar grabado en su superficie. La llave parece estar imbuida con el poder de la noche y la guía de la luna en la oscuridad.',
                correcta: {
                    texto1:'El guardián místico asiente con aprobación. Te indica el camino hacia el cofre que contiene el antídoto. Las serpientes parecen calmarse a tu paso. Al abrir el cofre con la llave elegida, encuentras el antídoto.',
                    texto2:'Dentro del cofre, encuentras una mezcla de riquezas materiales, artefactos mágicos y conocimientos antiguos. Monedas de oro brillan a la luz del sol, junto a joyas preciosas y objetos de valor incalculable. También descubres artefactos mágicos antiguos, imbuidos con poderes místicos y habilidades únicas que despiertan tu curiosidad. Además, entre los tesoros, encuentras antiguos manuscritos y pergaminos que contienen conocimientos perdidos y secretos olvidados, revelando la historia y los misterios del bosque.\nCon el tesoro en tu poder, te preparas para regresar a casa con una riqueza más allá de tus sueños más salvajes y un conocimiento que podría cambiar el curso de la historia.',
                },
                incorrecta:'Al girar la llave elegida, una ráfaga de energía emerge, dispersando las serpientes y sacudiendo el bosque. Te das cuenta de tu error y aceptas las consecuencias',
            },
        },
    },
    caminoPrincipal:{
        presentacion:"Avanzas por el camino principal y tu mirada se encuentra con una vista sorprendente: un imponente castillo en ruinas emerge en la distancia, sus torres desmoronadas se alzan contra el cielo. ¿Qué decides hacer?",
        castillo:{
            presentacion:{
                texto1:'Con determinación, decides adentrarte en las sombras del castillo en ruinas, a medida que cruzas el umbral, te encuentras inmerso en un mundo de pasado y misterio, donde cada rincón parece susurrar secretos olvidados.',
                texto2:'Tus ojos se detienen en una sección de la pared que parece más antigua y desgastada que el resto. Con cuidado, pasas tus manos sobre la superficie, sintiendo las grietas y las irregularidades en la piedra.\nCon un gesto decidido, presionas el relieve con fuerza, y un suave clic resonando en la sala mientras la piedra cede ante tu toque. Una sección de la pared se desliza silenciosamente hacia un lado, revelando un pasaje secreto que se adentra en la oscuridad.',
            },
            pasadizo:{
                presentacion: 'Con determinación, decides adentrarte en el pasadizo secreto, tus pasos resonando en la piedra mientras te adentras en la oscuridad del castillo en ruinas. A medida que avanzas, el pasadizo se ensancha y se bifurca en múltiples direcciones, creando un laberinto de túneles que se extiende ante ti como un entramado de sombras y misterios. Cada giro y cada esquina oculta nuevos peligros y secretos por descubrir.',
                completado:{
                    texto1:'¡Bien hecho viajero! tus elecciones te llevan por el camino correcto, y pronto encuentras la salida del laberinto. Llegas al corazón del castillo, donde descubres la clave para deshacer la maldición que lo ha mantenido en ruinas durante siglos.',
                    texto2:'Con la maldición levantada, el castillo recupera su antigua gloria y belleza.Como reconocimiento por tu prudencia y habilidad, los antiguos guardianes del castillo te otorgan un tesoro invaluable y la gratitud eterna de su gente. Con tu misión cumplida, regresas a casa como un héroe, con la cabeza en alto y el corazón lleno de satisfacción.',
                },
                perdido:'Te encuentras perdido en un laberinto de túneles oscuros y pasadizos confusos. La sensación de desesperación crece a medida que te das cuenta de que estás atrapado en la infinidad del laberinto, con ninguna señal de salida a la vista. Te lamentas por no haber tomado decisiones más cuidadosas y te preparas para enfrentar un futuro incierto en las profundidades del castillo en ruinas.',
            },
            seguirExplorando:{
                presentacion:'Decides que el pasadizo secreto no es la mejor opción para seguir explorando y prefieres continuar investigando el castillo. De repente, te topas con una escalera que desciende hacia un sótano oscuro y misterioso.',
                sotano:{
                    texto1:'Decides que el sótano es demasiado tentador como para ignorarlo, y con una mezcla de emoción y precaución, desciendes por la escalera hacia la oscuridad. Al llegar al fondo, te encuentras en una habitación lúgubre y claustrofóbica, donde los rayos de luz apenas penetran.',
                    texto2:'De repente, una vez dentro, la puerta detrás de ti se cierra con un estruendo sordo, dejándote atrapado en la oscuridad del sótano. Intentas abrirla desesperadamente, pero está sellada con magia oscura que impide cualquier escape. Ahi te das cuenta que tu aventura ha llegado a su fin',
                },
                espejo:{
                    texto1:'Decides que el sótano no es un lugar al que quieres aventurarte y decides seguir explorando otras áreas del castillo. Mientras recorres una habitación polvorienta, tu mirada se posa en un espejo antiguo y misterioso que se encuentra en una esquina. Te acercas para inspeccionarlo y te encuentras cautivado por tu propio reflejo.',
                    texto2:'Sin embargo, a medida que observas el espejo, te das cuenta de que tu imagen comienza a distorsionarse y a cambiar, reflejando un mundo diferente y desconcertante. Antes de que puedas reaccionar, te sientes atraído hacia el espejo y te encuentras atrapado en su reflejo, incapaz de escapar.',
                },
            },
        },
        seguirCaminoPrincipal:{
            presentacion:'Decides que no quieres arriesgarte a entrar en el castillo en ruinas y prefieres explorar los terrenos circundantes. Te aventuras por los alrededores del castillo, descubriendo antiguos jardines cubiertos de maleza, estanques tranquilos y ruinas adicionales que cuentan historias olvidadas',
            jardin:{
                presentacion:'Mientras exploras los exuberantes jardines, te encuentras rodeado de una variedad de flora exótica y hermosa que ha crecido salvajemente entre las ruinas del castillo. Entre las ramas retorcidas y las flores brillantes, notas un arbusto cargado de frutos coloridos y apetitosos. Uno de los frutos llama especialmente tu atención: es grande, jugoso y emana un aroma embriagador que te hace agua la boca. Te encuentras frente a una elección tentadora.',
                fruta:{
                    comer:{
                        texto1:'Con una mezcla de curiosidad y hambre, decides arriesgarte y probar el fruto exótico que has encontrado en los jardines del castillo.',
                        texto2:'Sin embargo, a medida que saboreas el dulce néctar de la fruta, una sensación extraña comienza a apoderarse de ti. Tu cabeza se vuelve mareada y confusa, y las imágenes de tu pasado comienzan a desvanecerse en la neblina de la memoria. No importa cuánto te esfuerces, no puedes recordar quién eres, de dónde vienes o cuál era tu misión original en este lugar misterioso.',
                        texto3:'Perdido en un mar de olvido, te encuentras atrapado en un ciclo interminable de confusión y desorientación. Sin un propósito claro o recuerdos para guiarte, te das cuenta de que tu aventura ha llegado a su fin.',
                    },
                    noComer:'Aunque tu decisión de no comer el fruto te deja con el estómago vacío por el momento, te sientes tranquilo sabiendo que has evitado un posible peligro desconocido. Sigues explorando con cautela, confiando en tu instinto para guiarte a través de los misteriosos jardines del castillo en ruinas. \nPero no encuentras nada, y te vuelves al pueblo con las manos vacías.',
                }
            },
            estanque:{
                texto1:'Mientras descansas en la orilla del estanque, te sientes cada vez más atraído por la serenidad del agua y la belleza de tu propio reflejo que baila en la superficie. Un impulso irresistible te impulsa a sumergirte en el estanque, convencido de que algo especial te espera en sus profundidades',
                texto2:'Sin embargo, tan pronto como te sumerges, sientes un cambio repentino en la atmósfera a tu alrededor. El agua se vuelve fría como el hielo y las sombras del fondo del estanque se agitan, como si ocultaran algo oscuro y peligroso. Te das cuenta demasiado tarde de que has caído en una trampa encantada, y ahora estás atrapado en el abrazo gélido del estanque maldito.',
            },
            ruinas:{
                presentacion:{
                    texto1:'Mientras exploras las ruinas adicionales, te adentras en una sala olvidada, llena de reliquias antiguas y artefactos misteriosos. Entre los escombros y la polvareda, encuentras un pergamino antiguo cuidadosamente enrollado, con inscripciones en una lengua antigua y desconocida. A medida que lo desenrollas, las palabras cobran vida ante tus ojos, revelando los secretos de la maldición que ha mantenido al castillo en ruinas durante siglos.',
                    texto2:'Justo cuando terminas de leer el pergamino, una figura misteriosa emerge de las sombras, sosteniendo una piedra en la mano. Esta figura, una especie de guardián ancestral del castillo, te reta a un juego de "piedra, papel o tijera" para demostrar tu valía y obtener el pergamino.',
                },
                ganador:{
                    texto1:'Impresionado por tu determinación y habilidad, el guardián te entrega el pergamino con un gesto de respeto. Ahora, armado con el conocimiento necesario para deshacer la maldición. Con la maldición levantada, el castillo recupera su antigua gloria y belleza.',
                    texto2:'Con la maldición levantada, el castillo recupera su antigua gloria y belleza. Como reconocimiento por tu prudencia y habilidad, los antiguos guardianes del castillo te otorgan un tesoro invaluable y la gratitud eterna de su gente. Con tu misión cumplida, regresas a casa como un héroe, con la cabeza en alto y el corazón lleno de satisfacción.',
                },
                perdedor:{
                    texto1:'El guardián ancestral se mantiene firme frente a ti, con una expresión imperturbable en su rostro tallado en piedra. Con un movimiento rápido, hace su elección, y te muestra su mano. Te das cuenta de que has sido superado, y una sensación de decepción se apodera de ti mientras observas impotente cómo el guardián sostiene la piedra, superando tu elección de tijera.',
                    texto2:'Con un gesto de pesar, el guardián niega con la cabeza y retira el pergamino de tu alcance. Te das cuenta de que has perdido la oportunidad de desvelar los secretos que guarda el antiguo documento y deshacer la maldición que ha afligido al castillo durante tanto tiempo. Con un suspiro resignado, te retiras de la sala y vuelves a tu pueblo, derrotado.',
                },
            },
        },
    },
}