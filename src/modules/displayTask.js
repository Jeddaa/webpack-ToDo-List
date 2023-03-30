const displayTask = (tasks, Container) => {
  let finalHtml = '';
  tasks.forEach((task) => {
    const eachTask = `
    <li>
    <div class="input-div">
    <input ${task.completed ? 'checked' : ''} type="checkbox" class="checkboxed" id="complete-${task.index}">
    <input class='desc task-desc-${task.index}' name='' value="${task.description}">
    </div>
    <i class="fa fa-ellipsis-v dots-${task.index}" aria-hidden="true" type="button" id="${task.index}"></i>
    <i class="fa fa-trash-o trash-${task.index}" aria-hidden="true" type="button" id="${task.index}"></i>
    </li>
    `;
    finalHtml += eachTask;
  });
  Container.innerHTML = finalHtml;
};

export default displayTask;
