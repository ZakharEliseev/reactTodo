import { createStore } from 'redux';

import {reducer} from './Reducers/reducer'

export const store = createStore(reducer);

