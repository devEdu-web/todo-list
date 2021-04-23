let input = document.getElementById("toDo");
let addBtn = document.getElementById("add");
let deleteBtn = document.getElementById("delete");
let clearBtn = document.getElementById("clear")
let viewTasks = document.getElementById("taskList")
let tasks = {tasks: []}


function loadTasksOnScreen() {
    let taskParsed = JSON.parse(localStorage.getItem("allTasks"))

    if(taskParsed !== null) {
        for(let i = 0; i < taskParsed.tasks.length; i++) {
            viewTasks.innerHTML += `<li><input type="checkbox">${taskParsed.tasks[i]}</li>`
            
        }
    }

}





function insertTask() {

    viewTasks.innerHTML += `<li><input type="checkbox"> ${input.value}</li>`

    if(input.value == '') {
        alert("Por favor, escreva uma tarefa para poder adicioná-la!!")
    }
     else {

        if(localStorage.getItem("allTasks") == null) {
            tasks.tasks.push(input.value)
            localStorage.setItem("allTasks", JSON.stringify(tasks))
            // console.log(localStorage.getItem("allTasks"))
        }
        else {
            let tasksParsed = JSON.parse(localStorage.getItem("allTasks"))
            tasksParsed.tasks.push(input.value)
            localStorage.setItem("allTasks", JSON.stringify(tasksParsed))
        }
    }

    // console.log(localStorage.getItem("allTasks"))

}
