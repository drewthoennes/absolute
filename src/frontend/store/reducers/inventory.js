import {
  GET_WOOD,
  INC_WOOD,
  DEC_WOOD,
  EN_FIRE,
  EN_TRAPS,
  INC_TRAPS,
  DEC_TRAPS
} from '@/const/store';

/*
this.state = {
  unlocked: ['wood'],
  items: {
    dagger: {
      quantity: 0,
      cost: {
        wood: [10],
        claws: [5],
        hide: [3]
      }
    }
  }
}
*/

const initialState = {
  wood: {
    quantity: 0,
    visible: true
  },
  fire: {
    quantity: 0,
    visible: false
  },
  traps: {
    quantity: 0,
    visible: false
  },
  furs: {
    quantity: 0,
    visible: false
  },
  claws: {
    quantity: 0,
    visible: false
  },
  hides: {
    quantity: 0,
    visible: false
  },
  daggers: {
    quantity: 0,
    visible: false
  }
}

const inventory = (state = initialState, action) => {
  switch (action.type) {
    case GET_WOOD:
      return state.wood.quantity

    case INC_WOOD:
      if (!action.val) {
        return Object.assign({}, state, {
          wood: {
            quantity: state.wood.quantity + Math.floor(Math.random() * 5) + 3,
            visible: state.wood.visible
          }
        });
      }
      return Object.assign({}, state, {
        wood: {
          quantity: state.wood.quantity + action.val,
          visible: state.wood.visible
        }
      });

    case DEC_WOOD:
      if (!action.val) {
        return Object.assign({}, state, {
          wood: {
            quantity: (state.wood.quantity - 1 < 0) ? 0 : state.wood.quantity - 1,
            visible: state.wood.visible
          }
        });
      }
      return Object.assign({}, state, {
        wood: {
          quantity: (state.wood.quantity - action.val < 0) ? 0 : state.wood.quantity - action.val,
          visible: state.wood.visible
        }
      });

    case EN_FIRE:
      return Object.assign({}, state, {
        fire: {
          quantity: 1,
          visible: true
        }
      });

    case EN_TRAPS:
      return Object.assign({}, state, {
        traps: {
          quantity: state.traps.quantity,
          visible: true
        }
      });

      case INC_TRAPS:
        if (!action.val) {
          return Object.assign({}, state, {
            traps: {
              quantity: state.traps.quantity + 1,
              visible: state.traps.visible
            }
          });
        }
        return Object.assign({}, state, {
          traps: {
            quantity: state.traps.quantity + action.val,
            visible: state.traps.visible
          }
        });

      case DEC_TRAPS:
        if (!action.val) {
          return Object.assign({}, state, {
            traps: {
              quantity: (state.traps.quantity - 1 < 0) ? 0 : state.traps.quantity - 1,
              visible: state.traps.visible
            }
          });
        }
        return Object.assign({}, state, {
          traps: {
            quantity: (state.traps.quantity - action.val < 0) ? 0 : state.traps.quantity - action.val,
            visible: state.traps.visible
          }
        });

    default:
      return state
  }
}

export default inventory
