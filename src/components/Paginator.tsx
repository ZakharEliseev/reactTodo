import { Component } from 'react';

interface PaginatorProps {
  currentPage: number;
  totalPages: number;
  onSetCurrentPage: (page: number) => void;
}

export const Paginator = class extends Component<PaginatorProps> {
  constructor(props: PaginatorProps) {
    super(props);
  }

  render() {
    const { totalPages } = this.props;
    const pages = Array.from({length: totalPages}, (_, index) => index + 1);
    return (
    <div className="todo-paging">
      {pages.map(page => {
        return (
          <button key={page} onClick={() => this.props.onSetCurrentPage(page)}>
            {page}
          </button>
        );})}
    </div>)
  }
};