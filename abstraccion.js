 class animales {
    constructor(comida){
        this.comida = comida;
    }
    comer(){}
}

class carnivoro extends animales{
    constructor(comida){
        super(comida);
    }
    comer(){
        return`el animal carnivoro come ${this.comida}`
    }
}

class herbivoro extends animales{
    constructor(comida){
        super(comida);
    }
    comer(){
        return`el animal herbivoro come ${this.comida}`
    }
}

let objcarnivoro = new carnivoro("carne");
let objherbivoro = new herbivoro("plantas");
console.log(objcarnivoro.comer());
console.log(objherbivoro.comer());