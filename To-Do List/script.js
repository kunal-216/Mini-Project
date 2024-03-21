let inputField = document.querySelector("#newTodo");
let addBtn = document.querySelector("#addBtn");
let todoList = document.querySelector("#todoList");

addBtn.addEventListener("click", () => {
    const todotext = inputField.value;
    if(todotext !== ""){
        const newtodoItem = document.createElement("li");
        newtodoItem.innerText = todotext ;

        const deleteTodoBtn = document.createElement("button");
        deleteTodoBtn.innerText = "X";

        deleteTodoBtn.classList.add("deleteBtn");
        deleteTodoBtn.addEventListener("click", () => {
            newtodoItem.remove();
        });

        newtodoItem.appendChild(deleteTodoBtn);
        todoList.appendChild(newtodoItem);
        inputField.value = ""
    }
});
