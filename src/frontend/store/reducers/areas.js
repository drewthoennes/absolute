import {getGameState} from '@/utils';
import {
  SET_AREAS,
  UPDATE_DARK_WOODS,
  EN_STONY_PATH,
  UPDATE_STONY_PATH
} from '@/const/store';

let defaultState = {
  darkWoods: {
    enabled: true,
    state: {},
    time: ''
  },
  stonyPath: {
    enabled: false,
    state: {},
    time: ''
  },
  abandonedMine: {
    enabled: false,
    state: {},
    time: ''
  },
  tradingPost: {
    enabled: false,
    state: {},
    time: ''
  }
}

export default class areas {
  constructor(state = defaultState) {
    this.initialState = state;
  }

  load() {
    return (state = this.initialState, action) => {
      switch (action.type) {
        case SET_AREAS:
          return action.store;

        case UPDATE_DARK_WOODS:
          return Object.assign({}, state, {
            darkWoods: {
              enabled: state.darkWoods.enabled,
              state: action.data,
              time: new Date().getTime()
            }
          });

        case EN_STONY_PATH:
          return Object.assign({}, state, {
            stonyPath: {
              enabled: true,
              state: state.stonyPath.state,
              time: state.stonyPath.time
            }
          });

        case UPDATE_STONY_PATH:
          return Object.assign({}, state, {
            stonyPath: {
              enabled: state.stonyPath.enabled,
              state: action.data,
              time: new Date().getTime()
            }
          });

        default:
          return state
      }
    }
  }
}
