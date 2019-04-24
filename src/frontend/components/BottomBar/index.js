import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

export default class Loop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  openLoginModal() {
    console.log('Opening login modal');
    this.props.openLoginModal();
  }

  render() {
    // Buttons: Logout, Erase, Dark, Jalapeño, *Saved*, ...
    return (
      <div id="bottom-bar">
        <p onClick={() => this.openLoginModal()}>Login</p>
      </div>
    );
  }
};
