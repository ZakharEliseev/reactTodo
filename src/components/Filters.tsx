import { Component } from 'react';

import { FilterProps, FilterState } from '../types/models';

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
      <div className="todoFilters">
        {this.filtersMap.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => this.props.onSetActiveFilter(value)}
            className={value === this.props.activeFilter ? 'activeButton' : ''}>
            {label}
          </button>
        ))}
      </div>
    );
  }
}
