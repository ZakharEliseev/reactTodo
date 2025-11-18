import { createStore } from 'redux';

import {reducer} from './reducers/todoState'

export const store = createStore(reducer);

