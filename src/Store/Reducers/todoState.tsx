import { FilterState } from '@/Types/models';

import { ADD_TASK, COMPLETE_TASK, DELETE_TASK } from '../../Types/constants';

const initialState: any = {
  list: [],
  activeFilter: FilterState.ALL,
  currentPage: 1,
  taskPerPage: 5,
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TASK: {
      return {
        ...state,
        list: [...state.list, { id: Date.now(), text: action.payload.text, isComplete: false }],
      };
    }
    case COMPLETE_TASK: {
      return {
        ...state,
        list: state.list.map((task: any) => ({
          ...task,
          isComplete: task.id === action.payload.id ? !task.isComplete : task.isComplete,
        })),
      };
    }
    case DELETE_TASK: {
      return {
        ...state,
        list: state.list.filter((task: any) => {
          return task.id !== action.payload.id;
        }),
      };
    }
    default: {
      return state;
    }
  }
};
