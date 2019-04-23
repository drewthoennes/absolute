import {
  GET_WOOD,
  INC_WOOD,
  DEC_WOOD,
  EN_FIRE,
  EN_TRAPS,
  INC_TRAPS,
  DEC_TRAPS
} from '@/const/store';

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
