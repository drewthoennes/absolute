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
      let now = new Date().getTime();
      switch (action.type) {
        case SET_PROGRESS:
          // return action.store;
          action.store.start = now - (action.store.end - action.store.end);
          return action.store;

        case GET_TIME:
          return state.start - now;

        default:
          return state
      }
    }
  }
}
