import { Component } from 'react';

import { FilterState } from './App';

interface FilterProps {
  onSetActiveFilter: (text: FilterState) => void;
}

export class Filters extends Component<FilterProps> {
  constructor(props: FilterProps) {
    super(props);
  }

  render() {
    return (
      <div className="todo-filters">
        <button
          onClick={(e) => this.props.onSetActiveFilter(e.currentTarget.title as FilterState)}
          className="filter-button"
          title="all">
          All
        </button>
        <button
          onClick={(e) => this.props.onSetActiveFilter(e.currentTarget.title as FilterState)}
          className="filter-button"
          title="active">
          Active
        </button>
        <button
          onClick={(e) => this.props.onSetActiveFilter(e.currentTarget.title as FilterState)}
          className="filter-button"
          title="complete">
          Complete
        </button>
      </div>
    );
  }
};
