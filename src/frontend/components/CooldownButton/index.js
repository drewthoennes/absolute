import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import c from '@/const';
import {log} from '@/utils';

export default class CooldownButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initial: 1,
      remaining: 0,
      decrementing: false,
      width: 0
    }
  }

  componentDidMount() {
    log('CooldownButton mounted');
  }

  tick() {
    log('CooldownButton tick');

    if (this.state.decrementing) {
      this.setState({
        remaining: this.state.remaining - c.delta,
        width: ((this.state.remaining  - c.delta) / this.state.initial) * 100
      });

      if (this.state.remaining <= 0) {
        this.setState({
          initial: 1,
          remaining: 0,
          width: 0,
          decrementing: false
        });
      }
    }
  }

  startCooldown(time) {
    log('CooldownButton startCooldown');
    this.setState({
      initial: time,
      remaining: time,
      width: 100,
      decrementing: true
    });
  }

  render() {
    return (
      <div className="cooldown-button">
        <p>{this.props.text}</p>
        <div className={"cooldown"} style={{width: this.state.width + '%'}}>
        </div>
      </div>
    );
  }
};

CooldownButton.defaultProps = {
  text: 'Sample text'
}
