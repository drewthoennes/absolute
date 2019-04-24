import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import c from '@/const';
import {log, getTimeElapsed, formatCostTooltip, hasInventory, chance} from '@/utils';
import store from '@/store';

import {
  incWood,
  decWood,
  addLine,
  incTraps,
  decTraps,
  enableFurs,
  incFurs,
  enableClaws,
  incClaws
} from '@/store/actions';


import CooldownButton from '@/components/CooldownButton';

export default class StonyPath extends React.Component {
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
    // Random chance of traps breaking
    if (chance(0.1)) {
      let traps = store.getState().inventory.traps.quantity;
      store.dispatch(decTraps(1 + Math.floor(Math.random() * traps)));
      store.dispatch(addLine('The traps have been torn to pieces by something.', getTimeElapsed() + 1));
      return;
    }

    // Add to claws and furs
    if (!store.getState().inventory.furs.visible || !store.getState().inventory.claws.visible) {
      store.dispatch(enableFurs());
      store.dispatch(enableClaws());
    }

    store.dispatch(incFurs());
    store.dispatch(incClaws());

    if (chance(0.3)) {
      store.dispatch(addLine('You gather small bits of fur and claws to use later.', getTimeElapsed() + 1));
    }
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
      <div id="stony-path">
        {checkTrapsButton}
      </div>
    );
  }
};
