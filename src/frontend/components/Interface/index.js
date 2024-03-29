import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import c from '@/const';
import {log} from '@/utils';
import store from '@/store';
import {updateDarkWoods, updateStonyPath} from '@/store/actions';

import CooldownButton from '@/components/CooldownButton';
import DarkWoods from '@/components/Interface/DarkWoods'
import StonyPath from '@/components/Interface/StonyPath';
import TradePost from '@/components/Interface/TradingPost';

export default class Interface extends React.Component {
  constructor(props) {
    super(props);

    this.darkWoods = React.createRef();
    this.stonyPath = React.createRef();
    this.tradePost = React.createRef();

    this.state = {
      areas: ['Dark Woods', 'Stony Path', 'Abandoned Mine', 'Trading Post'],
      area: 'Dark Woods',
      data: {}
    }
  }

  componentDidMount() {
    log('Interface mounted');
  }

  tick() {
    log('Interface tick');

    let state = {};
    switch (this.state.area) {
      case 'Dark Woods':
        this.setState({data: this.darkWoods.current.tick()});
        break;

      case 'Stony Path':
        this.setState({data: this.stonyPath.current.tick()});
        break;

      case 'Trading Post':
        console.log("Updating Trading post")
        this.setState({data: this.tradePost.current.tick()});
        break;

      default:
        log('Interface: No area to tick');
    }
  }

  setArea(area) {
    if (this.state.area == 'Dark Woods') {
      store.dispatch(updateDarkWoods(this.state.data));
    }
    else if (this.state.area == 'Stony Path') {
      store.dispatch(updateStonyPath(this.state.data));
    }
    else if (this.state.area == 'Abandoned Mine') {
      // Update Abandoned Mine
    }
    else if (this.state.areas == 'Trading Post') {
      // Updating Trading Post
      store.dispatch(updateTradePost(this.state.data));
    }

    this.setState({area: area}, () => {
      if (this.state.area == 'Dark Woods') {
        this.darkWoods.current.init(store.getState().areas.darkWoods);
      }
      else if (this.state.area == 'Stony Path') {
        this.stonyPath.current.init(store.getState().areas.stonyPath);
      }
      else if (this.state.area == 'Abandoned Mine') {
        // Update Abandoned Mine
      }
      else if (this.state.areas == 'Trading Post') {
        // Updating Trading Post
        this.tradePost.current.init(store.getState().areas.tradePost);
      }
    });
  }

  render() {
    let unlocked = [];
    let areas = store.getState().areas;

    if (areas.darkWoods.enabled) {
      unlocked.push('Dark Woods');
    }
    if (areas.stonyPath.enabled) {
      unlocked.push('Stony Path');
    }
    if (areas.abandonedMine.enabled) {
      unlocked.push('Abandoned Mine');
    }
    if (areas.tradePost.enabled) {
      unlocked.push('Trading Post');
    }

    unlocked = unlocked.map(area =>
      (area === this.state.area) ? <p className="area area-selected" key={area}><u>{area}</u></p> : <p className="area area-unselected" onClick={() => this.setArea(area)} key={area}>{area}</p>
    );

    let area;
    if (this.state.area === 'Dark Woods') {
      area = (
        <DarkWoods ref={this.darkWoods}/>
      );
    }
    else if (this.state.area === 'Stony Path') {
      area = (
        <StonyPath ref={this.stonyPath}/>
      );
    }
    else if (this.state.area === 'Abandoned Mine') {
      area = '';
    }
    else if (this.state.area === 'Trading Post') {
      area = (
        <TradePost ref={this.tradePost}/>
      );
      //area = '';
    }

    return (
      <div id="interface">
        <div className="areas">
          {unlocked}
        </div>
        {area}
      </div>
    );
  }
};
