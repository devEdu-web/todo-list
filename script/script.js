let input = document.getElementById("toDo");
let addBtn = document.getElementById("add");
let deleteBtn = document.getElementById("delete");
let clearBtn = document.getElementById("clear")
let tasks = {tasks: []}

function insertTask() {
    if(input.value == '') {
        alert("Por favor, escreva uma tarefa para poder adicioná-la!!")
    } else {

        if(tasks.tasks.length == 0) {
            tasks.tasks.push(input.value)
            localStorage()
        }

        else {

        }


    }
    
}
