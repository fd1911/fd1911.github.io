hellothere = "Welcome to CoderHouse"
console.log(hellothere);

function sum() {
    var n1 = parseInt(prompt("Insert a number:"));
    var n2 = parseInt(prompt("Insert the second num:"));
    console.log("Resultado: " + (n1 + n2))

}

var days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

function dayarray() {
    for (var i = 0; i < days.length; i++) {
        console.log(days[i]);
    }

}

function numpick() {
    var n = parseInt(prompt("Pick a number beetwheen 0 to 9."))
    switch (n) {
        case 0:
            console.log("Picked " + n);
            break;

        case 1:
            console.log("Picked " + n);
            break;

        case 2:
            console.log("Picked " + n);
            break;

        case 3:
            console.log("Picked " + n);
            break;

        case 4:
            console.log("Picked " + n);
            break;

        case 5:
            console.log("Picked " + n);
            break;

        case 6:
            console.log("Picked " + n);
            break;

        case 7:
            console.log("Picked " + n);
            break;

        case 8:
            console.log("Picked " + n);
            break;

        case 9:
            console.log("Picked " + n);
            break;
        default:
            alert("Seleccionaste cualquier cosa che....")
            console.warn("You didn't specified a number or your imput is out of range");
    }
}