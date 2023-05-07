$("#formulario1").validate({
  rules: {
      "txtRut": {
        required: true,
        rut: true
      },
      "txtNombre": {
        required: true,
        nombre: true
      },
      "txtApellido": {
        required: true,
        apellido: true
      },
      "txtEmail": {
          required: true,
          email: true
      },
      "txtDireccion": {
        required: true,
        direccion: true
      },
      
      "txtContrasena": {
          required: true,
          minlength: 5
      },
      "txtRepetirContrasena": {
          required: true,
          equalTo: '#id_txtContrasena'
      },

  }, // --> Fin de reglas
  messages: {
  
    "txtRut": {
        required: 'Ingrese su Rut',
        rut: 'Campo Oligatorio'
    },
    "txtNombre": {
        required: 'Ingrese su Nombre',
        nombre: 'Campo Obligatorio'
    },
    "txtApellido": {
        required: 'Ingrese su Apellido',
        apellido: 'Campo Oligatorio'
    },
    "txtEmail": {
        required: 'Ingrese email',
        email: 'No cumple formato'
    },
    "txtDireccion": {
        required: 'Ingrese Dirección',
        direccion: 'Campo Oligatorio'
    },
    "txtContrasena": {
        required: 'Ingrese Contraseña',
        minlength: 'Min. 5 caract'
    },
    "txtRepetirContrasena": {
        required: 'Repita la Contraseña',
        equalTo: ' deben ser iguales'
    }
    
  } //-->Fin de mensajes
  

});

$("#Guardar").on("click", function () {
  alert("Los datos se han guardado correctamente");
});

$("#limpiar").on("click", function () {
  $("#formulario1")[0].reset();
});

