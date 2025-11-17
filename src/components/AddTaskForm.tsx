import { Component } from "react";

interface InputValueState {
  inputValue: string;
}

interface AddFormProps {
  onAddTask: (text: string) => void;
}

export class AddTaskForm extends Component<AddFormProps, InputValueState> {
  constructor(props: AddFormProps) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  submitTask = (e: React.FormEvent<HTMLFormElement>) => {
    const { inputValue } = this.state;
    e.preventDefault();
    this.props.onAddTask(inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <form className="todo-form" onSubmit={(e) => this.submitTask(e)}>
        <input
          type="text"
          name="task"
          className="todo-form__input"
          placeholder="add tour task here.."
          value={inputValue}
          onChange={this.onValueChange}
        />
        <button type="submit" title="add-task">
          Add
        </button>
      </form>
    );
  }
};