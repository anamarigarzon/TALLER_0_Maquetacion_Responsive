/*

let numero1=prompt("Introduce el primer número")
numero1=parseInt(numero1)
let numero2=prompt("Introduce el segundo número")
numero2=parseInt(numero2)

let op=prompt("Seleccione una opción 1. Suma 2.Resta 3.Multiplicación 4. división")
op=parseInt(op)
let resultado

switch(op){

case 1:
resultado=numero1+numero2
console.log("La suma del ",numero1," y el ",numero2," es ",resultado)
break;

case 2:
resultado=numero1-numero2
console.log("La resta del ",numero1," y el ",numero2," es ",resultado)
break;

case 3:

break;

case 4:

break;

default:

break;
}
*/



/*for(let i=4;i>1;i--){
	console.log("Iteración No. ",i)
}*/
/*let contador=0
let alcancia=0
while(contador<=3){
	
	let billete=prompt("Ingrese el billete")
	billete=parseInt(billete)
	console.log("Su valor es ",billete)
	alcancia=alcancia+billete
	console.log("Su total acumulado es ",alcancia)
	contador++
}*/



/*let res=1
let alcancia=0

while(res){

	let billete=prompt("Ingrese el billete")
	billete=parseInt(billete)
	
	console.log("Su valor es ",billete)

	alcancia=alcancia+billete
	
	let res=prompt("Desea ingresar otro billete 1. Si 2. No")
	res=parseInt(res)

	if(res===1)
		continue;
	else
		break;
}

console.log("Su total acumulado es ",alcancia)*/

/*let seguir="si"
let subtotal=0
let total=0
while(seguir){

	let precio=prompt("Ingrese precio producto")
	precio=parseInt(precio)

	let cantidad=prompt("Ingrese la cantidad de producto")
	cantidad=parseInt(cantidad)
	
	subtotal=precio*cantidad
	console.log("Precio producto ",precio," Unidades ",cantidad, "Subtotal",subtotal)

	total=total+subtotal
	
	let res=prompt("Desea registrar otro producto Digite Si o No")
	if(res==="si")
		continue;
	else
		break;
}



let alcancia=0
let seguir=true
while(seguir===true){

	let billete=prompt("Ingrese el billete")
	billete=parseInt(billete)
	
	console.log("Su valor es ",billete)

	alcancia=alcancia+billete
	
	seguir=confirm("Desea ingresar otro billete")
}

console.log("Sus ahorros son ",alcancia)
console.log("Su total a pagar es ",total)


/*t*/

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number

/*let numero=prompt("Ingrese un número")
numero=parseFloat(numero)
let numero2=prompt("Ingrese otro número")
numero2=parseFloat(numero2)

console.log(numero.toExponential(3)) //convierte a número exponencial
console.log(numero.toFixed(3)) //posiciones decimales
console.log(numero.toPrecision(4)) // notación exponencial redondeada a precision de digitos significativos

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math*/
/*let numero=prompt("Ingrese un número")
numero=parseFloat(numero)
let numero2=prompt("Ingrese otro número") 
numero2=parseFloat(numero2)

console.log("El número mayor es:",Math.max(numero,numero2))
console.log("El número menor es:",Math.min(numero,numero2))
console.log(Math.pow(numero,numero2))
console.log(Math.sqrt(numero))*/


/*const MONEDA = Math.floor(1+Math.random() * 2);

const DADO = Math.floor(1+Math.random() * 6);

console.log(DADO)
console.log(MONEDA)*/


/*eleccion=parseInt(eleccion)

if(MONEDA===1 && eleccion===1){
	console.log("Salió cara ha ganado")
}
else if(MONEDA===2 && eleccion===2){
	console.log("Salió sello usted ha ganado")	
}
else if(MONEDA===1 && eleccion===2){
	console.log("Salió cara, usted escogió sello perdió")
}

else if(MONEDA===2 && eleccion===1){
	console.log("Salió sello, usted escogió cara perdió" )
}

console.log(MONEDA)

//console.log(DADO)*/


//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String

/*let texto=prompt("Ingrese su nombre")

console.log("La longitud de la cadena es",texto.length)
console.log(texto.charAt(0))
console.log(texto.substring(0,4))
console.log(texto.toLowerCase())
console.log(texto.toUpperCase())
console.log(texto.trim())

//concatenar
let texto1=prompt("Ingrese su apellido")
console.log(texto.concat(' ',texto1))

//template string
console.log(`Su nombre es ${texto} su apellido es ${texto1}`)*/

/*let longitud=texto.length
let resultado
let salida=" "
let tx

for(let i=0;i<longitud;i++){
	resultado=texto.charAt(i)//  nej 
	//salida=resultado+salida
	salida=resultado.concat(salida) //imprime al reves
	salida=salida.concat(resultado) //imprime al reves
}

console.log(salida)*/


