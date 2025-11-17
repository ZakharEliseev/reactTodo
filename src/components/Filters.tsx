import { Component } from 'react';

import { FilterState } from './App';

interface FilterProps {
  onSetActiveFilter: (text: FilterState) => void;
  activeFilter: FilterState;
}

export class Filters extends Component<FilterProps> {
  constructor(props: FilterProps) {
    super(props);
  }

  toggleActiveButton = (filter: string): string => {
    return filter === this.props.activeFilter ? 'active-button' : '';
  }

  render() {
    return (
      <div className="todo-filters">
        <button
          onClick={(e) => this.props.onSetActiveFilter(e.currentTarget.title as FilterState)}
          className={this.toggleActiveButton(FilterState.ALL)}
          title="all">
          All
        </button>
        <button
          onClick={(e) => this.props.onSetActiveFilter(e.currentTarget.title as FilterState)}
          className={this.toggleActiveButton(FilterState.ACTIVE)}
          title="active">
          Active
        </button>
        <button
          onClick={(e) => this.props.onSetActiveFilter(e.currentTarget.title as FilterState)}
          className={this.toggleActiveButton(FilterState.COMPLETE)}
          title="complete">
          Complete
        </button>
      </div>
    );
  }
};
