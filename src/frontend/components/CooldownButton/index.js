import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import c from '@/const';
import {log} from '@/utils';

export default class CooldownButton extends React.Component {
  constructor(props) {
    super(props);

    this.cooldownClicked = this.cooldownClicked.bind(this);

    this.state = {
      initial: 1,
      remaining: 0,
      decrementing: false,
      width: 0,
      buttonClass: 'cooldown-enabled'
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
          decrementing: false,
          buttonClass: 'cooldown-enabled'
        });
      }
    }

    return this.state;
  }

  init(data, time) {
    let duration = (new Date().getTime()) - time;
    log('Duration was ' + duration);
    data.remaining -= duration;

    if (data <= 0) {
      this.setState({
        initial: data.initial,
        remaining: 0,
        width: 0,
        decrementing: false,
        buttonClass: 'cooldown-enabled'
      });
    }
    else {
      this.setState({
        initial: data.initial,
        remaining: data.remaining,
        width: 0,
        decrementing: data.decrementing,
        buttonClass: 'cooldown-disabled'
      });
    }
  }

  startCooldown(time) {
    log('CooldownButton startCooldown');
    this.setState({
      initial: time,
      remaining: time,
      width: 100,
      decrementing: true,
      buttonClass: 'cooldown-disabled'
    });
  }

  cooldownClicked() {
    if (this.state.decrementing) {
      return;
    }

    this.startCooldown(this.props.cooldown);
    this.props.cb();
  }

  render() {
    return (
      <div tooltip={this.props.tooltip == "" ? undefined : this.props.tooltip} className={"cooldown-button " + this.state.buttonClass} onClick={() => this.cooldownClicked()}>
        <div className="cooldown-button-text">
          <p>{this.props.text}</p>
        </div>
        <div className="cooldown" style={{width: this.state.width + '%'}}>
        </div>
      </div>
    );
  }
};

CooldownButton.defaultProps = {
  text: 'Sample text',
  tooltip: undefined,
  cooldown: 5000,
  cb: () => {
    log('Error: CooldownButton does not have a callback')
  }
}
