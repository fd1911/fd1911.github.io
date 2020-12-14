//"["Diapositivas: animaciones con JQuery","Ver Diapositivas: animaciones JQuery","Cómo controlar la velocidad de animaciones","Disparar un callBack desde una animación","Ver animación slideDown()","Ver animación slideUp()","Analizar comportamiento de slideToggle()","Practicar las animaciones JQuery sobre esta WebApp","Modificar la función removerTarea()","Ver cómo modificar CSS con JQuery","Ver Scroll de Elementos en una web","Practicar el scroll con el Proyecto acorde"]"
let textnuevatarea = $(":input")
let listadotareas = $("#listadotareas")
let buttonAdd = $("#buttonAdd")
let tablaDeTareas = $("#tablaDeTareas")
let buttonEliminar;
let grillaDeTareas = "";
let tareas = [];

function agregarTarea() {
    tareas.push(textnuevatarea.val().toString())
    localStorage.setItem("tareas", JSON.stringify(tareas))
    actualizoGrilla()
    textnuevatarea.val("")
    $(document).find(":input").focus()
}

buttonAdd.click(function () {
    agregarTarea()
})

textnuevatarea.hover(function () {
    $(this).css("background-color", "whitesmoke")
}, function () {
    $(this).css("background-color", "white")
})

function actualizoGrilla() {
    if (localStorage.tareas != undefined && localStorage.length > 0) {
        tareas = JSON.parse(localStorage.tareas)
    }
    for (var i in tareas) {
        buttonEliminar = "<button class='btn-floating button-small red waves-effect waves-light' onclick='removerTarea(" + i + ")'><i class='material-icons white-text'>delete_forever</i></button>"
        grillaDeTareas += "<tr><td>" + tareas[i] + "</td><td class='center'>" + buttonEliminar + "</td></tr>"
    }
    listadotareas.html(grillaDeTareas)
    grillaDeTareas = ""
}

function removerTarea(i) {
    tareas.splice(i, 1)
    localStorage.setItem("tareas", JSON.stringify(tareas))
    actualizoGrilla()
}

$(window).ready(function () {
    inicioTaskIt()
})

function inicioTaskIt(){
    actualizoGrilla()
    tablaDeTareas.slideDown(2000)
}