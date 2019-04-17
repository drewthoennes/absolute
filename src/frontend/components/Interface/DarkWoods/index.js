import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import c from '@/const';
import {log} from '@/utils';

import CooldownButton from '@/components/CooldownButton';

export default class DarkWoods extends React.Component {
  constructor(props) {
    super(props);

    this.cooldown = React.createRef();

    this.state = {
      area: 'Dark Woods'
    }
  }

  componentDidMount() {
    log('DarkWoods mounted');
  }

  tick() {
    this.cooldown.current.tick();
  }

  cooldownFunction() {
    console.log('CooldownButton clicked!');
  }

  render() {
    let selected = (
      <CooldownButton ref={this.cooldown} text="Click me" cb={this.cooldownFunction}/>
    );

    return (
      <div id="dark-woods">
        {selected}
      </div>
    );
  }
};
