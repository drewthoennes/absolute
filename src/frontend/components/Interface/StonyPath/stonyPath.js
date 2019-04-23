import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import c from '@/const';
import {log, getTimeElapsed, formatCostTooltip, hasInventory} from '@/utils';
import store from '@/store';
import {} from '@/store/actions';

import CooldownButton from '@/components/CooldownButton';

export default class StonyPath extends React.Component {
  constructor(props) {
    super(props);

    this.init = this.init.bind(this);

    this.state = {};
  }

  tick() {
    let state = {};

    return state;
  }

  init(data) {
    // Initialize all cooldown buttons to their correct positions
  }

  render() {
    // let fire = this.props.inventory.fire;
    // let fireButton;
    // if (fire.visible) {
    //   fireButton = (
    //    <CooldownButton ref={this.stoakFireButton} cooldown="8000" text="Stoak fire" tooltip={formatCostTooltip(fire.cost)} enabled={hasInventory(fire.recipe)} cb={this.stoakFire}/>
    //   );
    // }

    return (
      <div id="stony-path">
        <p>Stony Path</p>
      </div>
    );
  }
};
