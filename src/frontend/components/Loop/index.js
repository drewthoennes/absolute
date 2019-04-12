import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

import Feed from '@/components/Feed';
import Inventory from '@/components/Inventory';
import Interface from '@/components/Interface';

export default class Loop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      running: false,
      delta: 100
    }

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    setInterval(this.tick, this.state.delta);
  }

  tick() {
    if (this.state.running) {
      console.log('Tick');
    }
  }

  render() {
    return (
      <div id="screen" className="full">
        <Inventory/>
        <Interface/>
        <Feed/>
      </div>
    );
  }
};
