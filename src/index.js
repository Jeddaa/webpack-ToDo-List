import './style.css';
import displayTask from './modules/displayTask.js';
import removeTask from './modules/removeTask.js';

const Container = document.querySelector('.to-do');
const input = document.querySelector('.add-task');
const form = document.querySelector('.form');

let tasks = [];

function savedTasks() {
  if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
}
savedTasks();

const addTask = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    savedTasks();
    if (input.value !== '') {
      if (tasks.length > 0) {
        tasks.push({
          description: input.value,
          index: tasks[tasks.length - 1].index + 1,
          completed: false,
        });
      } else {
        tasks.push({
          description: input.value,
          index: 1,
          completed: false,
        });
      }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    savedTasks();
    displayTask(tasks, Container);
    removeTask(tasks, Container, displayTask);
    input.value = '';
  });
};

addTask();
displayTask(tasks, Container);
removeTask(tasks, Container, displayTask);
