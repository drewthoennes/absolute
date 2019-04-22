import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import c from '@/const';
import {log} from '@/utils';
import store from '@/store';
import {incWood} from '@/store/actions';

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

  gatherWood() {
    store.dispatch(incWood(3));
  }

  render() {
    let selected = (
      <CooldownButton ref={this.cooldown} text="Gather wood" cb={this.gatherWood}/>
    );

    return (
      <div id="dark-woods">
        {selected}
      </div>
    );
  }
};
