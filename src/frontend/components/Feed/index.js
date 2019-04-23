import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import {log, getTimeElapsed} from '@/utils';
import store from '@/store';
import {completedLine, deleteLines} from '@/store/actions';
import {tick} from './events';

let lastSecond = 0;
let hasPrinted = false;

export default class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.printLines = this.printLines.bind(this);

    this.state = {
      lines: [],
      maxLines : 15
    }

    this.getOldLines();
  }

  tick() {
    tick();
    this.printLines();
  }

  getLines(time) {
    return store.getState().dialogue.lines[time];
  }

  printLines() {
    let time = getTimeElapsed();
    if (time > lastSecond) {
      lastSecond = time;
      hasPrinted = true;
    }
    else if (time == lastSecond && hasPrinted) {
      return;
    }

    let lines = this.getLines(time);

    if (lines) {

      let concat = this.state.lines.reverse().concat(lines).reverse();

      // Trucate feed
      if (concat.length > this.state.maxLines) {
        concat = concat.slice(0, this.state.maxLines);
      }
      this.setState({
        lines: concat
      });
    }
  }

  getOldLines() {
    let lines = store.getState().dialogue.lines;

    let current = getTimeElapsed();
    if (current == 0) {
      return;
    }

    let toPrint = [];
    let times = [];
    for (let time in lines) {
      if (time > current) {
        break;
      }

      lines[time].forEach(line => {
        toPrint.push(line);
      });

      times.push(time);
    }

    // Stops dialogue (that is a multiple of the saveFreq) from printing out again
    lastSecond = current;
    hasPrinted = true;

    // Truncate feed
    if (toPrint.length > this.state.maxLines) {
      toPrint = toPrint.slice(0, this.state.maxLines);
    }

    this.state.lines = toPrint.reverse();
  }

  render() {
    let index = 0;
    let lines = this.state.lines.map(line =>
      <p key={line + "-" + index++}>{line}</p>
    );

    let fade;
    // Only show fade if the feed has reached the bottom
    if (this.state.maxLines == this.state.lines.length) {
      fade = (
        <div className="fade"></div>
      );
    }
    else {
      fade = '';
    }

    return (
      <div id="feed">
        <div id="lines">
          {lines}
          {fade}
        </div>
      </div>
    );
  }
};
