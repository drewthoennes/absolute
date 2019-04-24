import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
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


function saveGameState(loggedIn = false) {
  console.log('Saving game state (' + loggedIn + ')');

  let state = store.getState();
  state.progress.stop = new Date().getTime();
  state.dialogue.completed = [];

  if (loggedIn) { // Push to the database
    let token = localStorage.getItem('token');
    axios.post('/api/game', {
      game: state
    }, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(res => {
      // Show saved button in bottom bar
    });
  }
  else { // Store in the browser
    localStorage.setItem('gameState', JSON.stringify(state));
  }
}

function getGameState() {
  let state = JSON.parse(localStorage.getItem('gameState'));
  if (state && state.progress && state.progress.stop) {
    delete state.progress.stop;
  }
  return JSON.parse(localStorage.getItem('gameState'));
}

function chance(percent) {
  return Math.random() <= percent;
}

export {
  log,
  getTimeElapsed,
  getCost,
  formatCostTooltip,
  hasInventory,
  saveGameState,
  getGameState,
  chance
}
