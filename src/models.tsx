export enum FilterState {
  ALL = 'all',
  COMPLETE = 'complete',
  ACTIVE = 'active',
}

export interface Task {
  id: number;
  text: string;
  isComplete: boolean;
}

export interface TaskListState {
  list: Task[];
  activeFilter: FilterState;
  currentPage: number;
  taskPerPage: number;
}

export interface InputValueState {
  inputValue: string;
}

export interface AddFormProps {
  onAddTask: (text: string) => void;
}

export interface FilterProps {
  onSetActiveFilter: (text: FilterState) => void;
  activeFilter: FilterState;
}

export interface PaginatorProps {
  totalPages: number;
  onSetCurrentPage: (page: number) => void;
  currentPage: number;
}

export interface TaskItemProps {
  id: number;
  text: string;
  isComplete: boolean;
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
}