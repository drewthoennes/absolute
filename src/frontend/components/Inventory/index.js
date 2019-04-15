import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import {log} from '@/utils';

export default class Inventory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      unlocked: ['wood', 'fur'],
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
      },
      wood: 0,
      trap: 0,
      fur: 0,
      claw: 0
    }
  }

  componentDidMount() {
      // setInterval(() => this.incrementWood(1), 1000);
  }

  tick() {
    log('Inventory tick');
  }

  incrementWood(val) {
    this.setState({wood: this.state.wood + val});
    log(this.state.wood);
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
