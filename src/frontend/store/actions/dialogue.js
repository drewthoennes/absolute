import {
  ADD_LINE,
  DELETE_LINES
} from '@/const/store';

export const addLine = (line, time) => ({
  type: ADD_LINE,
  line,
  time
});


export const deleteLines = time => ({
  type: DELETE_LINES,
  time
});
