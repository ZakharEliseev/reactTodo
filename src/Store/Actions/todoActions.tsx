import { ADD_TASK, COMPLETE_TASK, DELETE_TASK } from '../../Types/constants';

export const todoActionsAdd = (text: string) => {
  return {
    type: ADD_TASK,
    payload: text,
  };
};

export const todoActionDelete = (id: number) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

export const todoCompleteTask = (id: number) => {
  return {
    type: COMPLETE_TASK,
    payload: id,
  };
};
