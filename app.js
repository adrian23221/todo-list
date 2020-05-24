//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


//functions

function addTodo(event) {
    //prevent form from submitting
    event.preventDefault()
    console.log("Hello")
    //Todo DIV
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo")
    //Create Li
    const newToDo = document.createElement("li");
    newToDo.innerHTML = todoInput.value;
    newToDo.classList.add('todo-item');
    toDoDiv.appendChild(newToDo);
    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    toDoDiv.appendChild(completedButton);
    //trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    toDoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(toDoDiv);
    //clear todo input value
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    //Delete todo
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function () {
            todo.remove();
        })
    }

    // check mark
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}