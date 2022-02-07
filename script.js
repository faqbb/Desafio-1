let insertar = 'si';

while (insertar == 'si') {
    let numero1 = parseInt(prompt('Ingrese un numero'));
        if (isNaN(numero1)) {
            alert('No es un numero valido')
        }
        else
            for(let divisor=1; divisor<=100;divisor++) {
                if (divisor==1 || divisor==numero1) {
                    continue;
                }
                if ((numero1 % divisor) == 0 ) {
                    alert('El numero no es primo');
                    break
                }
                if (divisor === 100) {
                    alert('El numero es primo')
                }
            }
    insertar = (prompt('¿Desea ingresar otro numero?'))
}

