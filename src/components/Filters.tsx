import { Component } from 'react';

import { FilterState } from './App';

interface FilterProps {
  onSetActiveFilter: (text: FilterState) => void;
  activeFilter: FilterState;
}

export class Filters extends Component<FilterProps> {
  private filtersMap = [
    {
      label: 'All',
      value: FilterState.ALL,
    },
    {
      label: 'Active',
      value: FilterState.ACTIVE,
    },
    {
      label: 'Complete',
      value: FilterState.COMPLETE,
    },
  ];

  constructor(props: FilterProps) {
    super(props);
  }

  render() {
    return (
      <div className="todo-filters">
        {this.filtersMap.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => this.props.onSetActiveFilter(value)}
            className={value === this.props.activeFilter ? 'active-button' : ''}>
            {label}
          </button>
        ))}
      </div>
    );
  }
};

