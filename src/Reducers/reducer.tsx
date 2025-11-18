import { ADD_TASK, COMPLETE_TASK, DELETE_TASK } from '../constants';


const initialState = null;

export const reducer = (state=initialState, action: any) => {
  switch (action.type) {
    case ADD_TASK: {
      return null;
    }
    case COMPLETE_TASK: {
      return null;
    }
    case DELETE_TASK: {
      return null;
    }
    default: {
      return state;
    }
  }
}