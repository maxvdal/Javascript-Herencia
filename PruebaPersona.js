class Persona {
    static contadorPersonas = 0;
  
    constructor(nombre, apellido, edad) {
      this._idPersona = ++Persona.contadorPersonas;
      this._nombre = nombre;
      this._apellido = apellido;
      this._edad = edad;
    }
  
    get idPersona() {
      return this._idPersona;
    }
  
    get nombre() {
      return this._nombre;
    }
  
    set nombre(nombre) {
      this._nombre = nombre;
    }
  
    get apellido() {
      return this._apellido;
    }
  
    set apellido(apellido) {
      this._apellido = apellido;
    }
  
    toString() {
      return `
            ID Persona: ${this._idPersona} 
              Nombre: ${this._nombre} 
              Apellido: ${this._apellido} 
              Edad: ${this._edad}`;
    }
  }

  
  class Empleado extends Persona {
    static contadorEmpleados = 0;
  
    constructor(nombre, apellido, edad, sueldo) {
      super(nombre, apellido, edad);
      this._idEmpleado = ++Empleado.contadorEmpleados;
      this._sueldo = sueldo;
    }
  
    get idEmpleado() {
      return this.idEmpleado;
    }
  
    get sueldo() {
      return this._sueldo;
    }
  
    set sueldo(sueldo) {
      this._sueldo = sueldo;
    }
  
    toString() {
      return `${super.toString()}
              Id Empleado: ${this._idEmpleado} 
              Sueldo: ${this._sueldo}`;
    }
  }

  
  class Cliente extends Persona {
    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return `${super.toString()} 
            ID Cliente ${this._idCliente} 
             Fecha Registro: ${this._fechaRegistro}`;
    }
}

//Prueba clase PERSONA.

let persona1 = new Persona('Maximiliano', 'Vidal', 25);
console.log(persona1.toString());

let persona2 = new Persona('Lionel', 'Messi', 35);
console.log(persona2.toString());

//Prueba clase EMPLEADO.

let empleado1 = new Empleado('Rodrigo', 'De Paul', 33, 50000);
console.log(empleado1.toString());

let empleado2 = new Empleado('Leandro', 'Paredes', 28, 60000);
console.log(empleado2.toString());

//Prueba clase CLIENTE.

let cliente1 = new Cliente('Kilyan', 'Mbappe', 22, new Date());
console.log(cliente1.toString());

let cliente2 = new Cliente('Karim', 'Benzema', 36, new Date());
console.log(cliente2.toString());