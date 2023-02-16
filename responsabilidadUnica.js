class carro {
    constructor(marca, color){
        this.marca = marca;
        this.color = color;
    }
    setMarca(marca){
        this.marca = marca;
    }
    setColor(color){
        this.color = color;
    }
    getMarca(){
        return this.marca;
    }
    getColor(){
        return this.color;
    }
    datosCarro(){
        return `La marca del vehiculo es: ${this.marca} con Color: ${this.color}`;
    }
}

let carros = new carro("spart","rojo");
console.log(carros.datosCarro()); 
