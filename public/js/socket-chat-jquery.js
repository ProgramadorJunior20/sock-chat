var params = new URLSearchParams(window.location.search);

// Referencias de Jquery 
let divUsuarios = $('#divUsuarios');


// Funciones para renderizar usuarios
function renderizaeUsuarios( personas ) { // Esperamos un arreglo de personas
    
    console.log(personas)

    let html = '';

    html += '<li>';
    html +=     '<a href="javascript:void(0)" class="active"> Chat de <span>'+ params.get('sala') +'</span></a>';
    html += '</li>';

    for( let i = 0; i < personas.length; i++ ) { 

        html += '<li>';
        html +=     '<a data-id="' + personas[i].id + '" href="javascript:void(0)"><img src="assets/images/users/1.jpg" alt="user-img" class="img-circle"> <span>'+ personas[i].nombre +' <small class="text-success">online</small></span></a>';
        html += '</li>';
    }

    divUsuarios.html( html );
    
}

//Listeners
divUsuarios.on('click', 'a', function name(params) {
    
    let id = $(this).data('id'); 

    if ( id ) {
        console.log(id);
        console.log('este es un nuevo cambio');
    }
});