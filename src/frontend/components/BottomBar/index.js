import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

export default class Loop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    }

    if (localStorage.getItem('token')) {
      this.state.loggedIn = true;
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.openLoginModal = this.openLoginModal.bind(this);
  }

  openLoginModal() {
    this.props.openLoginModal();
  }

  handleLogin() {
    this.setState({loggedIn: true});
  }

  handleLogout() {
    this.setState({loggedIn: false});
    localStorage.removeItem('token');
    this.props.handleLogout();
  }

  render() {
    // Buttons: Logout, Erase, Dark, Jalapeño, *Saved*, ...
    let auth;
    if (this.state.loggedIn) {
      auth = (
        <p onClick={this.handleLogout}>Log out</p>
      );
    }
    else {
      auth = (
        <p onClick={this.openLoginModal}>Log in</p>
      );
    }

    return (
      <div id="bottom-bar">
        {auth}
      </div>
    );
  }
};
