/*and verdadero las dos condiciones deben ser verdaderas 
or verdadero una de las dos debe verdadera
solicitar la estatura y el peso variables interas
1. si el peso en mayor a 55 kilos y la estatuta mayor 160 el atleta podra participar en las competencias
2. Si el peso en menor a 55 kilos y la estatuta menor 160 el atleta podra participar en las competencias.

entradas: estura y peso atletas
proceso: comparacion condiciones
Salida: si el atleta participa o no

1. declarar las variables

let estatura;
let peso;

//2. solicitar los valores

estatura=prompt("Digite su estatura en centimetros")
estatura=parseInt(estatura)
console.log("Su estatura es", estatura)

peso=prompt("Digite su peso en kilogramos")
peso=parseInt(peso)
console.log("Su peso es", peso)

//3. condiciones

if(peso>55 && estatura>160){
	window.alert("El atleta puede participar")
}
else if (peso<55 && estatura<160)
{
	window.alert("El atleta no puede participar")
	}
else {
	window.alert("El atleta no puede participar")
}*/


