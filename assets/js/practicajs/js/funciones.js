/*let cadena = prompt("Introduce un Texto para Comprobar si es un Palíndromo:");
	let numchar = cadena.length;
        //Ponemos la cadena en minúsculas
	cadena = cadena.toLowerCase();
	let j;
	let car;
	let salida = ""; 
	let cadena_espac = "";
	let cadena_reves = "";
        //Bucle que recorre toda la cadena y va concatenando en dos letiableiables y eliminando espacios
	for (i = 0; i < numchar; i++) {
		car = cadena.charAt(i);
                //Si el caracter es un espacio
		if (car != " ") {
			cadena_espac += car;
			cadena_reves = car + cadena_reves;
		}
	}
	if (cadena_espac == cadena_reves) {
		console.log("El texto es un palíndromo");
	}
	else {
		console.log("El texto No es un palíndromo");
	}*/

	/*let jugados = 0;
    let ganados = 0;
    let perdidos = 0;
    do {
        let jugada = prompt("Escribe \"piedra\", \"papel\" o \"tijera\"");
        //GUARDAMOS UN NÚMERO ALEATORIO DE 1 AL 9
        let aleatorio = Math.floor((Math.random() * 9) + 1);
        let elige = "";
        if (aleatorio <= 3) {
            elige = "piedra";
        }
        else if (aleatorio <= 6) {
            elige = "papel";
        }
        else {
            elige = "tijera";
        }

        if ((jugada == "piedra") && (elige == "piedra")) {
            alert(jugada+"-"+elige+": Empate");
        }
        else if ((jugada == "piedra") && (elige == "papel")) {
            alert(jugada+"-"+elige+": Gana PC");
            perdidos++;
        }
        else if ((jugada == "piedra") && (elige == "tijera")) {
            alert(jugada+"-"+elige+": Gana Jugador");
            ganados++;
        }
        else if ((jugada == "papel") && (elige == "papel")) {
            alert(jugada+"-"+elige+": Empate");
        }
        else if ((jugada == "papel") && (elige == "tijera")) {
            alert(jugada+"-"+elige+": Gana PC");
            perdidos++;
        }
        else if ((jugada == "papel") && (elige == "piedra")) {
            alert(jugada+"-"+elige+": Gana Jugador");
            ganados++;
        }
        else if ((jugada == "tijera") && (elige == "tijera")) {
            alert(jugada+"-"+elige+": Empate");
        }
        else if ((jugada == "tijera") && (elige == "piedra")) {
            alert(jugada+"-"+elige+": Gana PC");
            perdidos++;
        }
        else if ((jugada == "tijera") && (elige == "papel")) {
            alert(jugada+"-"+elige+": Gana Jugador");
            ganados++;
        }
        jugados++;

    } while (confirm("Jugar de nuevo"));

    console.log("Partidas jugadas: "+jugados+"<br>");
    console.log("Partidas ganadas: "+ganados+"<br>");
    console.log("Partidas perdidas: "+perdidos+"<br>");
    console.log("Partidas empatadas: "+(jugados-ganados-perdidos));*/

       let cadena = prompt("Introduce un Texto:");
    let numchar = cadena.length;
    let j;
    let car;
    let salida = "";
    for (j = 0; j < numchar; j++) {
        car = cadena.charAt(j);    //recupera el caracter i del string.
        salida = car + salida;
    }
    alert(salida);