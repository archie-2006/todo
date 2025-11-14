const textarea = document.querySelector('textarea')
 const addbtn = document.getElementById('addbtn')
 const TodoContainer = document.querySelector('.TodoContainer')

//  console.log(TodoContainer.innerHTML)
let todolist = []

 function initialLoad() {
    if (!localStorage.getItem('todos')) {return}
    todolist=JSON.parse(localStorage.getItem('todos')).todolist
    update()
 
}

 initialLoad()
function addTodo() {
   const todo = textarea.value
    if (!todo) {
        return
    }
     console.log('Add todo: ', textarea.value)
     todolist.push(todo)
     textarea.value = ''
     update()
}
function editTodo(index) {
    textarea.value = todolist[index]
    todolist=todolist.filter((element, elementIndex) => {
    if (index===elementIndex) { return false }
    return true
    })
    update()
}

function delTodo(index) {
    
    todolist=todolist.filter((element, elementIndex) => {
    if (index===elementIndex) { return false }
    return true
    })
    update()
}
 

function update() {
    let newInnerHTML = ''
    todolist.forEach((todoElement, todoIndex) => {
        newInnerHTML += ` 
         <div class="todo">
            <p style="font-family:PT serif;">${todoElement}</p>
            <div class="buttoncontainer">
                <button class="btnicon" onclick="editTodo(${todoIndex})"> <i class="fa-solid fa-file-pen"></i></button>
        
            
                <button class="btnicon" onclick="delTodo(${todoIndex})"><i class="fa-solid fa-trash"></i> </button>
           </div>

        </div>
    `
    })
    
    TodoContainer.innerHTML = newInnerHTML

    //local storage for the browser
    localStorage.setItem('todos',JSON.stringify({ todolist }))
}

addbtn.addEventListener('click',addTodo)