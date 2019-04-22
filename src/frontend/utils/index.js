import React from 'react';
import ReactDOM from 'react-dom';
import c from '@/const';
import store from '@/store';

function log(input) {
  if (c.log) {
    console.log(input);
  }
}

function getTimeElapsed() {
  let now = new Date().getTime();
  return Math.floor((now - store.getState().progress.start) / 1000);
}

export {
  log,
  getTimeElapsed
}
