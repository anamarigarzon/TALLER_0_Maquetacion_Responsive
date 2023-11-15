/* 2. caja registradora
deben solicitar cantidad de productos 
deben solicitar el nombre producto cantidad valor valor total*/

/* determinar entradas procesos y salidas*/
/* declarar variables, realizar conversiones o asignaciones y luego las operaciones o procesos
resultados*/

let n=prompt("ingrese la cantidad de productos")
n=parseInt(n)

let total=0
total=parseInt(total)

/*for (let i=1; i<=n;i++) {
let nombre=prompt("Ingrese el nombre del producto")
let cantidad=prompt("Ingrese la cantidad del producto")
cantidad=parseInt(cantidad)
let precio=prompt("Ingrese el precio del producto")
precio=parseInt(precio)
let valorp=cantidad*precio
console.log('El producto es '+nombre+', la cantidad es '+cantidad+', el precio es '+precio+', y total del valor es '+valorp)
 //acumulador
total=total+valorp
console.log('El valor total de la compra es ',total)
}*/



let i=1 //inicializar
while(i<=n){ //condicion 
  let nombre=prompt("Ingrese el nombre del producto")
  let cantidad=prompt("Ingrese la cantidad del producto")
  cantidad=parseInt(cantidad)
  let precio=prompt("Ingrese el precio del producto")
  precio=parseInt(precio)  
  let valorp=cantidad*precio

  total=total+valorp //acumulador
  console.log('El producto es '+nombre+', la cantidad es '+cantidad+', el precio es '+precio+', y total del valor es '+valorp)
  i++//incremento
  }
  console.log('El valor total de la compra es',total)


/*cantidad de figuras a calcular
figuras geometricas triangulo cuadrado circulo rectangulo area y el perimetro */
