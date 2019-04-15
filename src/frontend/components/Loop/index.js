import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import c from '@/const';
import {log} from '@/utils';

import Feed from '@/components/Feed';
import Inventory from '@/components/Inventory';
import Interface from '@/components/Interface';

export default class Loop extends React.Component {
  constructor(props) {
    super(props);

    this.inventory = React.createRef();
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

      this.inventory.current.tick();
      this.interface.current.tick();
      this.feed.current.tick();
    }
  }

  render() {
    return (
      <div id="screen" className="full">
        <Inventory ref={this.inventory}/>
        <Interface ref={this.interface}/>
        <Feed ref={this.feed}/>
      </div>
    );
  }
};
