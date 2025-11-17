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
          className={this.toggleActiveButton('all')}
          title="all">
          All
        </button>
        <button
          onClick={(e) => this.props.onSetActiveFilter(e.currentTarget.title as FilterState)}
          className={this.toggleActiveButton('active')}
          title="active">
          Active
        </button>
        <button
          onClick={(e) => this.props.onSetActiveFilter(e.currentTarget.title as FilterState)}
          className={this.toggleActiveButton('complete')}
          title="complete">
          Complete
        </button>
      </div>
    );
  }
};
