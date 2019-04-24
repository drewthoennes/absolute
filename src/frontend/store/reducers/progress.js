import {SET_PROGRESS, GET_TIME} from '@/const/store';

const defaultState = {
  start: new Date().getTime()
}

export default class progress {
  constructor(state = defaultState) {
    this.initialState = state;
  }

  load() {
    return (state = this.initialState, action) => {
      switch (action.type) {
        case SET_PROGRESS:
          // return action.store;
          return action.store;

        case GET_TIME:
          let now = new Date().getTime();
          return state.start - now;

        default:
          return state
      }
    }
  }
}
