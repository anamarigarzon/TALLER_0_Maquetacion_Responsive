//1. funcion expresion con nombre
//2. función de expresión anónima
//calcular el subtotal sacar el iva mostrar el total

//sintaxis básica de funciones 
/*let nombrevariable=fuction nombredelafuncion(parametros-in-out-inout){
	condiciones procesos
}
let nombrevariable=fuction (parametros-in-out-inout){
	condiciones procesos
}
entradas: nombre producto, cantidad producto, precio producto
proceso: Calcular subtotal, iva, total de la venta cambio
salida: resultados de los procesos */

// inicialización, condición e incremento

let iva=function calcularIva(valorcompra){
	return ivaproduc=((valorcompra*0.19).toFixed(2))
}

let subt=function(valor,iva){
	return ((valor-iva).toFixed(2))

}

let resp=true
let preciototalp,total=0
while (resp==true){
	let nombrep=prompt("Ingrese el nombre del producto")
	let cantidadp=prompt("Ingrese la unidades de "+nombrep+" que desea comprar")
	let precio=prompt("Ingrese el precio del "+nombrep)

	preciototalp=cantidadp*precio
	total=total+preciototalp
	console.log(cantidadp+" unidades de "+nombrep+" cuestan "+preciototalp)
	resp=confirm("¿Desea Ingresar otro Producto?")
}
l
console.log("El subtotal sin Iva",subt(total,iva(total)))
console.log("El Iva 19% es",iva(total))
console.log("El total de la compra es",total)

