let addToDoBtn = document.getElementById('addToDo');
let inputField = document.getElementById('inputField');
let toDoList = document.getElementById('toDoList');

let maxHeight = 450;
let editingTask = null;

function addInToDo() {
    if(toDoList.scrollHeight >= maxHeight) return

    if(inputField.value !== "") {

        if(editingTask) {
            editingTask.innerText = inputField.value;
            inputField.value = ""; 
            editingTask = null;
            addToDoBtn.innerText = "Add";
            return
        }    

        let toDoListWrap = document.createElement('div');
        toDoListWrap.classList.add('toDoListWrap');

        let paragraph = document.createElement('p');
        paragraph.classList.add('toDoItem');
        paragraph.innerText = inputField.value;

        let del = document.createElement('span');
        del.innerHTML = '<img src="./img/close20.png" alt="">';
        del.classList.add('.delete-btn');

        let edit = document.createElement('span');
        edit.innerHTML = '<img src="./img/edit.png" alt="">';
        edit.classList.add('edit-btn');


        del.addEventListener('click', () => {
            toDoList.removeChild(toDoListWrap)
        });

        
        edit.addEventListener('click', () => {
               addToDoBtn.innerText = 'Save'
               inputField.value = paragraph.innerText;
               editingTask = paragraph      
        });

        toDoListWrap.appendChild(paragraph);
        toDoListWrap.appendChild(edit);
        toDoListWrap.appendChild(del);
        toDoList.appendChild(toDoListWrap);    
        inputField.value = "";
    }
}



addToDoBtn.addEventListener('click', addInToDo);