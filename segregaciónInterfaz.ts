interface motor {
    motores(): string
}
interface puerta{
   puertas(): string
}
interface techo{
    techos(): string
}
class carross implements motor,puerta,techo{
    motores() {     
        return "5 caballos de fuerza"
    }
    puertas() {
        return "4 puertas"
    }
    techos() {
        return "si tiene"
    }
}

class carrosDeportivo implements motor,puerta{
    motores() {
        return "10 caballos de fuerza"
    }
    puertas() {
        return "2 puertas"
    }
}
let car = new carross()
let devCarr = new carrosDeportivo()

console.log(`${car.motores()} ${car.puertas()} ${devCarr.motores()}`);
console.log(`${devCarr.motores()} ${devCarr.puertas}`);