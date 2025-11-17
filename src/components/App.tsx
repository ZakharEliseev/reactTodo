import { Component } from 'react';

import { AddTaskForm } from './AddTaskForm';
import { Filters } from './Filters';
import { Paginator } from './Paginator';
import { TaskItem } from './TaskItem';

const INITIAL_PAGE: number = 1;
const TASK_PER_PAGE: number = 5;

export enum FilterState {
  ALL = 'all',
  COMPLETE = 'complete',
  ACTIVE = 'active',
}

interface Task {
  id: number;
  text: string;
  isComplete: boolean;
}

interface TaskListState {
  list: Task[];
  activeFilter: FilterState;
  currentPage: number;
  taskPerPage: number;
}

export class App extends Component<{}, TaskListState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      list: [],
      activeFilter: FilterState.ALL,
      currentPage: INITIAL_PAGE,
      taskPerPage: TASK_PER_PAGE,
    };
  }

  addTask = (taskText: string) => {
    this.setState((prevState) => ({
      list: [...prevState.list, { id: Date.now(), text: taskText, isComplete: false }],
    }));
  };

  deleteTask = (id: number) => {
    this.setState((prevState) => ({
      list: prevState.list.filter((task) => task.id !== id),
    }));
  };

  toggleStatusTask = (id: number) => {
    this.setState((state) => ({
      list: state.list.map((task) => ({
        ...task,
        isComplete: task.id === id ? !task.isComplete : task.isComplete,
      })),
    }));
  };

  setActiveFilter = (filterName: FilterState) => {
    this.setState({
      activeFilter: filterName,
      currentPage: INITIAL_PAGE,
    });
  };

  getFilteredTasks = (): Task[] => {
    const { list, activeFilter } = this.state;
    if (activeFilter === FilterState.ALL) {
      return list;
    }
    return list.filter((task) =>
      activeFilter === FilterState.COMPLETE ? task.isComplete : !task.isComplete,
    );
  };

  getPaginatedTasks = (list: Task[]): Task[] => {
    const { currentPage, taskPerPage } = this.state;
    const start = (currentPage - INITIAL_PAGE) * taskPerPage;
    const end = currentPage * taskPerPage;
    return list.slice(start, end);
  };

  setCurrentPage = (page: number) => {
    this.setState({
      currentPage: page,
    });
  };

  render() {
    const filteredTasks = this.getFilteredTasks();
    const totalPages = Math.ceil(filteredTasks.length / this.state.taskPerPage);
    const paginatedTask = this.getPaginatedTasks(filteredTasks);

    return (
      <>
        <h1 className="header">ToDo</h1>
        <AddTaskForm onAddTask={this.addTask} />
        <ul className="todo-list">
          {paginatedTask.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              text={task.text}
              onDelete={this.deleteTask}
              onComplete={this.toggleStatusTask}
              isComplete={task.isComplete}
            />
          ))}
        </ul>
        <Filters onSetActiveFilter={this.setActiveFilter} activeFilter={this.state.activeFilter}/>
        <Paginator totalPages={totalPages} onSetCurrentPage={this.setCurrentPage} currentPage={this.state.currentPage}/>
      </>
    );
  }
}
