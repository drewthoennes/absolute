import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import {log} from '@/utils';

export default class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  tick() {
    log('Feed tick');
  }

  render() {
    return (
      <div id="feed">
        <p>Feed</p>
      </div>
    );
  }
};
