/*const animal={
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


console.log("1. Chocolate");
setTimeout(()=>{
console.log("2. Huevos al Gusto");
},4000)

setTimeout(()=>{
    console.log("2. Huevos al gusto");
},5000)
console.log("3. Pan");
console.log("4. Tamal");*/

//CallBacks

/*function sumar(num1,num2){
	return num1+num2;
}
function sumar(n1,n2){
return n1+n2;
}

function calculo(n1,n2,callback){
return callback(n1,n2);
}

console.log(calculo(10,23,sumar));

function calcular(num1,num2,callback){
	return callback(num1,num2);
}

console.log(calcular(2,3,sumar));*/

//Consumir API con callbacks y objetos XML XMLHttpReques

	/* Los estados que puede tener son:
        estado 0: inicializado
        estado 1: cargando
        estado 2: ya se cargó
        estado 3: ya hay información
        estado 4: solicitud completa
        PD: recuerda estas trabajando con una API externa osea un servidor por lo que
        depende del servidor cuanto demore en cada estado haces un pedido por datos
        (request) y solo es aplicar lógica.

        /Verificar estado, aqui un resumen de los casos más comunes:
            /*
            ESTADO 1xx (100 - 199): Indica que la petición esta siendo procesada.
            ESTADO 2xx (200 - 299): Indica que la petición fue recibida, aceptada y procesada correctamente.
            ESTADO 3xx (300 - 399): Indica que hay que tomar acciones adicionales para completar la solicitud. Por lo general indican redireccionamiento.
            ESTADO 4xx (400 - 499): Errores del lado del cliente. Indica se hizo mal la solicitud de datos.
            ESTADO 5xx (500 - 599): Errores del Servidor. Indica que falló totalmente la ejecución.
            
        */

	

const URL_API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {
  const xhttp = new XMLHttpRequest();
  //abrimos una conexion al api
  xhttp.open('GET', url_api, true);
  // escuchamos los cambios de la conexion
  xhttp.onreadystatechange = function(event) {
    // validamos la conexicon exitosa
    if (xhttp.readyState === 4) {
      // validamos el estado http 200
      if (xhttp.status === 200) {
        // convertimos la respuesta a json e iniciamos el callback que hara uso de la info
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        // Enviamos el error que en caso de haber problemas
        const error = new Error('Error' + url_api);
        return callback(error, null);
      }
    }
  };
  // enviamos la solicitud
  xhttp.send();
}

// llamamos la funcion y pasamos la url esto devolvera toda la informacion
fetchData(URL_API, function(error1, data1) {
  
  // retornara en que url fallo y terminara la ejecucion
  if (error1) return console.log(error1);

  // En data1 se guardo la primera respuesta
  // URL concatenamos el valor que se encuentra data1.results[0].id ente caso es 1
  //la url que pasamos es https://rickandmortyapi.com/api/character/1
    fetchData(URL_API + data1.results[0].id, function(error2, data2) {

    // retornara en que url fallo y terminara la ejecucion
        if (error2) return console.log(error2);

    // data2 tiene un objeto con la respuesta de la anterior URL
    // data2 es toda la información de Rick Sanchez
    // data2.origin.url es una URL que contiene el objeto https://rickandmortyapi.com/api/location/1
        fetchData(data2.origin.url, function(error3, data3) {

      // retornara en que url fallo y terminara la ejecucion
          if (error3) return console.log(error3);

      // data3 tiene como valor la respuesta de la anterior URL
      // En conclusion data1, data2 y data3 tienen diferentes valores
          console.log(data1.info);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  });
});
/*



const unapromesa = new Promise( (resolve, reject) => {
    if (true) {
        console.log('Hola');
        resolve('Hola!');
    } else {
        reject('Rayos!');
    }
});


unapromesa()
  .then( response => console.log(response))
  .catch( err => console.log(err));

*/