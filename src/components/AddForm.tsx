import { Component } from "react";

interface InputValueState {
  inputValue: string;
}

interface AddFormProps {
  onAddTask: (text: string) => void;
}

export class AddForm extends Component<AddFormProps, InputValueState> {
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

  render() {
    const { inputValue } = this.state;
    return (
      <>
        <form
          className="todo-form"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onAddTask(inputValue);
            this.setState({ inputValue: '' });
          }}>
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
      </>
    );
  }
};