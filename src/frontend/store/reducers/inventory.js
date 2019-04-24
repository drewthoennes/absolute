import {getCost} from '@/utils';
import {
  SET_INVENTORY,
  GET_WOOD,
  INC_WOOD,
  DEC_WOOD,
  EN_FIRE,
  EN_TRAPS,
  INC_TRAPS,
  DEC_TRAPS,
  EN_FURS,
  INC_FURS,
  DEC_FURS,
  EN_CLAWS,
  INC_CLAWS,
  DEC_CLAWS,
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
    quantity: 10,
    visible: true
  }
}

export default class inventory {
  constructor(state = defaultState) {
    this.initialState = state;
  }

  load() {
    return (state = this.initialState, action) => {
      switch (action.type) {
        case SET_INVENTORY:
          return action.store;

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
                    wood: getCost(state.traps.recipe.wood, state.traps.quantity + 1)
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
                  wood: getCost(state.traps.recipe.wood, state.traps.quantity + 1)
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
                    wood: getCost(state.traps.recipe.wood, state.traps.quantity - 1)
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
                  wood: getCost(state.traps.recipe.wood, state.traps.quantity - 1)
                },
                recipe: state.traps.recipe
              }
            });

          case EN_FURS:
            return Object.assign({}, state, {
              furs: {
                quantity: state.furs.quantity,
                visible: true
              }
            });

          case INC_FURS:
            if (!action.val) {
              return Object.assign({}, state, {
                furs: {
                  quantity: state.furs.quantity + state.traps.quantity * (Math.floor(Math.random() * 5) + 3),
                  visible: state.furs.visible
                }
              });
            }
            return Object.assign({}, state, {
              furs: {
                quantity: state.furs.quantity + action.val,
                visible: state.furs.visible
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

          case EN_CLAWS:
            return Object.assign({}, state, {
              claws: {
                quantity: state.claws.quantity,
                visible: true
              }
            });

          case INC_CLAWS:
            if (!action.val) {
              return Object.assign({}, state, {
                claws: {
                  quantity: state.claws.quantity + state.traps.quantity * (Math.floor(Math.random() * 5) + 3),
                  visible: state.claws.visible
                }
              });
            }
            return Object.assign({}, state, {
              claws: {
                quantity: state.claws.quantity + action.val,
                visible: state.claws.visible
              }
            });

          case DEC_CLAWS:
            if (!action.val) {
              return Object.assign({}, state, {
                claws: {
                  quantity: (state.claws.quantity - 1 < 0) ? 0 : state.claws.quantity - 1,
                  visible: state.claws.visible
                }
              });
            }
            return Object.assign({}, state, {
              claws: {
                quantity: (state.claws.quantity - action.val < 0) ? 0 : state.claws.quantity - action.val,
                visible: state.claws.visible
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
  }
}
