import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import DarkWoodsComponent from './darkWoods';

const mapStateToProps = state => {
  return {
    inventory: state.inventory,
  }
}

const DarkWoods = connect(mapStateToProps, null, null, {forwardRef: true})(DarkWoodsComponent);

export default DarkWoods;
