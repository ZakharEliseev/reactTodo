import { Component } from 'react';

import { connect } from 'react-redux';

import {
  setCurrentPage,
  setFilter,
  todoActionDelete,
  todoActionsAdd,
  todoCompleteTask,
} from '../store/actions/todoActions';
import { AppProps, FilterState, Task } from '../types/models';

import { AddTaskForm } from './AddTaskForm';
import { Filters } from './Filters';
import { Paginator } from './Paginator';
import { TaskItem } from './TaskItem';

export class App extends Component<AppProps> {
  private INITIAL_PAGE: number = 1;

  // constructor(props: {}) {
  //   super(props);
  //   this.state = {
  //     list: [],
  //     activeFilter: FilterState.ALL,
  //     currentPage: this.INITIAL_PAGE,
  //     taskPerPage: this.TASK_PER_PAGE,
  //   };
  // }

  handleAddTask = (taskText: string) => {
    this.props.todoActionsAdd(taskText);
    // this.setState((prevState) => ({
    //   list: [...prevState.list, { id: Date.now(), text: taskText, isComplete: false }],
    // }));
  };

  handleDeleteTask = (id: number) => {
    this.props.todoActionDelete(id);
    // this.setState((prevState) => ({
    //   list: prevState.list.filter((task) => task.id !== id),
    // }));
  };

  toggleStatusTask = (id: number) => {
    this.props.todoCompleteTask(id);
    // this.setState((state) => ({
    //   list: state.list.map((task) => ({
    //     ...task,
    //     isComplete: task.id === id ? !task.isComplete : task.isComplete,
    //   })),
    // }));
  };

  handleSetActiveFilter = (filterName: FilterState) => {
    this.props.setFilter(filterName);
    this.props.setCurrentPage(this.INITIAL_PAGE);
    // this.setState({
    //   activeFilter: filterName,
    //   currentPage: this.INITIAL_PAGE,
    // });
  };

  getFilteredTasks = (): Task[] => {
    const { list, activeFilter } = this.props;
    if (!list || !Array.isArray(list)) {
      return [];
    }

    if (activeFilter === FilterState.ALL) {
      return list;
    }
    return list.filter((task) =>
      activeFilter === FilterState.COMPLETE ? task.isComplete : !task.isComplete,
    );
  };

  getPaginatedTasks = (list: Task[]): Task[] => {
    const { currentPage, taskPerPage } = this.props;
    const start = (currentPage - this.INITIAL_PAGE) * taskPerPage;
    const end = currentPage * taskPerPage;
    return list.slice(start, end);
  };

  handleSetCurrentPage = (page: number) => {
    this.props.setCurrentPage(page);
    // this.setState({
    //   currentPage: page,
    // });
  };

  render() {
    const filteredTasks = this.getFilteredTasks();
    const totalPages = Math.ceil(filteredTasks.length / this.props.taskPerPage);
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
          activeFilter={this.props.activeFilter}
        />
        <Paginator
          totalPages={totalPages}
          onSetCurrentPage={this.handleSetCurrentPage}
          currentPage={this.props.currentPage}
        />
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    list: state.list,
    activeFilter: state.activeFilter,
    currentPage: state.currentPage,
    taskPerPage: state.taskPerPage,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  todoActionsAdd: (text: string) => dispatch(todoActionsAdd(text)),
  todoActionDelete: (id: number) => dispatch(todoActionDelete(id)),
  todoCompleteTask: (id: number) => dispatch(todoCompleteTask(id)),
  setFilter: (filter: FilterState) => dispatch(setFilter(filter)),
  setCurrentPage: (page: number) => dispatch(setCurrentPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
