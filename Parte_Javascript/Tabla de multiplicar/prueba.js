var num;

function dame_numero(){
    num = parseInt(prompt('Ingrese un número para sacar su tabla:'))
    document.write(num)
}

function tabla(){
    
    for (let i = 1; i <= 10; i++){
        document.write('<tr>')
        document.write('<td>')
        document.write(num+'*'+i)
        document.write('</td>')
        document.write('<td>')
        document.write(num*i)
        document.write('</td>')
        document.write('</tr>')
    }
}

