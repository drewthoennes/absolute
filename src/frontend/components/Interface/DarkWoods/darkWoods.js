import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import c from '@/const';
import {log} from '@/utils';
import store from '@/store';
import {incWood, decWood} from '@/store/actions';

import CooldownButton from '@/components/CooldownButton';

export default class DarkWoods extends React.Component {
  constructor(props) {
    super(props);

    this.gatherWoodButton = React.createRef();
    this.stoakFireButton = React.createRef();

    this.init = this.init.bind(this);

    this.state = {
      area: 'Dark Woods'
    }
  }

  componentDidMount() {
    log('DarkWoods mounted');
    console.log(this.props.inventory);
  }

  tick() {
    let state = {
      gatherWoodButton: this.gatherWoodButton.current.tick(),
      stoakFireButton: this.stoakFireButton.current ? this.stoakFireButton.current.tick() : '' // Prevents calling tick before fire is enabled
    }

    return state;
  }

  init(data) {
    // Initialize all cooldown buttons to their correct positions
    this.gatherWoodButton.current.init(data.state.gatherWoodButton, data.time);
    this.stoakFireButton.current.init(data.state.stoakFireButton, data.time);
  }

  gatherWood() {
    store.dispatch(incWood());
  }

  stoakFire() {
    store.dispatch(decWood());
  }

  render() {
    let woodButton = (
      <CooldownButton ref={this.gatherWoodButton} cooldown="10000" text="Gather wood" cb={this.gatherWood}/>
    );

    let fireButton;
    if (this.props.inventory.fire.enabled) {
      fireButton = (
       <CooldownButton ref={this.stoakFireButton} cooldown="8000" text="Stoak fire" cb={this.stoakFire}/>
      );
    }
    else {
      fireButton = '';
    }

    return (
      <div id="dark-woods">
        {woodButton}
        {fireButton}
      </div>
    );
  }
};
