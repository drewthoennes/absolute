import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import {log, getTimeElapsed} from '@/utils';
import store from '@/store';
import {deleteLines} from '@/store/actions';

export default class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.printLines = this.printLines.bind(this);

    this.state = {
      lines: []
    }
  }

  tick() {
    log('Feed tick');
    this.printLines();
  }

  getLines(time) {
    return store.getState().dialogue.lines[time];
  }

  printLines() {
    let time = getTimeElapsed();
    let lines = this.getLines(time);
    store.dispatch(deleteLines(time));

    if (lines) {
      console.log(time + ": " + lines.toString());

      let concat = this.state.lines.reverse().concat(lines).reverse();
      this.setState({
        lines: concat
      });
      console.log(this.state.lines);
    }
  }

  render() {
    console.log('Render');
    let lines = this.state.lines.map(line =>
      <p key={line}>{line}</p>
    );

    return (
      <div id="feed">
        <div id="lines">
          {lines}
        </div>
      </div>
    );
  }
};
