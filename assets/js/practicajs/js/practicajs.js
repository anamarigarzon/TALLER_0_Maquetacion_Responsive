/*//Sintaxis básica
console.log("Hola mundo")

let numero=25
console.log("El número es",numero)
let nombre="Jennifer"
console.log("El nombre es",nombre)
let estado=true
console.log("El estado es",estado)


let res=numero+5
console.log("El resultado es",res)

window.alert("La información es correcta")
estado=window.confirm("Está seguro de eliminar el registro")
console.log("El estado es",estado)*/



/*//Secuenciales
let numero
numero=prompt("Digite un número")
numero=parseInt(numero) 
console.log("El número es",numero)

numero1=prompt("Digite un número")
numero1=parseInt(numero1)
console.log("El número es",numero1)

let suma=numero-numero1
console.log("La suma es",suma)

//Condicionales
var="1"
var2=1


if(numero>numero1){
	console.log("El número mayor es ",numero)
}	
else{
	console.log("El número mayor es ",numero1)
}

//Condicionales operador ternario

let numeromayor=(numero>numero1)
?"El número mayor es el primero"
:"El número mayor es el segundo"
console.log(numeromayor)

// Condicionales con condición compuesta
let usuario,password
usuario=prompt("Digite su usuario")
password=prompt("Digite su password")
password=parseInt(password)

if(usuario==="Jennifer" && password===123){
	window.alert("Bienvenido")
}
else{
	window.alert("Acceso denegado")
}

//Condicional anidado
if(usuario==="Jennifer" && password===123){
	window.alert("Bienvenido")
}
else if(usuario==="Jennifer"){
	window.alert("Su password es incorrecto")
}
else if(password===123){
	window.alert("Su usuario es incorrecto")
}
else{
	console.log("Datos invalidos")

//Condicional multiple

numero=prompt("Digite un número")
numero=parseInt(numero)
console.log("El número es",numero)

numero1=prompt("Digite un número")
numero1=parseInt(numero1)
console.log("El número es",numero1)

op=prompt("Digite una opción 1. sumar 2. Restar")
op=parseInt(numero1)

let res

switch(op){
	case 1:
		res=numero+numero1
		window.alert("La suma de los números es ",res)
	break;

	case 2:
		res=numero-numero1
		console.log("La resta de los números es",res)
	break;

	default:
		window.alert("La opción ingresada no es valida")
	break;
}*/

/*ciclos:
for

for (<inicialización>; <condición>; <incrementador>) {
  // el cuerpo del ciclo, el código que se repite mientras que la condición sea verdadera
}

while
La inicialización se ejecuta antes de evaluar la condición por primera vez.
La condición se ejecuta cada vez que se itera.
El cuerpo se ejecuta cada vez que la condición se cumple.
El incrementador se ejecuta cada vez que el cuerpo se ejecuta, 
antes de volver a evaluar la condición.*/
/*
var i = 10;       // el inicializador
while (i <= 20) { // la condición
  console.log(i);
  i = i + 2;      // el incrementador
}*/




















