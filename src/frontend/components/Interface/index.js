import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import c from '@/const';
import {log} from '@/utils';

import CooldownButton from '@/components/CooldownButton';

export default class Interface extends React.Component {
  constructor(props) {
    super(props);

    this.cooldown = React.createRef();

    this.state = {
      area: 'Dark Woods'
    }
  }

  componentDidMount() {
    log('Interface mounted');
    // setInterval(this.cooldown.current.startCooldown(3000), 5000);
    // this.cooldown.current.startCooldown(5000);
  }

  tick() {
    log('Interface tick');
    this.cooldown.current.tick();
  }

  setArea(area) {
    this.setState({area: area});
    log(area);
  }

  render() {
    let areas = ['Dark Woods', 'Abandoned Mine', 'Trading Post'];
    const unlocked = areas.map((area) =>
      (area === this.state.area) ? <p key={area}><u>{area}</u></p> : <p onClick={() => this.setArea({area})} key={area}>{area}</p>
    );

    let selected = (
      <CooldownButton ref={this.cooldown} text="Click me"/>
    );

    return (
      <div id="interface">
        <div className="areas">
          {unlocked}
        </div>
        {selected}
      </div>
    );
  }
};
