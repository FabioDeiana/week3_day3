// Selezione degli elementi DOM
const taskInput = document.getElementById("taskInput")
const addTaskBtn = document.getElementById("addTaskBtn")
const taskList = document.getElementById("taskList")

// Funzione per creare un nuovo task
function createTaskElement(taskText) {
  const li = document.createElement("li")
  li.className = "task-item"

  const span = document.createElement("span")
  span.textContent = taskText

  // Toggle completamento al click
  span.addEventListener("click", () => {
    li.classList.toggle("completed")
  })

  const deleteBtn = document.createElement("button")
  deleteBtn.textContent = "Elimina"

  // Rimuovi task al click
  deleteBtn.addEventListener("click", () => {
    li.remove()
  })

  li.appendChild(span)
  li.appendChild(deleteBtn)
  return li
}

// Funzione per aggiungere il task alla lista
function addTask() {
  const taskText = taskInput.value.trim()

  if (taskText === "") {
    alert("Inserisci un task valido!")
    return
  }

  const taskItem = createTaskElement(taskText)
  taskList.appendChild(taskItem)

  taskInput.value = ""
  taskInput.focus() // torna al campo input
}

// Aggiunta con il bottone
addTaskBtn.addEventListener("click", addTask)

// Aggiunta con il tasto "Enter"
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask()
  }
})
