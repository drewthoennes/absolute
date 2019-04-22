import {DELETE_LINES} from '@/const/store';

const initialState = {
  lines: {
    0: ['Initial line'],
    1: ['First second'],
    5: ['Fifth second']
  }
}

const dialogue = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_LINES:
      delete state.lines[action.time];
      return state;

    default:
      return state
  }
}

export default dialogue
