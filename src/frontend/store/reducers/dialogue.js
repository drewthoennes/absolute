import {
  SET_DIALOGUE,
  ADD_LINE,
  DELETE_LINES
} from '@/const/store';

const defaultState = {
  lines: {
    0: ['The darkness of the forrest envelops you.'],
    5: ['You are surrounded by an open clearing.'],
    120: ['A strange figure approaches through the shadows.'],
    123: ['Says it expects payment for what you\'ve taken as it slips back into the darkness.']
  },
  completed: []
}

export default class dialogue {
  constructor(state = defaultState) {
    this.initialState = state;
  }

  load() {
    return (state = this.initialState, action) => {
      switch (action.type) {
        case SET_DIALOGUE:
          // return action.store;
          return action.store;

        case ADD_LINE:
          let newState = Object.assign({}, state, {});
          if (!newState.lines[action.time]) {
            let arr = [];
            arr.push(action.line);
            newState.lines[action.time] = arr;
          }
          else {
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
  }
}
