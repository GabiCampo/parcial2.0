$("#formulario").validate({
    rules: {
        id: {
            required: true
        },
        rut: {
            required: true,
            number: true,
            min: 1,
            max: 9
        },
        nombre: {
            required: true,
            min: 3
        },
        apellido: {
            required: true
        },
        correo: {
            required: true,
            email: true
        },
        direccion: {
            required: true
        },
        contraseña: {
            required: true
        }
        
    }
})

$("#guardar").click(function(){
    if($("#formulario").valid() == false){
        return;
    }
    let id = $("#id").val()
    let dot = $("#dot").is(":checked")
    let rut = $("#rut").val()
    let nombre = $("#nombre").val()
    let apellido = $("#apellido").val()
    let correo = $("#correo").val()
    let direccion = $("#direccion").val()
    let ot = $("#ot").is(":checked")
    let contraseña = $("#contraseña").val()
    let imagen = $("#imagen").val()
})