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

    return (
      <div id="interface">
        <div className="areas">
          {unlocked}
        </div>
        <DarkWoods ref={this.darkWoods}/>
      </div>
    );
  }
};
