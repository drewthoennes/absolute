import React from 'react';
import ReactDOM from 'react-dom';
import c from '@/const';

function log(input) {
  if (c.log) {
    console.log(input);
  }
}

export {
  log
}
