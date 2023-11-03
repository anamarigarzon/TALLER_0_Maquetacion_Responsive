let lanzarMoneda = () =>{
    let moneda = Math.floor((Math.random()*2)+1);
    return moneda;
}

let ganar = (saldo, apuesta)=>{
    saldo = saldo+(apuesta*2);
    console.log(`¡Has ganado!`);
    return saldo;
}

let perder = (saldo,apuesta)=>{
    saldo= saldo-apuesta;
    console.log(`Has perdido :c`);
    return saldo;
}

let obtenerSaldo = () => {
    let saldo = parseInt(prompt('¿Cuál es su saldo?'));
    return saldo;
}

let obtenerApuesta = () =>{
    let apuesta = parseInt(prompt('¿Cuál es su apuesta?'));
    return apuesta;
}

let apuestaGanada = (apuesta,moneda) =>{
    if (apuesta == moneda){
        return true;
    }else{
        return false;
    }
}

let evaluarApuesta = (apuesta,moneda) =>{
    resultadoApuesta = apuestaGanada(apuesta,moneda);
    if (resultadoApuesta==true){
        saldo = ganar(saldo,apuesta);
    }else{
        saldo = perder(saldo,apuesta);
    }
    return saldo;
}

let seguirApostando = (saldo) =>{
    console.log(`Su saldo es ${saldo}, ¿Desea seguir jugando?`)
    let seguir = parseInt(prompt('Si desea seguir jugando, ingrese 1, de lo contrario, ingrese otro input'));
    if (seguir==1){
        return true;
    }else{
        return false;
    }
}

let juego = () =>{
    continuarJugando = true;
    saldo = obtenerSaldo();
    while(continuarJugando == true){
        apuesta = obtenerApuesta();
        moneda = lanzarMoneda();
        saldo = evaluarApuesta(apuesta,moneda);
        continuarJugando = seguirApostando();
    }
}



