import { combineReducers } from 'redux';
import inventory from './inventory';
import progress from './progress';
import dialogue from './dialogue';
import areas from './areas';

const reducers = combineReducers({
  inventory: inventory,
  progress: progress,
  dialogue: dialogue,
  areas: areas
})

export default reducers
