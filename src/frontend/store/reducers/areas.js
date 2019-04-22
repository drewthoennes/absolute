import {UPDATE_DARK_WOODS} from '@/const/store';

const initialState = {
  darkWoods: {
    enabled: true,
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

    default:
      return state
  }
}

export default progress
