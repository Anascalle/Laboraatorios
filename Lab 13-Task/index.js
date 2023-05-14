// Función para eliminar un comentario
function deleteComment(pos) {
    let list = localStorage.getItem("list");
    let listJson = JSON.parse(list);
    let task = listJson[pos];
  
    // Aquí realizas la lógica para eliminar el comentario
    // Por ejemplo, podrías eliminar el objeto task de la lista
    listJson.splice(pos, 1);
  
    const listStr = JSON.stringify(listJson);
    localStorage.setItem("list", listStr);
    renderAll();
  }
  
  // Función para crear una tarea nueva
function createTask() {
    const taskValue = document.getElementById("task-input").value;
  
    // Verificar si el campo de entrada está vacío
    if (taskValue.trim() === "") {
      return; // No se agrega una tarea si no hay nada escrito
    }
  
    const task = new Task(taskValue, "TODO");
    let list = localStorage.getItem("list");
  
    if (list === null) {
      list = [task];
      const listStr = JSON.stringify(list);
      localStorage.setItem("list", listStr);
    } else {
      let listJson = JSON.parse(list);
      let taskList = [];
      for (let i = 0; i < listJson.length; i++) {
        const obj = listJson[i];
        const objTask = new Task(obj.description, obj.status);
        taskList.push(objTask);
      }
      taskList.push(task);
      const listStr = JSON.stringify(taskList);
      localStorage.setItem("list", listStr);
    }
  
    renderAll();
  
    // Clear the text input box
    document.getElementById("task-input").value = "";
  }
  
  
  
  // Función para renderizar todas las tareas en las columnas correspondientes
  function renderAll() {
    const divTodo = document.getElementById("todo");
    const divDoing = document.getElementById("doing");
    const divDone = document.getElementById("done");
  
    divTodo.innerHTML = "";
    divDoing.innerHTML = "";
    divDone.innerHTML = "";
    let list = localStorage.getItem("list");
    if (list !== null) {
      let listJson = JSON.parse(list);
      for (let i = 0; i < listJson.length; i++) {
        const obj = listJson[i];
        const objTask = new Task(obj.description, obj.status);
        if (objTask .status === "TODO") {
            divTodo.innerHTML += objTask.html(i);
            } else if (objTask.status === "DOING") {
            divDoing.innerHTML += objTask.html(i);
            } else {
            divDone.innerHTML += objTask.html(i);
            }
            }
            }
            }
            
            // Función para cambiar el estado de la tarea hacia adelante
            function goForward(pos) {
            let list = localStorage.getItem("list");
            let listJson = JSON.parse(list);
            let task = listJson[pos];
            if (task.status === "TODO") {
            task.status = "DOING";
            } else if (task.status === "DOING") {
            task.status = "DONE";
            }
            
            const listStr = JSON.stringify(listJson);
            localStorage.setItem("list", listStr);
            renderAll();
            }
            
            // Función para cambiar el estado de la tarea hacia atrás
            function goBackward(pos) {
            let list = localStorage.getItem("list");
            let listJson = JSON.parse(list);
            let task = listJson[pos];
            if (task.status === "DOING") {
            task.status = "TODO";
            } else if (task.status === "DONE") {
            task.status = "DOING";
            }
            
            const listStr = JSON.stringify(listJson);
            localStorage.setItem("list", listStr);
            renderAll();
            }
            
            // Llamada inicial para renderizar las tareas almacenadas
            renderAll();
              // Clear the text input box
  document.getElementById("task-input").value = "";