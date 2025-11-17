import { Component } from 'react';


interface FilterProps {
  onSetActiveFilter: (text: string) => void;
}

export const Filters = class extends Component<FilterProps> {
  constructor(props: FilterProps) {
    super(props);
  }

  render() {
    return (
      <div className="todo-filters">
        <button
          onClick={(e) => this.props.onSetActiveFilter(e.currentTarget.title)}
          className="filter-button"
          title="all">
          All
        </button>
        <button
          onClick={(e) => this.props.onSetActiveFilter(e.currentTarget.title)}
          className="filter-button"
          title="active">
          Active
        </button>
        <button
          onClick={(e) => this.props.onSetActiveFilter(e.currentTarget.title)}
          className="filter-button"
          title="complete">
          Complete
        </button>
      </div>
    );
  }
};
