import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import c from '@/const';
import {log} from '@/utils';

import CooldownButton from '@/components/CooldownButton';
import DarkWoods from '@/components/Interface/DarkWoods'

export default class Interface extends React.Component {
  constructor(props) {
    super(props);

    this.darkWoods = React.createRef();

    this.state = {
      areas: ['Dark Woods', 'Abandoned Mine', 'Trading Post'],
      area: 'Dark Woods'
    }
  }

  componentDidMount() {
    log('Interface mounted');
  }

  tick() {
    log('Interface tick');
    this.darkWoods.current.tick();
  }

  setArea(area) {
    this.setState({area: area});
    log(this.state.area);
  }

  cooldownFunction() {
    console.log('CooldownButton clicked!');
  }

  render() {
    let unlocked = this.state.areas.map(area =>
      (area === this.state.area) ? <p className="area-selected" key={area}><u>{area}</u></p> : <p className="area-unselected" onClick={() => this.setArea(area)} key={area}>{area}</p>
    );

    let area;
    if (this.state.area === 'Dark Woods') {
      area = (
        <DarkWoods ref={this.darkWoods}/>
      );
    }
    else if (this.state.area === 'Abandoned Mine') {
      area = '';
    }
    else if (this.state.area === 'Trading Post') {
      area = '';
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
