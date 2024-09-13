// 1. Crear una función constructora para cada objeto.
// (2 Puntos)
function Consultorio(nombre, paciente) {
    this._nombre = function () {
      return nombre;
    };
 
    this._paciente = function () {
      return paciente || [];
    };
  }
 
  function Paciente(nombre, edad, rut, diagnostico) {
    this._nombre = function () {
      return nombre;
    };
    this._edad = function () {
      return edad;
    };
    this._rut = function () {
      return rut;
    };
    this._diagnostico = function () {
      return diagnostico;
    };
  }
 
  // 2. Implementar métodos getters y setters para poder acceder
  // y modificar los datos de los pacientes.
  // (3 Puntos)
 
  Consultorio.prototype.getNombre = function (){
      return this._nombre();
  }
  Consultorio.prototype.setName = function (nuevo_nombre) {  
      this._nombre = function () {
          return nuevo_nombre;
      }
  }
  Consultorio.prototype.agregarPaciente = function (paciente) {
      this._paciente().push(paciente);
  }
 
  Paciente.prototype.getNombre = function (){
      return this._nombre();
  }
  Paciente.prototype.setName = function (nuevo_nombre) {  
      this._nombre = function () {
          return nuevo_nombre;
      }
  }
  Paciente.prototype.getEdad = function (){
      return this._edad();
  }
  Paciente.prototype.getRut = function (){
      return this._rut();
  }
  Paciente.prototype.getDiagnostico = function (){
      return this._diagnostico();
  }
  Paciente.prototype.setName = function (nuevo_nombre) {  
      this._nombre = function () {
          return nuevo_nombre;
      }
  }
  Paciente.prototype.setEdad = function (nueva_edad) {  
      this._edad = function () {
          return nueva_edad;
      }
  }
  Paciente.prototype.setRut = function (nuevo_rut) {  
      this._rut = function () {
          return nuevo_rut;
      }
  }
  Paciente.prototype.setDiagnostico = function (nuevo_diagnostico) {  
      this._diagnostico = function () {
          return nuevo_diagnostico;
      }
  }
  Consultorio.prototype.getPacientePorNombre = function (nombreRecibido) {
    this._paciente().forEach(function(paciente,index) {
        console.log('--------------------------------------');
        if (paciente._nombre() == nombreRecibido){
            console.log("Paciente Encontrado N°"+(index+1));
            console.log("Nombre: " + paciente._nombre());
            console.log("Edad: " + paciente._edad());
            console.log("Rut: " + paciente._rut());
            console.log("Diagnostico: " + paciente._diagnostico());
        } 
    });
}
 
  Consultorio.prototype.getPacientes = function (){
      this._paciente().forEach(function(paciente, index) {
        console.log(`Paciente ${index + 1}: ${paciente.getNombre()}`);
        console.log(`Edad: ${paciente.getEdad()}`);
        console.log(`Rut: ${paciente.getRut()}`);
        console.log(`Diagnóstico: ${paciente.getDiagnostico()}`);
      });
  };
 
  let paciente1 = new Paciente("Carlos", 25, 12345678, "Catarro");
  let paciente2 = new Paciente("Juan", 26, 12345679, "Problemas");
 
  let consultorio1 = new Consultorio("Consultorio 'LARGA ESPERAnza'", [paciente1, paciente2]);
 
  console.log(paciente1.getNombre());
  console.log(paciente2.getEdad());
  paciente2.setDiagnostico("Fiebre");
  console.log(paciente2.getDiagnostico());
  console.log(consultorio1.getNombre());
  console.log(consultorio1.getPacientes());
  console.log(consultorio1.getPacientePorNombre("Carlos"));
  console.log(consultorio1.getPacientePorNombre("Ana"));