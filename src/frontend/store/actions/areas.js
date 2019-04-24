import {
  SET_AREAS,
  UPDATE_DARK_WOODS,
  EN_STONY_PATH,
  UPDATE_STONY_PATH,
  EN_TRADE_POST,
  UPDATE_TRADE_POST
} from '@/const/store';

export const setAreas = store => ({
  type: SET_AREAS,
  store
});

export const updateDarkWoods = (data) => ({
  type: UPDATE_DARK_WOODS,
  data
});

export const enableStonyPath = () => ({
  type: EN_STONY_PATH
});

export const updateStonyPath = (data) => ({
  type: UPDATE_STONY_PATH,
  data
});

export const enableTradePost = () => ({
  type: EN_TRADE_POST
});

export const updateTradePost = (data) => ({
  type: UPDATE_TRADE_POST,
  data
});

