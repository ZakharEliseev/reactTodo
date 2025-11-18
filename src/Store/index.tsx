import { createStore } from 'redux';

import {reducer} from './Reducers/todoState'

export const store = createStore(reducer);

