function hello() {
    var name = document.getElementById("firstname").value;
    alert `Hola ${name}`
}

function calc() {
    const num1 = prompt('Ingrese primer numero:')
    const num2 = prompt('Ingrese segundo numero:')
    sum(num1, num2)
}

function sum(n1, n2) {
    let result
    var n1 = Number(n1)
    var n2 = Number(n2)
    result = n1 + n2
    console.log("Result " + result);
}

function promedio() {
    var number1 = document.getElementById("n1").value;
    var number2 = document.getElementById("n2").value;
    var promedio = (parseFloat(number1) + parseFloat(number2)) / 2;
    document.getElementById('promedio').innerHTML = promedio;
    console.log(promedio)
}