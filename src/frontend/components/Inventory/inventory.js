import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import {log} from '@/utils';

export default class Inventory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        'wood',
        'furs',
        'claws',
        'hides',
        'traps',
        'daggers'
      ]
    }
  }

  render() {
    let materials = this.state.items.filter(item => {
      return this.props[item] ? this.props[item].visible : false
    }).map(item =>
      <div key={item} className="material">
        <p>{item}:</p>
        <p>{this.props[item].quantity}</p>
      </div>
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
