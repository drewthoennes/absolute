import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import InventoryComponent from './inventory';

const mapStateToProps = state => {
  return {
    wood: state.inventory.wood,
    furs: state.inventory.furs,
    claws: state.inventory.claws,
    hides: state.inventory.hides,
    traps: state.inventory.traps,
    daggers: state.inventory.daggers,
    gold: state.inventory.gold
  }
}

const Inventory = connect(mapStateToProps)(InventoryComponent);

export default Inventory;
