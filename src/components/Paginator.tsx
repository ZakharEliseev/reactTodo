import { Component } from 'react';

interface PaginatorProps {
  totalPages: number;
  onSetCurrentPage: (page: number) => void;
  currentPage: number;
}

export class Paginator extends Component<PaginatorProps> {
  constructor(props: PaginatorProps) {
    super(props);
  }

  toggleActiveButton = (page: number): string => {
    return page === this.props.currentPage ? 'active-button' : '';
  }
  render() {
    const { totalPages } = this.props;
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
    return (
      <div className="todo-paging">
        {pages.map((page) => {
          return (
            <button
              className={this.toggleActiveButton(page)}
              key={page}
              onClick={() => this.props.onSetCurrentPage(page)}>
              {page}
            </button>
          );
        })}
      </div>
    );
  }
};