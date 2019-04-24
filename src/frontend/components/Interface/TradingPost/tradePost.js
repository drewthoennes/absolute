import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import c from '@/const';
import {log, getTimeElapsed, formatCostTooltip, hasInventory} from '@/utils';
import store from '@/store';

import {
  incWood,
  decWood,
  addLine,
  incTraps,
  incFurs
} from '@/store/actions';


import CooldownButton from '@/components/CooldownButton';

export default class TradePost extends React.Component {
  constructor(props) {
    super(props);

    this.checkTrapsButton = React.createRef();

    this.init = this.init.bind(this);

    this.state = {};
  }

  tick() {
    let state = {
      checkTrapsButton: this.checkTrapsButton.current ? this.checkTrapsButton.current.tick() : undefined
    };

    return state;
  }

  init(data) {
    if (!data.time) {
      return;
    }

    // Initialize all cooldown buttons to their correct positions
    if (this.checkTrapsButton.current && data.state.checkTrapsButton) {
      this.checkTrapsButton.current.init(data.state.checkTrapsButton, data.time);
    }
  }

  checkTraps() {
    // Add to claws and furs
    store.dispatch(addLine('You gather small bits of fur and claws to use later.', getTimeElapsed() + 1));
    store.dispatch(incFurs());
    // Random chance of traps breaking
  }

  render() {
    let traps = this.props.inventory.traps;
    let checkTrapsButton;
    if (traps.visible) {
      checkTrapsButton = (
       <CooldownButton ref={this.checkTrapsButton} cooldown="20000" text="Check traps" enabled={traps.quantity > 0} cb={this.checkTraps}/>
      );
    }
    else {
      checkTrapsButton = '';
    }

    return (
      <div id="trade-post">
        {checkTrapsButton}
      </div>
    );
  }
};
