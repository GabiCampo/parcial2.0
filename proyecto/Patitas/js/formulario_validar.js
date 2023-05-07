// $.validator.setDefaults({
//     submitHandler: function(){
//         alert( "submitted");
//     }
// });
// $(document).readey(function(){
//     $('#formulario').validate({
//         rules: {
//             categoria: {
//                 required: true
//             },
//             nombre: {
//                 required: true
//             },
//             cantidad: {
//                 required: true
//             },
//             agree: "required"
//         },
//         messages:{
//             categoria: "ingrese una categoria",
//             nombre:"seleccione una opcion",
//             cantidad: "ingrese una cantidad"
//         }
//     });
// });
// $.validator.addMethod("comienzaPor", function(value, element, parametro){

// })

$("#formulario").validate({
    rules: {
        categoria: {
            required: true
        },
        nombre: {
            required: true
        },
        cantidad: {
            required: true,
            number: true,
            min: 1,
            max: 30
        }
        // messages:{
        //     categoria: "ingrese una categoria",
        //     nombre:"seleccione una opcion",
        //     cantidad: "ingrese una cantidad"
        // }
    }
})

$("#guardar").click(function(){
    if($("#formulario").valid() == false){
        return;
    }
    let categoria = $("#categoria").val()
    let nombre = $("#nombre").val()
    let cantidad = $("#cantidad").val()
})