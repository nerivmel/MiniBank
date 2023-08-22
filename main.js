class CuentaBancaria {
    constructor(nombre, saldoInicial) {
        this.nombre = nombre;
        this.saldo = saldoInicial;
    }

    transferir(destino, cantidad) {
        if (this.saldo >= cantidad) {
            this.saldo -= cantidad;
            destino.saldo += cantidad;
            console.log(`Transacción exitosa: ${this.nombre} transfirió ${cantidad} a ${destino.nombre}`);
        } else {
            console.log(`Fondos insuficientes en la cuenta de ${this.nombre}`);
        }
    }

    consultarSaldo() {
        console.log(`Saldo en la cuenta de ${this.nombre}: $${this.saldo}`);
    }
}

// Crear cuentas bancarias
const cuenta1 = new CuentaBancaria("Cuenta A", 1000);
const cuenta2 = new CuentaBancaria("Cuenta B", 500);

// Ingresar el valor de la transferencia o consultar saldo por consola
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('¿Qué desea hacer? (transferir/consultar saldo): ', (accion) => {
    if (accion.toLowerCase() === 'transferir') {
        readline.question('Ingrese la cantidad a transferir: ', (cantidad) => {
            cantidad = parseFloat(cantidad);
            if (!isNaN(cantidad)) {
                cuenta1.transferir(cuenta2, cantidad);
                cuenta1.consultarSaldo();
                cuenta2.consultarSaldo();
            } else {
                console.log('Cantidad no válida. Ingrese un número válido.');
            }
    
            readline.close();
        });
    } else if (accion.toLowerCase() === 'consultar saldo') {
        cuenta1.consultarSaldo();
        cuenta2.consultarSaldo();
        readline.close();
    } else {
        console.log('Acción no válida.');
        readline.close();
    }
});