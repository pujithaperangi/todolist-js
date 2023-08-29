//variables
const addtask=document.getElementById('add-task');
const taskContainer=document.getElementById("task-container");
const inputTask=document.getElementById('input-task');

//adding event listener to the add button
addtask.addEventListener('click',function(){
    let task=document.createElement('div');  /* grand parent element*/
    task.classList.add('task');

    let li=document.createElement('li');
    li.innerText=`${inputTask.value}`; /*backtick--`${inputTask.value}`: This is an example of a template literal in JavaScript, indicated by the backticks ( ). It is used to embed expressions within a string. In this case, the expression ${inputTask.value} is being embedded.

    inputTask.value: Assuming inputTask is a reference to an HTML input element, the value property retrieves the current value entered into the input field.*/
    task.appendChild(li);

    let checkButton=document.createElement("button");
    checkButton.innerHTML='<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton=document.createElement("button");
    deleteButton.innerHTML='<i class="fa-solid fa-trash"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    if(inputTask.value===""){
        alert("please enter a task!");
    }
    else{
        taskContainer.appendChild(task);
    }

    inputTask.value="";

    checkButton.addEventListener('click',function(){
        checkButton.parentElement.style.textDecoration="line-through";
    }); 

    deleteButton.addEventListener("click",function(e){
        let target =e.target;
        target.parentElement.parentElement.remove();
    });
});