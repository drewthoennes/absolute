import {getCost} from '@/utils';
import {
  GET_WOOD,
  INC_WOOD,
  DEC_WOOD,
  EN_FIRE,
  EN_TRAPS,
  INC_TRAPS,
  DEC_TRAPS
} from '@/const/store';

const initialState = {
  wood: {
    quantity: 0,
    visible: true
  },
  fire: {
    quantity: 0,
    visible: false,
    cost: {
      wood: 0
    },
    recipe: {
      wood: [1]
    }
  },
  traps: {
    quantity: 0,
    visible: false,
    cost: {
      wood: 0
    },
    recipe: {
      wood: [10, 25, 40, 70, 120]
    }
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
          visible: true,
          cost: {
            wood: getCost(state.fire.recipe.wood, state.fire.quantity)
          },
          recipe: state.fire.recipe
        }
      });

    case EN_TRAPS:
      return Object.assign({}, state, {
        traps: {
          quantity: state.traps.quantity,
          visible: true,
          cost: {
            wood: getCost(state.traps.recipe.wood, state.traps.quantity)
          },
          recipe: state.traps.recipe
        }
      });

      case INC_TRAPS:
        if (!action.val) {
          return Object.assign({}, state, {
            traps: {
              quantity: state.traps.quantity + 1,
              visible: state.traps.visible,
              cost: {
                wood: getCost(state.traps.recipe.wood, state.traps.quantity)
              },
              recipe: state.traps.recipe
            }
          });
        }
        return Object.assign({}, state, {
          traps: {
            quantity: state.traps.quantity + action.val,
            visible: state.traps.visible,
            cost: {
              wood: getCost(state.traps.recipe.wood, state.traps.quantity)
            },
            recipe: state.traps.recipe
          }
        });

      case DEC_TRAPS:
        if (!action.val) {
          return Object.assign({}, state, {
            traps: {
              quantity: (state.traps.quantity - 1 < 0) ? 0 : state.traps.quantity - 1,
              visible: state.traps.visible,
              cost: {
                wood: getCost(state.traps.recipe.wood, state.traps.quantity)
              },
              recipe: state.traps.recipe
            }
          });
        }
        return Object.assign({}, state, {
          traps: {
            quantity: (state.traps.quantity - action.val < 0) ? 0 : state.traps.quantity - action.val,
            visible: state.traps.visible,
            cost: {
              wood: getCost(state.traps.recipe.wood, state.traps.quantity)
            },
            recipe: state.traps.recipe
          }
        });

    default:
      return state
  }
}

export default inventory
