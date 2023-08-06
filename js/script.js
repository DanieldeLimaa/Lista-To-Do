//função que adiciona tarefa
function addTask(){
    //titulo da tarefa
    const taskTitle = document.querySelector("#taskTitle").value;
    if(taskTitle){
        //clonar template
        const template = document.querySelector(".template");
        const newTask = template.cloneNode(true);

        //adicionar titulo
        newTask.querySelector(".taskTitle").textContent = taskTitle;

        //remover classes desnecessárias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //adicionar tarefa na lista
        const list = document.querySelector("#taskList");
        list.appendChild(newTask);

        //adicionar evento de remover
        const removeBtn = newTask.querySelector(".removeBtn").addEventListener("click", function(){
            removeTask(this);
        });

        //adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector(".doneBtn").addEventListener("click", function(){
            completeTask(this);
        });

        //limpar texto
        document.querySelector("#taskTitle").value = "";

    }
}

//função de remover tarefa
function removeTask(task){
    task.parentNode.remove(true);
}

//função de completar tarefa
function completeTask(task){
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle("done");
}


//evento de adicionar tarefa
const addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", function(e){
    e.preventDefault();
    addTask();
})