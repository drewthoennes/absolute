import {
  SET_INVENTORY,
  GET_WOOD,
  INC_WOOD,
  DEC_WOOD,
  EN_FIRE,
  EN_TRAPS,
  INC_TRAPS,
  DEC_TRAPS,
  INC_FURS,
  DEC_FURS
} from '@/const/store';

export const setInventory = store => ({
  type: SET_INVENTORY,
  store
});

export const getWood = () => ({
  type: GET_WOOD
});

export const incWood = (val) => ({
  type: INC_WOOD,
  val
});

export const decWood = (val) => ({
  type: DEC_WOOD,
  val
});

export const enableFire = () => ({
  type: EN_FIRE
});

export const enableTraps = () => ({
  type: EN_TRAPS
});

export const incTraps = (val) => ({
  type: INC_TRAPS,
  val
});

export const decTraps = (val) => ({
  type: DEC_TRAPS,
  val
});

export const incFurs = (val) => ({
  type: INC_FURS,
  val
});

export const decFurs = (val) => ({
  type: DEC_FURS,
  val
});

export const incGold = (val) => ({
  type: INC_GOLD,
  val
});

export const decGold = (val) => ({
  type: DEC_GOLD,
  val
});
