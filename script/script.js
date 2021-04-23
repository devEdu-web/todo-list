let input = document.getElementById("toDo");
let addBtn = document.getElementById("add");
let deleteBtn = document.getElementById("delete");
let clearBtn = document.getElementById("clear");
let viewTasks = document.getElementById("taskList");
let tasks = {tasks: []};

function loadTasksOnScreen() {
    let taskParsed = JSON.parse(localStorage.getItem("allTasks"));
    if(taskParsed !== null) {
        for(let i = 0; i < taskParsed.tasks.length; i++) {
            viewTasks.innerHTML += `<li><input type="checkbox">${taskParsed.tasks[i]}</li>`;
        }
    }

}


function insertTask() {

    viewTasks.innerHTML += `<li><input type="checkbox"> ${input.value}</li>`;

    if(input.value == '') {
        alert("Por favor, escreva uma tarefa para poder adicioná-la!!");
    }
    else {
        if(localStorage.getItem("allTasks") == null) {
            tasks.tasks.push(input.value);
            localStorage.setItem("allTasks", JSON.stringify(tasks));
        }
        else {
            let tasksParsed = JSON.parse(localStorage.getItem("allTasks"));
            tasksParsed.tasks.push(input.value);
            localStorage.setItem("allTasks", JSON.stringify(tasksParsed));
        }
    }

}

function deleteTasks() {
    let markedTasks = document.querySelectorAll("input[type='checkbox']")
    // console.log(markedTasks)

    for(let i = 0; i < markedTasks.length;i++) {
        if(markedTasks[i].checked == true) {
            let parse = JSON.parse(localStorage.getItem("allTasks"));
            let inputFather = markedTasks[i].parentElement;
            let getText = markedTasks[i].parentElement.innerHTML;
            let getIndex = parse.tasks.indexOf(getText);
            parse.tasks.splice(getIndex, 1);
            localStorage.setItem("allTasks", JSON.stringify(parse));
            inputFather.innerHTML = '';
        }
    }
}

function clearAllTasks() {
    let tasks = document.getElementsByTagName("li");
    localStorage.clear();
    for(let i = 0; i < tasks.length; i++) {
        tasks[i].innerHTML = '';
    }

}