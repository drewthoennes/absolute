import {
  SET_DIALOGUE,
  ADD_LINE,
  DELETE_LINES
} from '@/const/store';

export const setDialogue = store => ({
  type: SET_DIALOGUE,
  store
});

export const addLine = (line, time) => ({
  type: ADD_LINE,
  line,
  time
});

export const deleteLines = time => ({
  type: DELETE_LINES,
  time
});
