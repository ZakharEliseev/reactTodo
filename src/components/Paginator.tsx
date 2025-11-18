import { Component } from 'react';

import { PaginatorProps } from '../types/models';

export class Paginator extends Component<PaginatorProps> {
  private INDEX_SHIFT = 1;
  constructor(props: PaginatorProps) {
    super(props);
  }

  render() {
    const { totalPages } = this.props;
    const pages = Array.from({ length: totalPages }, (_, index) => index + this.INDEX_SHIFT);

    return (
      <div className="todoPaging">
        {pages.map((page) => (
          <button
            className={this.props.currentPage === page ? 'activeButton' : ''}
            key={page}
            onClick={() => this.props.onSetCurrentPage(page)}>
            {page}
          </button>
        ))}
      </div>
    );
  }
}
