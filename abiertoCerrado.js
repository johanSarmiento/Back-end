class forma{
    constructor(base,altura){
        this.base = base;
        this.altura = altura;
    }
    area(){}
}

class Rectangulo extends forma{
    constructor(base,altura){
        super(base,altura);
    }
    area(){
        return `la area del rectangulo es: ${this.base * this.altura}`;
    }
}

class Triangulo extends forma{
    constructor(base,altura){
        super(base,altura);
    }
    area(){
        return `la area del triangulo es: ${(this.base * this.altura)/2}`;
    }
}

let areaTriangulo = new Triangulo(2,5);
let areaRectangulo = new Rectangulo(2,10);

console.log(areaTriangulo.area());
console.log(areaRectangulo.area());