import {makeObservable, observable, action} from 'mobx';
class TodoState {
  list = [
    {
      id: 1,
      name: 'Task of the day #1',
    },
    {
      id: 2,
      name: 'Task of the day #2',
    },
    {
      id: 3,
      name: 'Task of the day #3',
    },
    {
      id: 4,
      name: 'Task of the day #4',
    },
    {
      id: 5,
      name: 'Task of the day #5',
    },
  ];
  constructor() {
    makeObservable(this, {
      list: observable,
      addTask: action,
      updateTask: action,
      removeTask: action,
    });
  }

  addTask(taskName) {
    this.list.push({
      id: Date.now(),
      name: taskName,
    });
  }

  updateTask(idTask, taskName) {
    this.list.map((item) => {
      if (item.id === idTask) {
        item.name = taskName;
      }
      return item;
    });
  }

  removeTask(idTask) {
    this.list = this.list.filter((item) => item.id !== idTask);
  }
}

export default new TodoState();
