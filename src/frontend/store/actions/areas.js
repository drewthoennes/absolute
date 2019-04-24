import {
  SET_AREAS,
  UPDATE_DARK_WOODS,
  EN_STONY_PATH,
  UPDATE_STONY_PATH
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
