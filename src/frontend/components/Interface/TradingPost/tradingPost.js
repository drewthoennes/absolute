import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import c from '@/const';
import {log, getTimeElapsed, formatCostTooltip, hasInventory} from '@/utils';
import store from '@/store';

import {} from '@/store/actions';


import CooldownButton from '@/components/CooldownButton';

export default class TradingPost extends React.Component {
  constructor(props) {
    super(props);

    this.init = this.init.bind(this);

    this.state = {};
  }

  tick() {
    let state = {
    };

    return state;
  }

  init(data) {
    if (!data.time) {
      return;
    }

    // Initialize all cooldown buttons to their correct positions
  }

  render() {
    return (
      <div id="trading-post">
        <p>Trading Post</p>
      </div>
    );
  }
};
