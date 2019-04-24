import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './styles.scss';
import store from '@/store';
import {
  setAreas,
  setDialogue,
  setInventory,
  setProgress
} from '@/store/actions';

import Loop from '@/components/Loop';
import BottomBar from '@/components/BottomBar';
import LoginModal from '@/components/LoginModal';

export default class Game extends React.Component {
  constructor () {
    super();

    this.openLoginModal = this.openLoginModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

    this.loop = React.createRef();
    this.bottomBar = React.createRef();
    this.loginModal = React.createRef();

    this.state = {
    };
  }

  componentDidMount() {
    let token = localStorage.getItem('token');

    // Try to load game state from server
    if (token) {
      axios.get('/api/game', {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }).then(res => {
        if (res.data.game && res.data.game.inventory) { // Hardcoded value to check if game is valid
          let promises = [];

          promises.push(new Promise((resolve, reject) => {
            store.dispatch(setAreas(res.data.game.areas));
          }));
          promises.push(new Promise((resolve, reject) => {
            store.dispatch(setDialogue(res.data.game.dialogue));
          }));
          promises.push(new Promise((resolve, reject) => {
            store.dispatch(setInventory(res.data.game.inventory));
          }));
          promises.push(new Promise((resolve, reject) => {
            store.dispatch(setProgress(res.data.game.progress));
          }));

          Promise.all(promises); // Can't resolve this for some reason, so we risk it for the biscuit
        }
      });
    }
  }

  openLoginModal() {
    this.loginModal.current.handleOpenModal();
  }

  handleLogin() {
    this.loop.current.handleLogin();
    this.bottomBar.current.handleLogin();
  }

  handleLogout() {
    this.loop.current.handleLogout();
  }

  render() {
    return (
      <div className="full">
        <div id="loop-container">
          <Loop ref={this.loop}/>
        </div>
        <div id="bottom-bar-container">
          <BottomBar ref={this.bottomBar} openLoginModal={this.openLoginModal} handleLogout={this.handleLogout}/>
        </div>
        <LoginModal ref={this.loginModal} handleLogin={this.handleLogin}/>
      </div>
    );
  }
};
