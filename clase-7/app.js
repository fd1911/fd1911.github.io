let textnuevatarea = document.getElementById('listatarea')
let listadotarea = document.getElementById('tasklist')

let deletebtn;
let taskgrill = ""
let task = []

function addtask() {
    task.push(textnuevatarea.value)
    textnuevatarea.value = ""
    textnuevatarea.focus()
    actualizargrilla()
}

function actualizargrilla() {
    for (var i in task) {
        deletebtn = "<td><button onclick='addtask()'>+</button></td>"
        // todo mal no entiendo nada de html por ser del backend
        taskgrill += "<tr><td>" + task[i] + "</tr></td>"
    }
    listadotarea.innerHTML = taskgrill
    taskgrill = ""
}

function deletetask(i) {
    task.splice(i,1)
    actualizargrilla()
}
