/*Es un tipo de dato llamado objeto. No es más que una variable especial que 
puede contener más variables en su interior. De esta forma, tenemos la posibilidad 
de organizar múltiples variables de la misma temática dentro de un objeto.*/
/* 
const nomobjeto={
propiedad1:valor1
propiedad2:valor2
....
nommetodo(){
	contenido del método
}
}*/

//Creación del objeto animal, con 3 propiedades y 1 método
const animal={
	nombre:"Rush",
	tipo:"gato",
	edad:"4",

	comer(){
		console.log("El gato está comiendo")
	}
}
//mostrar objeto completo
console.log(animal)

//acceder a los propiedades de un objeto
console.log("El nombre del animal es "+ animal.nombre)

//invocar métodos de un objeto
animal.comer()

/*let nombre=prompt("Ingrese el nombrel producto")
let cantidad=prompt("Ingrese la cantidad de producto")
let precio=prompt("Ingrese el precio")

const registradora={
	
	total(){
		console.log("el total es "+(precio*cantidad))
	}
}

//manera 1 de ingresar propiedades al metodo
registradora.nombre=nombre
//manera 2 de ingresar propiedades al metodo
registradora["cantidad"]=cantidad

registradora.precio=precio
	
console.log(registradora)
registradora.total

console.log(registradora.nombre)
console.log(registradora.cantidad)


const circulo={
	radio:3,
	perimetro:0,
	area:0,

	carea(){
		this.area=3.14*this.radio*this.radio
		console.log("El área de un circulo con radio "+this.radio+" es "+(this.area).toFixed(2))
	}
	,
	cperimetro(){
		this.perimetro=2*3.14*this.radio
		console.log("El perímetro de un circulo con radio "+this.radio+" es "+(this.perimetro).toFixed(2))
	}
	


}

circulo.carea()

circulo.cperimetro()

console.log("El radio del circulo es "+circulo.radio)*/