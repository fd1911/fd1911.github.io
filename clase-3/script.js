hellothere = "Welcome to CoderHouse"
console.log(hellothere);

function sum() {
    var n1 =parseInt(prompt("Insert a number:"));
    var n2 = parseInt(prompt("Insert the second num:"));
    console.log("Resultado: " +(n1 + n2))

}

var days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
function dayarray() {
    for(var i = 0; i <7; i++){
        console.log(days[i]);
    }

}
