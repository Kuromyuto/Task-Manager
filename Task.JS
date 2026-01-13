let tasks = [
  { id: 1, description: 'comprar pão', checked: false },
  { id: 2, description: 'passear', checked: false },
  { id: 3, description: 'cozinhar', checked: false },
]

const createTaskListItem = (task, checkbox) => {
  const li = document.createElement('li');
    const checkbox = getCheckboxInput(task);

    li.id = task.id;
    li.appendChild(checkbox)
    list.appendChild(li)

    return li
}

const getCheckboxInput = ({ id, description, checked }) => {
  const checkbox = document.createElement('input');
  const label = document.createElement('label');
  const wrapper = document.createElement('div');
  const checkboxId = `${id}-checkbox`;

  checkbox.type = 'checkbox';
  checkbox.id = checkboxId;
  checkbox.checked = checked || false;

  label.textContent = description;
  label.htmlFor = checkboxId;

  wrapper.className = 'checkbox-label-container';
  wrapper.appendChild(checkbox);
  wrapper.appendChild(label);

  return wrapper;
}

const getNewTaskId = () => {
  const lastId = tasks[tasks.length - 1]?.id;
  return lastId ? lastId + 1 : 1;
}

const getNewTaskData = (event) => {
    const description = event.target.elements.description.value;
  const id = getNewTaskId();

  return {description, id}
  
}

const createTask = (event) => {
  event.preventDefault();
  
  const newTaskData = getNewTaskData(event)
  const {id, description} = NewTaskData;

  const checkbox = getCheckboxInput(newTaskData)
  console.log(lastId)

}

window.onload = function () {
  const form = this.document.getElementById('create-todo-form');
  form.addEventListener('submit', createTask)
  const list = document.getElementById('todo-list');

  tasks.forEach((task) => {
    const li = document.createElement('li');
    // const button = this.document.createElement('button')
    const checkbox = getCheckboxInput(newTaskData)
    createTaskListItem(newTaskData, checkbox)


    tasks = [
      ...tasks,
      {id: newTaskData.id, description: newTaskData.description, checked: false}]
    // li.appendChild(button)

    li.id = task.id;
    li.appendChild(checkbox);
    list.appendChild(li);
  });
}
