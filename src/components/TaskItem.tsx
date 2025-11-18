import { Component } from "react";

import { TaskItemProps } from "../models";

export class TaskItem extends Component<TaskItemProps> {
  constructor(props: TaskItemProps) {
    super(props);
  }

  render() {
    const { id, text, onDelete, onComplete, isComplete } = this.props;
    const completeTaskClass = isComplete ? 'todo-list__complete-task' : '';
    return (
      <li>
        <button onClick={() => onDelete(id)}>Delete</button>
        <p className={completeTaskClass}>{text}</p>
        <button onClick={() => onComplete(id)}>Complete</button>
      </li>
    );
  }
}