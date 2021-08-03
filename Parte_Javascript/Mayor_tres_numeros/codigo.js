function prueba(){
    var texto = document.getElementById('texto');
    if (texto.value.toLowerCase() == 'hola'){
        document.getElementById('mensaje').innerText = 'Hola';
        console.log('Imprime');
    }
}

onkeyup = prueba;