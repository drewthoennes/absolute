import { combineReducers } from 'redux';
import inventory from './inventory';
import progress from './progress';

const reducers = combineReducers({
  inventory: inventory,
  progress: progress
})

export default reducers
