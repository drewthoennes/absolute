import {
  UPDATE_DARK_WOODS,
  EN_STONY_PATH
} from '@/const/store';

const initialState = {
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

const progress = (state = initialState, action) => {
  switch (action.type) {
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

    default:
      return state
  }
}

export default progress
