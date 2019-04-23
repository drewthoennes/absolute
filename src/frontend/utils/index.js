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

function getCost(arr, quantity) {
  let cost;

  if (quantity < 0) {
    cost = arr[0];
  }
  else if (quantity >= arr.length) {
    cost = arr[arr.length - 1];
  }
  else {
    cost = arr[quantity];
  }

  return cost;
}

function formatCostTooltip(obj) {
  let str = "";
  let first = true;

  for (let key in obj) {
    if (first) {
      first = false;
    }
    else {
      str += "; ";
    }
    str += key + ": "
    str += obj[key]
  }

  return str;
}

function hasInventory(cost) {
  for (let item in cost) {
    if (store.getState().inventory[item].quantity < cost[item]) {
      return false;
    }

    return true;
  }
}

export {
  log,
  getTimeElapsed,
  getCost,
  formatCostTooltip,
  hasInventory
}
