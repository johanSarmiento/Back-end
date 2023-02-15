class automotor {
    constructor(color,numPuertas,marca,motor){
        this.color = color;
        this.numPuertas = numPuertas;
        this.marca = marca;
        this.motor = motor;
    }
    datosAutos(){
        return `la marca del vehiculo es ${this.marca} con un numero de puertas ${this.numPuertas} y color ${this.color} con un motor ${this.motor}`
    }
}

class camioneta extends automotor{
    constructor(color,numPuertas,marca,motor,cargaMax){
        super(color,numPuertas,marca,motor);
        this.cargaMax = cargaMax;
    }
    datosAutos(){
        return `la marca del vehiculo es ${this.marca} con un numero de puertas ${this.numPuertas} y color ${this.color} con un motor ${this.motor} y la carga maxima es ${this.cargaMax}`
    }
}

let objAutomotor = new automotor("rojo","2","spart","4 caballos de fuerza");
let objCamioneta = new camioneta("amarillo","4","turbo","10 caballos de fuerza")

console.log(objAutomotor.datosAutos());
console.log(objCamioneta.datosAutos());
