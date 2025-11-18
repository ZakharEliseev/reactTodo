import { Component } from 'react';

import { FilterState, Task, TaskListState } from '../models';

import { AddTaskForm } from './AddTaskForm';
import { Filters } from './Filters';
import { Paginator } from './Paginator';
import { TaskItem } from './TaskItem';


export class App extends Component<{}, TaskListState> {
  private INITIAL_PAGE: number = 1;
  private TASK_PER_PAGE: number = 5;

  constructor(props: {}) {
    super(props);
    this.state = {
      list: [],
      activeFilter: FilterState.ALL,
      currentPage: this.INITIAL_PAGE,
      taskPerPage: this.TASK_PER_PAGE,
    };
  }

  handleAddTask = (taskText: string) => {
    this.setState((prevState) => ({
      list: [...prevState.list, { id: Date.now(), text: taskText, isComplete: false }],
    }));
  };

  handleDeleteTask = (id: number) => {
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

  handleSetActiveFilter = (filterName: FilterState) => {
    this.setState({
      activeFilter: filterName,
      currentPage: this.INITIAL_PAGE,
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
    const start = (currentPage - this.INITIAL_PAGE) * taskPerPage;
    const end = currentPage * taskPerPage;
    return list.slice(start, end);
  };

  handleSetCurrentPage = (page: number) => {
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
        <AddTaskForm onAddTask={this.handleAddTask} />
        <ul className="todoList">
          {paginatedTask.map((task) => (
            <TaskItem
              {...task}
              key={task.id}
              onDelete={this.handleDeleteTask}
              onComplete={this.toggleStatusTask}
              isComplete={task.isComplete}
            />
          ))}
        </ul>
        <Filters
          onSetActiveFilter={this.handleSetActiveFilter}
          activeFilter={this.state.activeFilter}
        />
        <Paginator
          totalPages={totalPages}
          onSetCurrentPage={this.handleSetCurrentPage}
          currentPage={this.state.currentPage}
        />
      </>
    );
  }
}

