import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import TradePostComponent from './tradePost';

const mapStateToProps = state => {
  return {
    inventory: state.inventory,
  }
}

const TradePost = connect(mapStateToProps, null, null, {forwardRef: true})(TradePostComponent);

export default TradePost;
