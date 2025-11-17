import { Component } from "react";


interface TaskItemProps {
  id: number;
  text: string;
  isComplete: boolean;
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
}
export class TaskItem extends Component<TaskItemProps> {
  constructor(props: TaskItemProps) {
    super(props);
  }

  render() {
    const { id, text, onDelete, onComplete, isComplete } = this.props;
    const deleteBtn = <button onClick={() => onDelete(id)}>Delete</button>;
    const completeBtn = <button onClick={() => onComplete(id)}>Complete</button>;
    const completeTaskClass = isComplete ? 'todo-list__complete-task' : '';
    return (
      <li>
        {deleteBtn}
        <p className={completeTaskClass}>{text}</p>
        {completeBtn}
      </li>
    );
  }
}