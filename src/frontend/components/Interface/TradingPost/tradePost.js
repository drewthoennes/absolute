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
  decFurs
} from '@/store/actions';


import CooldownButton from '@/components/CooldownButton';

export default class TradePost extends React.Component {
  constructor(props) {
    super(props);

    this.checkTrapsButton = React.createRef();
    this.sellWoodButton = React.createRef();
    this.sellFursButton = React.createRef();

    this.init = this.init.bind(this);

    this.state = {};
  }

  tick() {
    let state = {
      checkTrapsButton: this.checkTrapsButton.current ? this.checkTrapsButton.current.tick() : undefined,
      sellWoodButton: this.sellWoodButton.current ? this.sellWoodButton.current.tick() : undefined,
      sellFursButton: this.sellFursButton.current ? this.sellFursButton.current.tick() : undefined
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

    this.sellWoodButton.current.init(data.state.sellWoodButton, data.time);
    this.sellFursButton.current.init(data.state.sellFursButton, data.time);
  }

  checkTraps() {
    // Add to claws and furs
    store.dispatch(addLine('You gather small bits of fur and claws to use later.', getTimeElapsed() + 1));
    store.dispatch(incFurs());
    // Random chance of traps breaking
  }

  sellWood() {
    // Add to claws and furs
    //store.dispatch(addLine('1 wood sold', getTimeElapsed() + 1));
    let cost = 4
    console.log(store.get)

    //if(store.dispatch(getWood()) > 4){
    //  console.log("enough!");
    //}
    //console.log(store.dispatch(decWood(10)));
    // Random chance of traps breaking
  }

  sellFurs() {
    // Add to claws and furs
    //store.dispatch(addLine('1 wood sold', getTimeElapsed() + 1));
    let cost = 4
    console.log(store.get)

    //if(store.dispatch(getWood()) > 4){
    //  console.log("enough!");
    //}
    //console.log(store.dispatch(decWood(10)));
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


    
    let wood = this.props.inventory.wood;
    let sellWoodButton;
    if (wood.visible){
      sellWoodButton = (
        <CooldownButton
          ref={this.sellWoodButton}
          cooldown="2000"
          tooltip={3}//formatCostTooltip(fire.cost)}
          enabled={true}//hasInventory(fire.cost)}
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
          tooltip={3}//formatCostTooltip(fire.cost)}
          enabled={true}//hasInventory(fire.cost)}
          text="Sell Furs"
          cb={this.sellFurs}/>
      );
    }else {
      sellFursButton = '';
    }

    

    return (
      <div id="trade-post">
        {checkTrapsButton}
        {sellWoodButton}
        {sellFursButton}
      </div>
    );
  }
};
