import { Component } from 'react';

import { AddForm } from './AddForm';
import { Filters } from './Filters';
import { Paginator } from './Paginator';
import { TaskItem } from './TaskItem';

interface Task {
  id: number;
  text: string;
  isComplete: boolean;
}

interface TaskListState {
  list: Task[];
  activeFilter: string;
  currentPage: number;
  taskPerPage: number;
}

export const TaskList = class extends Component<{}, TaskListState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      list: [],
      activeFilter: 'all',
      currentPage: 1,
      taskPerPage: 5,
    };
  }

  addTask = (taskText: string) => {
    this.setState((state) => ({
      list: [...state.list, { id: Date.now(), text: taskText, isComplete: false }],
    }));
  };

  deleteTask = (id: number) => {
    this.setState((state) => ({
      list: [...state.list.filter((task) => task.id !== id)],
    }));
  };

  toggleStatusTask = (id: number) => {
    this.setState((state) => ({
      list: state.list.map((task) => {
        if (task.id === id) {
          return { ...task, isComplete: !task.isComplete };
        }
        return task;
      }),
    }));
  };

  setActiveFilter = (filterName: string) => {
    this.setState(() => ({
      activeFilter: filterName,
      currentPage: 1
    }));
  };

  getFilteredTasks = (): Task[] => {
    const { list } = this.state;
    const { activeFilter } = this.state;
    switch (activeFilter) {
      case 'complete': {
      return list.filter((task) => task.isComplete === true);
      }
      case 'active': {
        return list.filter((task) => task.isComplete === false);
      }
      default:
        return list
    }
  };

  getPaginatedTasks = (list: Task[]): Task[] => {
    const {currentPage, taskPerPage} = this.state;
    const start = (currentPage-1) * taskPerPage;
    const end = currentPage * taskPerPage;
    return list.slice(start, end);
  };

  setCurrentPage = (page: number) => {
    this.setState(() => ({
      currentPage: page,
    }))
  }

  render() {
    const filteredTasks = this.getFilteredTasks();
    const totalPages = Math.ceil(filteredTasks.length / this.state.taskPerPage);
    const paginatedTask = this.getPaginatedTasks(filteredTasks);
    const taskItems = paginatedTask.map(task => {
      return <TaskItem
        key={task.id}
        id={task.id}
        text={task.text}
        onDelete={this.deleteTask}
        onComplete={this.toggleStatusTask}
        isComplete={task.isComplete}
      />
    })

    return (
      <>
        <AddForm onAddTask={this.addTask} />
        <ul className="todo-list">{taskItems}</ul>
        <Filters onSetActiveFilter={this.setActiveFilter} />
        <Paginator
          currentPage={this.state.currentPage}
          totalPages={totalPages}
          onSetCurrentPage={this.setCurrentPage}
        />
      </>
    );
  }
};
