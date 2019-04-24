import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import c from '@/const';
import {log, getTimeElapsed, formatCostTooltip, hasInventory} from '@/utils';
import store from '@/store';

import {
  getWood,
  incWood,
  decWood,
  addLine,
  incTraps,
  incFurs,
  decFurs,
  incClaws,
  decClaws
} from '@/store/actions';


import CooldownButton from '@/components/CooldownButton';
import { incGold } from '../../../store/actions/inventory';

export default class TradePost extends React.Component {
  constructor(props) {
    super(props);

    
    this.sellWoodButton = React.createRef();
    this.sellFursButton = React.createRef();
    this.sellClawsButton = React.createRef();

    this.init = this.init.bind(this);

    this.state = {};
  }

  tick() {
    let state = {
      
      sellWoodButton: this.sellWoodButton.current ? this.sellWoodButton.current.tick() : undefined,
      sellFursButton: this.sellFursButton.current ? this.sellFursButton.current.tick() : undefined,
      sellClawsButton: this.sellClawsButton.current ? this.sellClawsButton.current.tick() : undefined
    };

    return state;
  }

  init(data) {
    if (!data.time) {
      return;
    }

    

    this.sellWoodButton.current.init(data.state.sellWoodButton, data.time);
    this.sellFursButton.current.init(data.state.sellFursButton, data.time);
    this.sellClawsButton.current.init(data.state.sellClawsButton, data.time);
  }

  

  sellWood() {
    let cost = 12
    if(store.getState().inventory.wood.quantity >= cost){
      store.dispatch(incGold(1))
      store.dispatch(decWood(cost))
    }
  }

  sellFurs() {
    let cost = 4
    if(store.getState().inventory.furs.quantity >= cost){
      store.dispatch(incGold(1))
      store.dispatch(decFurs(cost))
    }
  }

  sellClaws() {
    let cost = 6
    if(store.getState().inventory.claws.quantity >= cost){
      store.dispatch(incGold(1))
      store.dispatch(decClaws(cost))
    }
  }

  render() {
      
    let wood = this.props.inventory.wood;
    let sellWoodButton;
    if (wood.visible){
      sellWoodButton = (
        <CooldownButton
          ref={this.sellWoodButton}
          cooldown="2000"
          tooltip={"12 wood"}//Needs to not be hard coded in
          enabled={store.getState().inventory.wood.quantity >= 12}//hasInventory(fire.cost)}
          text="Sell Wood"
          cb={this.sellWood}/>
      );
    }else {
      sellWoodButton = '';
    }

    let furs = this.props.inventory.furs;
    let sellFursButton;
    if (furs.visible){
      sellFursButton = (
        <CooldownButton
          ref={this.sellFursButton}
          cooldown="2000"
          tooltip={"4 furs"}
          enabled={store.getState().inventory.furs.quantity >= 4}//hasInventory(fire.cost)}
          text="Sell Furs"
          cb={this.sellFurs}/>
      );
    }else {
      sellFursButton = '';
    }

    let claws = this.props.inventory.claws;
    let sellClawsButton;
    if (claws.visible){
      sellClawsButton = (
        <CooldownButton
          ref={this.sellClawsButton}
          cooldown="2000"
          tooltip={"6 claws"}
          enabled={store.getState().inventory.claws.quantity >= 6}//hasInventory(fire.cost)}
          text="Sell Claws"
          cb={this.sellClaws}/>
      );
    }else {
      sellClawsButton = '';
    }

    return (
      <div id="trade-post">
        {sellWoodButton}
        {sellFursButton}
        {sellClawsButton}
      </div>
    );
  }
};
