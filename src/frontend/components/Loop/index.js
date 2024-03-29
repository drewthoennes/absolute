import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import c from '@/const';
import {log, getTimeElapsed, saveGameState} from '@/utils';

import Feed from '@/components/Feed';
import Inventory from '@/components/Inventory';
import Interface from '@/components/Interface';

let elapsed = c.saveFreq;

export default class Loop extends React.Component {
  constructor(props) {
    super(props);

    this.interface = React.createRef();
    this.feed = React.createRef();

    this.state = {
      running: true,
      delta: c.delta,
      loggedIn: false
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    setInterval(this.tick, this.state.delta);
  }

  handleLogin() {
    this.setState({loggedIn: true});
  }

  handleLogout() {
    this.setState({loggedIn: false});
  }

  tick() {
    if (this.state.running) {
      log('Tick');

      this.interface.current.tick();
      this.feed.current.tick();
    }

    // Stub to save the game state
    elapsed -= c.delta;
    if (elapsed <= 0) {
      saveGameState(this.state.loggedIn);
      elapsed = c.saveFreq;
    }
  }

  render() {
    return (
      <div id="screen" className="full">
        <Feed ref={this.feed}/>
        <Interface ref={this.interface}/>
        <Inventory/>
      </div>
    );
  }
};
