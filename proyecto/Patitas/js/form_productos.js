$("#formulario").validate({
    rules: {
        id: {
            required: true
        },
        categoria: {
            required: true
            
        },
        nombre: {
            required: true,
            min: 3
        },
        monto: {
            required: true,
            number: true
        },
        descripcion: {
            required: true,
            email: true
        },
        dessub: {
            required: true
        },
        desoferta: {
            required: true
        }
        
    }
})

$("#guardar").click(function(){
    if($("#formulario").valid() == false){
        return;
    }
    let id = $("#id").val()
    let categoria = $("#categoria").val()
    let nombre = $("#nombre").val()
    let monto = $("#monto").val()
    let descripcion = $("#descripcion").val()
    let dessub = $("#dessub").val()
    let desoferta = $("#desoferta").val()
})