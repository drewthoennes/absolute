import {getGameState} from '@/utils';
import {} from '@/const/store';

let GET_TIME = 'get_time';

const defaultState = {
  start: new Date().getTime()
}

let initialState;

let save = getGameState();
if (save && save.inventory) {
  initialState = save.progress;

  // Change start to correct time
  let now = new Date().getTime();
  initialState.start = now - (save.progress.stop - save.progress.start);
}
else {
  initialState = defaultState;
}

const progress = (state = initialState, action) => {
  switch (action.type) {
    case GET_TIME:
      let now = new Date().getTime();
      return state.start - now;

    default:
      return state
  }
}

export default progress
