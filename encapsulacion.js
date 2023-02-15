function compañia(nombre) {
    let empleados = [];
    this.nombre = nombre

    this.getEmpleados = function(){
        return empleados
    }
    this.addEmpleados = function(empleado){
        empleados.push(empleado)
    }
}

let Compañia = new compañia("construsarHJ")

Compañia.addEmpleados({"nombre": "johan"})
console.log(Compañia.getEmpleados());