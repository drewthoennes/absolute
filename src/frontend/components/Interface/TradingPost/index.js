import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import StonyPathComponent from './stonyPath';

const mapStateToProps = state => {
  return {
    inventory: state.inventory,
  }
}

const StonyPath = connect(mapStateToProps, null, null, {forwardRef: true})(StonyPathComponent);

export default StonyPath;
