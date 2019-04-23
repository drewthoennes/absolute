import {
  UPDATE_DARK_WOODS,
  EN_STONY_PATH
} from '@/const/store';

export const updateDarkWoods = (data) => ({
  type: UPDATE_DARK_WOODS,
  data
});

export const enableStonyPath = () => ({
  type: EN_STONY_PATH
});
