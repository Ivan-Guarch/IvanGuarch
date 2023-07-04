function conversionUyu() {
    let valor = parseInt(prompt("Ingrese Monto a Convertir: "));
    const dolar = 37.42;
    let resultado = 0;

     if (valor < 37.42) {
        alert("Monto Insuficiente para la Conversión Miníma ($37.42)");
       
    } else {
        resultado = valor / dolar;
        alert("El Cambio de Pesos(UYU) a Dólar es: " + resultado.toFixed(2));
    }
}

function conversionArg() {
    let valor = parseInt(prompt("Ingrese Monto a Convertir: "));
    const dolar = 259.18;
    let resultado = 0;

     if (valor < 259.18) {
        alert("Monto Insuficiente para la Conversión Miníma ($259.18)");
       
    } else {
        resultado = valor / dolar;
        alert("El Cambio de Pesos(ARG) a Dólar es: " + resultado.toFixed(2));
    }
}

function conversionChi() {
    let valor = parseInt(prompt("Ingrese Monto a Convertir: "));
    const dolar = 800;
    let resultado = 0;

     if (valor < 800) {
        alert("Monto Insuficiente para la Conversión Miníma ($800)");
       
    } else {
        resultado = valor / dolar;
        alert("El Cambio de Pesos(CHI) a Dólar es: " + resultado.toFixed(2));
    }
}

alert("Bienvenido a Nuestra Casa de Cambio.")

let moneda = prompt("Elegí la Moneda en la Cual Realizar el Cambio: ARG, UYU o CHI.");

while(moneda != "ESC" ){
   switch (moneda) {
       case "ARG":
            alert("El Cambio se Realizara en Peso Argentino.");
            conversionArg()
            alert("Cambio Realziado con Exito, Gracias por Realizar su Transacción con Nosotros.")
            break;
        case "UYU":
            alert("El Cambio se Realizara en Peso Uruguayo.");
            conversionUyu()
            alert("Cambio Realziado con Exito, Gracias por Realizar su Transacción con Nosotros.")
            break;
        case "CHI":
            alert("El Cambio se Realizara en Peso Chileno.")
            conversionChi()
            alert("Cambio Realziado con Exito, Gracias por Realizar su Transacción con Nosotros.")
       default:
           alert("La Moneda no está Registrada.")
           break;
   }
   moneda = prompt("Elegí la Moneda en la Cual Realizar el Cambio: ARG, UYU o CHI.");
}

