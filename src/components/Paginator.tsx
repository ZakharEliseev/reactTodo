import { Component } from 'react';

interface PaginatorProps {
  totalPages: number;
  onSetCurrentPage: (page: number) => void;
  currentPage: number;
}

export class Paginator extends Component<PaginatorProps> {
  private INDEX_SHIFT = 1;
  constructor(props: PaginatorProps) {
    super(props);
  }

  render() {
    const { totalPages } = this.props;
    const pages = Array.from({ length: totalPages }, (_, index) => index + this.INDEX_SHIFT);

    return (
      <div className="todo-paging">
        {pages.map((page) => (
            <button
              className={this.props.currentPage === page ? 'active-button' : ''}
              key={page}
              onClick={() => this.props.onSetCurrentPage(page)}>
              {page}
            </button>
        ))}
      </div>
    );
  }
};