import { combineReducers } from 'redux';
import inventory from './inventory';
import progress from './progress';
import dialogue from './dialogue';

const reducers = combineReducers({
  inventory: inventory,
  progress: progress,
  dialogue: dialogue
})

export default reducers
