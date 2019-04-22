import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import c from '@/const';
import {log} from '@/utils';
import {tick} from '@/dialogue';

import Feed from '@/components/Feed';
import Inventory from '@/components/Inventory';
import Interface from '@/components/Interface';

export default class Loop extends React.Component {
  constructor(props) {
    super(props);

    this.interface = React.createRef();
    this.feed = React.createRef();

    this.state = {
      running: true,
      delta: c.delta
    }

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    setInterval(this.tick, this.state.delta);
  }

  tick() {
    if (this.state.running) {
      log('Tick');

      this.interface.current.tick();
      this.feed.current.tick();
      tick();
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
