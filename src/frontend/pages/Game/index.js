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

    this.loginModal = React.createRef();

    this.state = {
    };
  }

  openLoginModal() {
    this.loginModal.current.handleOpenModal();
  }

  render() {
    return (
      <div className="full">
        <div id="loop-container">
          <Loop/>
        </div>
        <div id="bottom-bar-container">
          <BottomBar openLoginModal={this.openLoginModal}/>
        </div>
        <LoginModal ref={this.loginModal}/>
      </div>
    );
  }
};
