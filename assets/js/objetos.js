/*let frm = document.querySelector("a")
let frm = document.querySelector("contenedor")*/

const animal={
    nombre: "Felix",
    tipo: "gato",
    edad: "4",
    comer(){
        // acceder a las propiedades de un objeto
        console.log(`${animal.nombre} está comiendo`)
        //Usando la palabra reservada this
        console.log(`${this.nombre} está comiendo`)
    }
}

console.log(animal)