import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import './styles.scss';
import {log} from '@/utils';
import store from '@/store';
import {incWood} from '@/store/actions';

export default class Inventory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      unlocked: ['wood'],
      items: {
        wood: {
          quantity: 0
        },
        fur: {
          quantity: 0
        },
        claw: {
          quantity: 0
        },
        hide: {
          quantity: 0
        },
        trap: {
          quantity: 0,
          cost: {
            wood: [10, 20, 30, 60, 100]
          }
        },
        dagger: {
          quantity: 0,
          cost: {
            wood: [10],
            claws: [5],
            hide: [3]
          }
        }
      }
    }
  }

  componentDidMount() {
      // store.subscribe(() => console.log(store.getState()));
      // store.dispatch(incWood(3));
  }

  tick() {
    log('Inventory tick');
  }

  render() {
    const materials = this.state.unlocked.map(item =>
      <p key={item}>{item}: {this.state[item]}</p>
    );

    return (
      <div id="inventory">
        <div id="materials">
          {materials}
        </div>
      </div>
    );
  }
};
