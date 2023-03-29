import statusUpdate from './statusUpdate.js';

const removeTask = (tasks, Container, displayTask) => {
  if (!tasks) {
    return;
  }
  tasks.forEach((task) => {
    const dots = document.querySelector(`.dots-${task.index}`);
    const trash = document.querySelector(`.trash-${task.index}`);
    const desc = document.querySelector(`.task-desc-${task.index}`);
    const check = document.getElementById(`complete-${task.index}`);

    dots.addEventListener('mouseover', () => {
      dots.style.display = 'none';
      trash.style.display = 'block';
    });

    trash.addEventListener('mouseout', () => {
      trash.style.display = 'none';
      dots.style.display = 'block';
    });

    trash.addEventListener('click', () => {
      const newTasks = tasks.filter((item) => item.index !== task.index);
      for (let i = 0; i < newTasks.length; i += 1) {
        newTasks[i].index = i + 1;
      }
      tasks = newTasks;
      localStorage.setItem('tasks', JSON.stringify(tasks));
      displayTask(tasks, Container);
      removeTask(tasks, Container, displayTask);
    });

    desc.addEventListener('change', (e) => {
      const newList = tasks.map((item) => {
        if (item.index === task.index) {
          return {
            description: e.target.value,
            index: item.index,
            completed: item.completed,
          };
        }
        return item;
      });
      tasks = newList;
      localStorage.setItem('tasks', JSON.stringify(tasks));
      displayTask(tasks, Container);
      removeTask(tasks, Container, displayTask);
    });
    statusUpdate(displayTask, removeTask, tasks, Container, task, check);
  });
};
export default removeTask;
