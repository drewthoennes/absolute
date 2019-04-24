import {getGameState} from '@/utils';
import {
  ADD_LINE,
  DELETE_LINES
} from '@/const/store';

/*
  The forrest beckons you
  The fire roars

*/

const defaultState = {
  lines: {
    0: ['The darkness of the forrest envelops you.'],
    5: ['You are surrounded by an open clearing.'],
    120: ['A strange figure approaches through the shadows.'],
    123: ['Says it expects payment for what you\'ve taken as it slips back into the darkness']
  },
  completed: []
}

let initialState;

let save = getGameState();
if (save && save.dialogue) {
  initialState = save.dialogue
}
else {
  initialState = defaultState;
}

const dialogue = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LINE:
      let newState = Object.assign({}, state, {});
      if (!newState.lines[action.time]) {
        let arr = [];
        arr.push(action.line);
        newState.lines[action.time] = arr;
      }
      else {
        console.log(action.time + "  |  " + action.line)
        newState.lines[action.time].push(action.line);
        
      }
      return newState;

    case DELETE_LINES:
      // Mutates state
      delete state.lines[action.time];
      return state;

    default:
      return state
  }
}

export default dialogue
