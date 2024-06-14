const tasks = [];

const form = document.querySelector("#new-task-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const description = form.elements["note"].value;
    if (description !== "") {
        const newTask = { description: description };
        tasks.push(newTask);
    } else {
        alert("No se puede crear una tarea vacia");
    }

    form.reset();
    renderTasks();
}

function renderTasks() {
    const div = document.querySelector("#notes-container");
    div.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const taskDiv = createElement(task);
        div.append(taskDiv);
    }
}

function createElement(task) {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const button = document.createElement("button");

    div.className = "note";
    p.textContent = task.description;
    button.textContent = "Delete";
    button.addEventListener("click", function(){
        const index = tasks.indexOf(task);
        tasks.splice(index, 1);
        renderTasks();
    });

    div.append(p, button);

    return div;
}

renderTasks();
