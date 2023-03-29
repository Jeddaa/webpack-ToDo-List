import './style.css';

const toDoContainer = document.querySelector('.to-do');

const tasks = [
  {
    index: 1,
    description: 'Wash plates',
    completed: false,
  },
  {
    index: 2,
    description: 'Grocery shopping',
    completed: false,
  },
  {
    index: 3,
    description: 'meal preparation',
    completed: false,
  },
];

const displayTask = () => {
  let finalHtml = '';
  tasks.forEach((task) => {
    const eachTask = `
    <li>
    <div>
    <input type="checkbox" id="${task.index}" name='' value="${task.completed}">
    <input class='task-desc' name='' value="${task.description}">
    </div>
    <i class="fa fa-ellipsis-v dots" aria-hidden="true" type="button" id="${task.index}"></i>
    <i class="fa fa-trash-o trash" aria-hidden="true" type="button" id="${task.index}"></i>
    </li>
    `;
    finalHtml += eachTask;
  });
  toDoContainer.innerHTML = finalHtml;
};

window.addEventListener('load', displayTask);
