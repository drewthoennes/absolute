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
  incTraps
} from '@/store/actions';

import CooldownButton from '@/components/CooldownButton';

export default class DarkWoods extends React.Component {
  constructor(props) {
    super(props);

    this.gatherWoodButton = React.createRef();
    this.stoakFireButton = React.createRef();
    this.makeTrapButton = React.createRef();

    this.init = this.init.bind(this);

    this.state = {
      area: 'Dark Woods'
    }
  }

  componentDidMount() {
    log('DarkWoods mounted');
  }

  tick() {
    let state = {
      gatherWoodButton: this.gatherWoodButton.current.tick(),
      stoakFireButton: this.stoakFireButton.current ? this.stoakFireButton.current.tick() : '', // Prevents calling tick before fire is enabled
      makeTrapButton: this.makeTrapButton.current ? this.makeTrapButton.current.tick() : ''
    }

    return state;
  }

  init(data) {
    // Initialize all cooldown buttons to their correct positions
    this.gatherWoodButton.current.init(data.state.gatherWoodButton, data.time);
    if (this.stoakFireButton.current) {
      this.stoakFireButton.current.init(data.state.stoakFireButton, data.time);
    }
    if (this.makeTrapButton.current) {
      this.makeTrapButton.current.init(data.state.makeTrapButton, data.time);
    }
  }

  gatherWood() {
    store.dispatch(incWood());
    store.dispatch(addLine('Random sticks and twigs cover the dimly lit forrest floor', getTimeElapsed()));
  }

  stoakFire() {
    store.dispatch(decWood());
  }

  makeTrap() {
    store.dispatch(incTraps());
  }

  render() {
    let woodButton = (
      <CooldownButton ref={this.gatherWoodButton} cooldown="10000" text="Gather wood" cb={this.gatherWood}/>
    );

    let fire = this.props.inventory.fire;
    let fireButton;
    if (fire.visible) {
      fireButton = (
       <CooldownButton ref={this.stoakFireButton} cooldown="8000" text="Stoak fire" tooltip={formatCostTooltip(fire.cost)} enabled={hasInventory(fire.cost)} cb={this.stoakFire}/>
      );
    }
    else {
      fireButton = '';
    }

    let traps = this.props.inventory.traps;
    let trapButton;
    if (traps.visible) {
      trapButton = (
       <CooldownButton ref={this.makeTrapButton} cooldown="8000" text="Build trap" tooltip={formatCostTooltip(traps.cost)} enabled={hasInventory(traps.cost)} cb={this.makeTrap}/>
      );
    }
    else {
      trapButton = '';
    }

    return (
      <div id="dark-woods">
        {woodButton}
        {fireButton}
        {trapButton}
      </div>
    );
  }
};
