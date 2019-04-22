import {} from '@/const/store';

let GET_TIME = 'get_time';

const initialState = {
  start: new Date().getTime()
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
