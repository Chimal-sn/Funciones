function areaTriangulo(base, altura) {
    return base * altura;
}

let area;
area = areaTriangulo(10, 12);
console.log("El area del triangulo es: " + area);

function mayor(a, b, c) {
    const multiplicacion = a * b * c;
    let mayor = 0;
    if (a > b && a > c) {
        mayor = a;
    } else if (b > a && b > c) {
        mayor = b;
    } else if (c > a && c > b) {
        mayor = c;
    }
    const resultado = "El resultado de la multiplicacion es " + multiplicacion + " y el numero mayor es " + mayor;
    return resultado;
}

let multiplicacion = mayor(5, 10, 11);
console.log(multiplicacion);

function saludo(nombre) {
    console.log("Hola " + nombre + " ¿como has estado?");
}

saludo("Jorge")