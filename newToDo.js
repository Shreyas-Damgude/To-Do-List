const container = document.querySelector(".container");
const taskList = document.querySelector(".task-list");
const addButton = document.querySelector(".button");
const taskName = document.querySelector("#text");
let listEmpty = true;
let taskElement;

// Creating the task Element
function generateTask(task) {
  return `<li>
            <div class="listContent">
                <div data-action="complete" class="currentTask">${task}</div>
                <button class="delete">
                    <ion-icon data-action="delete" name="trash-outline"></ion-icon>
                </button>
            </div>
          </li>`;
}

// Adding task into task container
function addTask() {
  if (!taskName.value) {
    alert("Enter some task!!");
    return;
  }

  if (listEmpty) {
    taskList.style.opacity = 1;
    listEmpty = false;
  }
  taskElement = document.querySelector("#list");
  taskElement.insertAdjacentHTML("beforeend", generateTask(taskName.value));
  taskName.value = "";
}

// Removing task from the container
function deleteTask(e) {
  const button = e.target;
  if (!button) return;
  const action = button.dataset.action;
  taskCompleted(action, button);
  action === "delete" && button.parentNode.parentNode.parentNode.remove();

  if (!taskElement.childElementCount) {
    taskList.style.opacity = 0;
    listEmpty = true;
  }
}

// Task completed
function taskCompleted(action, button) {
  action === "complete" && button.classList.toggle("taskCompleted");
}

// Button's function
addButton.addEventListener("click", addTask);

taskList.addEventListener("click", deleteTask);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") addTask();
});
