import {getCost, getGameState} from '@/utils';
import {
  GET_WOOD,
  INC_WOOD,
  DEC_WOOD,
  EN_FIRE,
  EN_TRAPS,
  INC_TRAPS,
  DEC_TRAPS,
  INC_FURS,
  DEC_FURS,
  INC_GOLD,
  DEC_GOLD
} from '@/const/store';

const defaultState = {
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
      wood: 5
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
  },
  gold: {
    quantity: 0,
    visible: true
  }
}

let initialState;

let save = getGameState();
if (save && save.inventory) {
  initialState = save.inventory
}
else {
  initialState = defaultState;
}

const inventory = (state = initialState, action) => {
  //console.log("Action: " + action.type);
  switch (action.type) {
    case GET_WOOD:
      return state.wood.quantity

    case INC_WOOD:
    
      if (!action.val) {
        return Object.assign({}, state, {
          wood: {
            quantity: state.wood.quantity + Math.floor(Math.random() * 5) + 3,
            visible: state.wood.visible
          },
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

      case INC_FURS:
        if (!action.val) {
          return Object.assign({}, state, {
            furs: {
              quantity: state.furs.quantity + Math.floor(Math.random() * 5) + 3,
              visible: true
            }
          });
        }
        return Object.assign({}, state, {
          furs: {
            quantity: state.furs.quantity + action.val,
            visible: true
          }
        });

      case DEC_FURS:
        if (!action.val) {
          return Object.assign({}, state, {
            furs: {
              quantity: (state.furs.quantity - 1 < 0) ? 0 : state.furs.quantity - 1,
              visible: state.furs.visible
            }
          });
        }
        return Object.assign({}, state, {
          furs: {
            quantity: (state.furs.quantity - action.val < 0) ? 0 : state.furs.quantity - action.val,
            visible: state.furs.visible
          }
        });

      case INC_GOLD:
        if (!action.val) {
          return Object.assign({}, state, {
            gold: {
              quantity: state.gold.quantity + Math.floor(Math.random() * 5) + 3,
              visible: true
            }
          });
        }
        return Object.assign({}, state, {
          gold: {
            quantity: state.gold.quantity + action.val,
            visible: true
          }
        });

      case DEC_GOLD:
        if (!action.val) {
          return Object.assign({}, state, {
            gold: {
              quantity: (state.gold.quantity - 1 < 0) ? 0 : state.gold.quantity - 1,
              visible: state.gold.visible
            }
          });
        }
        return Object.assign({}, state, {
          gold: {
            quantity: (state.gold.quantity - action.val < 0) ? 0 : state.gold.quantity - action.val,
            visible: state.gold.visible
          }
        });


    default:
      return state
  }
}

export default inventory
