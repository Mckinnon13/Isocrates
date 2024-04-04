
const form = document.querySelector("#task-form");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");
const clrbtn = document.querySelector(".clear-tasks");
const collection = document.querySelector(".collection");

function execute(){
    document.addEventListener("DOMContentLoaded", getTasks);
    form.addEventListener("submit", runsome);
    collection.addEventListener("click",runsome2);
    clrbtn.addEventListener("click",runsome3);
    filter.addEventListener("keyup",runsome4);
}

function getTasks()
{
    if(localStorage.getItem("tasks")===null)
    {
        tasks = [];
    }
    else
    {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.forEach(function (tasks)
    {
        const newelement = document.createElement("li");
        newelement.className = "collection-item";
        newelement.appendChild(document.createTextNode(task));

        const link = document.createElement("a");
        link.className = "delete-item secondary-content";
        link.innerHTML = '<i class="fa fa-remove"></i>';
        newelement.appendChild(link);
        collection.appendChild(newelement);
     });
}

     function runsome(e){
        const newelement = document.createElement("li");
        newelement.className = "collection-item";
        newelement.appendChild(document.createTextNode(taskInput.value));

        const link = document.createElement("a");
        link.className = "delete-item secondary-content";
        link.innerHTML = '<i class= "fa fa-remove"> </i>';
        newelement.appendChild(link);
        collection.appendChild(newelement);

        storeTask(taskInput.value);
        taskInput.value = "";
        e.preventDefault();
     }    


function storeTask(task){
    let tasks;
    if(localStorage.getItem("tasks")===null){
        tasks=[];
    }
    else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push(task);
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function runsome2(e){
    if(e.target.parentElement.classList.contains("delete-item"))
        if(confirm("Are you sure")){
            e.target.parentElement.parentElement.remove();
            removetaskfromstorage(e.target.parentElement.parentElement);
        }
}

function removetaskfromstorage(){
    let tasks;
    if(localStorage.getItem("tasks")===null){
        tasks=[];
    }
    else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }       
    tasks.forEach(function (task, index){
        if(taskitem.textContent === task){
            tasks.splice(index,1);
        };
    });
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function runsome3(e){
    while(collection.firstChild){
        collection.removeChild(collection.firstChild);
    }
    clearTaskfromlocal();
}

function clearTaskfromlocal(){
    localStorage.clear();
}

function runsome4(e){
    const j = e.target.value.toLowerCase();
    document.querySelectorAll(".collection-item").forEach(function (m){
        const c = m.firstChild.textContent;
        if(c.toLowerCase().indexOf(j)!=-1){
            m.style.display = "block";
        }else{
            m.style.display = "none";
        }
    })
}
execute();