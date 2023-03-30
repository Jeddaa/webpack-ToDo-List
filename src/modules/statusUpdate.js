const statusUpdate = (displayTask, removeTask, tasks, Container, task, check) => {
  check.addEventListener('change', () => {
    const newList = tasks.map((item) => {
      if (item.index === task.index) {
        return {
          description: item.description,
          index: item.index,
          completed: !item.completed,
        };
      }
      return item;
    });
    tasks = newList;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTask(tasks, Container);
    removeTask(tasks, Container, displayTask);
  });
};
export default statusUpdate;
