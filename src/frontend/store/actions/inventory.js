import {
  GET_WOOD,
  INC_WOOD,
  DEC_WOOD,
  EN_FIRE
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
