import { Component } from 'react';

import { AddFormProps, InputValueState } from '../Types/models';

export class AddTaskForm extends Component<AddFormProps, InputValueState> {
  constructor(props: AddFormProps) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleSubmitTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { inputValue } = this.state;
    this.props.onAddTask(inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <form className="todoForm" onSubmit={(e) => this.handleSubmitTask(e)}>
        <input
          type="text"
          name="task"
          className="todoFormInput"
          placeholder="add tour task here.."
          value={inputValue}
          onChange={this.handleValueChange}
        />
        <button type="submit" title="add-task">
          Add
        </button>
      </form>
    );
  }
}
