import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

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
