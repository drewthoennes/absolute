import {GET_WOOD, INC_WOOD, DEC_WOOD} from '@/const/store';

const initialState = {
  wood: {
    quantity: 0,
    visible: true
  }
}

const inventory = (state = initialState, action) => {
  switch (action.type) {
    case GET_WOOD:
      return state.wood.quantity
    case INC_WOOD:
      if (!action.val) {
        console.log('Error (INC_WOOD): Missing increment value');
      }
      return Object.assign({}, state, {
        wood: {
          quantity: state.wood.quantity + action.val,
          visible: state.wood.visible
        }
      });
    case DEC_WOOD:
      if (!action.val) {
        console.log('Error (DEC_WOOD): Missing increment value');
      }
      return Object.assign({}, state, {
        wood: (state.wood.quantity - action.val < 0) ? 0 : state.wood.quantity - action.val
      });
    default:
      return state
  }
}

export default inventory
