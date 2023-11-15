/*las funciones como operaciones o comparativo como métodos
clase:
nombre
atributos
métodos(funciones)
grupos de líneas de código para realizar una tarea
1. Declarar la función: prepararla, darle un nombre asignarle las tareas
2. Invocar o llamar la función: llamar la funcion para ejecutar las tareas (realice)
Sintaxis:
1. function nombreFuncion (parametros){
tareas o instrucciones
}
2. se invoca por el nombre nombreFuncion();
4 tipos de funciones

1. por declaración
2. por expresión
3. flecha
4. anonima

tarea 2: Crear un programa en js que determine la edad necesaria para ingresar a una discoteca

=>18 Puede Ingresar
=>1<18 No puede ingresar
<1 Valor no válido

Utilizando los 4 tipos de funciones

declarar: crer la función , nombre las tareas que va a realizar
invocar: llamar la función por el nombre.

1. Función declaración: la función que me permite declarar las tareas que se van a realizar. js siempre a buscar las declaraciones y luego procesa el resto de código
//declarar la función
function saludar(){
// instrucciones o tareas
alert("Hola tatiana");
}
//invocar

saludar();

expresión con parametros

function mayoredad(edad){
mayor=(edad>=18)
?alert(`Usted es mayor de edad`)
:alert(`Usted es menor de edad`);
} 


let e=prompt("Por favor ingrese su edad");
mayoredad(e);

//funcion por declaración con retorno


function promedio(sumatoria, cantidad){
let calcula=(sumatoria/cantidad)

return (calcula).toFixed(2);

return(sumatoria/cantidad).toFixed(2);
}
let res=true;
let sumatoria=0;
let cantidad=0;
while(res==true){
let nota=prompt("Por favor digite su calificación")
console.log(`la nota ingresada es ${nota}`)
sumatoria=sumatoria+parseFloat(nota);
cantidad=cantidad+1;
res=confirm("Desea ingresar otra calificación")
}

prom=promedio(sumatoria,cantidad)
console.log(`El promedio de sus notas es ${prom}`)
//Función por expresión:se guardan en variables y se invoca luego la variable (inicializar)



let edad=function mayoredad(edad){
    mayor=(edad>=18)
    ?alert(`Usted es mayor de edad`)
    :alert(`Usted es menor de edad`);
    } 
let e=prompt("Por favor ingrese su edad");
edad(e);

flecha
let edad=()=>{
    mayor=(edad>=18)
    ?alert(`Usted es mayor de edad`)
    :alert(`Usted es menor de edad`);
    } 
let e=prompt("Por favor ingrese su edad");
edad(e);
*/
let edad1=function(){
    mayor=(edad>=18)
    ?alert(`Usted es mayor de edad`)
    :alert(`Usted es menor de edad`)
    } 
let e=prompt("Por favor ingrese su edad");
edad1(e);