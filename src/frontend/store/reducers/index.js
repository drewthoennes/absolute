import {combineReducers} from 'redux';
import {getGameState} from '@/utils';
import axios from 'axios';
import Inventory from './inventory';
import Progress from './progress';
import Dialogue from './dialogue';
import Areas from './areas';
import {SET_STORE} from '@/const/store';

let initialState;

let save = getGameState();
if (save) {
  initialState = save;
}

let inventory = new Inventory(initialState ? initialState.inventory : undefined);
let dialogue = new Dialogue(initialState ? initialState.dialogue : undefined);
let areas = new Areas(initialState ? initialState.areas : undefined);
let progress = new Progress(initialState ? initialState.progress : undefined);

const reducers = combineReducers({
  inventory: inventory.load(),
  progress: progress.load(),
  dialogue: dialogue.load(),
  areas: areas.load()
})

export default reducers
