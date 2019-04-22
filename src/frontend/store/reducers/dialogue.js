import {ADD_LINE, DELETE_LINES} from '@/const/store';

/*
  The forrest beckons you
  The fire roars

*/

const initialState = {
  lines: {
    0: ['The darkness of the forrest envelops you.'],
    5: ['You are surrounded by an open clearing.']
  }
}

const dialogue = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LINE:
      let newState = Object.assign({}, state, {});
      newState.lines[action.time] = action.line;
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
