var siguiente = 'x';
var botones = document.getElementsByTagName('button');

function creaTablero(){
    document.write('<table>');
    document.write(`<tr><th id='jugador' colspan='3'>Siguiente jugador: ${siguiente}</tr></th>`)
    for (let i = 0; i < 3; i++) {
        document.write('<tr>');
        for (let j = 0; j < 3; j++) {
            document.write(`<td><button 
            name=${i.toString()+j} 
            id=${i.toString()+j}></button></td>`);       
        }
        document.write('</tr>');      
    }
    document.write(`<tr><th id='ganador' colspan='3'></tr></th>`)
    document.write('</table>');
}

function jugada() {

    for (let i = 0; i < botones.length ; i++){
        botones[i].addEventListener('click', function(){
            if (botones[i].textContent == ''){
                botones[i].textContent = siguiente;
                if (siguiente == 'x'){
                    siguiente = 'o';
                }else{
                    siguiente = 'x';
                }
                document.getElementById('jugador').textContent = `Siguiente jugador: ${siguiente}`;
                compruebaGanador();
                }
            }
            , false);
    }
}

function compruebaGanador(){
    let final = false;
    // x Horizontal 
    if (botones[0].textContent == 'x' && botones[1].textContent == 'x' && botones[2].textContent == 'x'){
        document.getElementById('ganador').textContent = 'Ganador: x!';
        final = true;
    }
    else if (botones[3].textContent == 'x' && botones[4].textContent == 'x' && botones[5].textContent == 'x'){
        document.getElementById('ganador').textContent = 'Ganador: x!';
        final = true;
    }
    else if (botones[6].textContent == 'x' && botones[7].textContent == 'x' && botones[8].textContent == 'x'){
        document.getElementById('ganador').textContent = 'Ganador: x!';
        final = true;
    }

    // x Vertical
    else if (botones[0].textContent == 'x' && botones[3].textContent == 'x' && botones[6].textContent == 'x'){
        document.getElementById('ganador').textContent = 'Ganador: x!';
        final = true;
    }
    else if (botones[1].textContent == 'x' && botones[4].textContent == 'x' && botones[7].textContent == 'x'){
        document.getElementById('ganador').textContent = 'Ganador: x!';
        final = true;
    }
    else if (botones[2].textContent == 'x' && botones[5].textContent == 'x' && botones[8].textContent == 'x'){
        document.getElementById('ganador').textContent = 'Ganador: x!';
        final = true;
    }

    // x Diagonal
    else if (botones[0].textContent == 'x' && botones[4].textContent == 'x' && botones[8].textContent == 'x'){
        document.getElementById('ganador').textContent = 'Ganador: x!';
        final = true;
    }
    else if (botones[6].textContent == 'x' && botones[4].textContent == 'x' && botones[2].textContent == 'x'){
        document.getElementById('ganador').textContent = 'Ganador: x!';
        final = true;
    }


    // o Horizontal
    if (botones[0].textContent == 'o' && botones[1].textContent == 'o' && botones[2].textContent == 'o'){
        document.getElementById('ganador').textContent = 'Ganador: o!';
        final = true;
    }
    else if (botones[3].textContent == 'o' && botones[4].textContent == 'o' && botones[5].textContent == 'o'){
        document.getElementById('ganador').textContent = 'Ganador: o!';
        final = true;
    }
    else if (botones[6].textContent == 'o' && botones[7].textContent == 'o' && botones[8].textContent == 'o'){
        document.getElementById('ganador').textContent = 'Ganador: o!';
        final = true;
    }

    // o Vertical
    else if (botones[0].textContent == 'o' && botones[3].textContent == 'o' && botones[6].textContent == 'o'){
        document.getElementById('ganador').textContent = 'Ganador: o!';
        final = true;
    }
    else if (botones[1].textContent == 'o' && botones[4].textContent == 'o' && botones[7].textContent == 'o'){
        document.getElementById('ganador').textContent = 'Ganador: o!';
        final = true;
    }
    else if (botones[2].textContent == 'o' && botones[5].textContent == 'o' && botones[8].textContent == 'o'){
        document.getElementById('ganador').textContent = 'Ganador: o!';
        final = true;
    }

    // o Diagonal
    else if (botones[0].textContent == 'o' && botones[4].textContent == 'o' && botones[8].textContent == 'o'){
        document.getElementById('ganador').textContent = 'Ganador: o!';
        final = true;
    }
    else if (botones[6].textContent == 'o' && botones[4].textContent == 'o' && botones[2].textContent == 'o'){
        document.getElementById('ganador').textContent = 'Ganador: o!';
        final = true;
    }

    // Final
    if (final){
        for (let i = 0; i < botones.length; i++){
            botones[i].textContent = '';
        }
        siguiente = 'x';
        document.getElementById('jugador').textContent = `Siguiente jugador: ${siguiente}`;
    }
    else{
        let empate = 0;
        for (let i = 0; i < botones.length; i++){
            if (botones[i].textContent != ''){
                empate++;
            }
        }
        if (empate == 9){
            for (let i = 0; i < botones.length; i++){
                botones[i].textContent = '';
            }
            document.getElementById('ganador').textContent = 'Empate!';
            siguiente = 'x';
            document.getElementById('jugador').textContent = `Siguiente jugador: ${siguiente}`;
            empate = 0;
        }else{
            empate = 0;
        }
    }
}