import { FilterState } from '@/types/models';

import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, SET_CURRENT_PAGE, SET_FILTER } from '../../types/constants';

export const todoActionsAdd = (text: string) => ({
    type: ADD_TASK,
    payload: {text},
});

export const todoActionDelete = (id: number) => ({
    type: DELETE_TASK,
    payload: {id},
});

export const todoCompleteTask = (id: number) => ({
    type: COMPLETE_TASK,
    payload: {id},
});

export const setFilter = (activeFilter: FilterState) => ({
  type: SET_FILTER,
  payload: { activeFilter },
});

export const setCurrentPage = (currentPage: number) => ({
  type: SET_CURRENT_PAGE,
  payload: {currentPage},
});

