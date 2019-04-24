/* Minimal example pulled from https://github.com/reactjs/react-modal */
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import './styles.scss';

export default class LoginModal extends React.Component {
  constructor () {
    super();

    this.state = {
      showModal: false,
      styles: {
        modal: {
          content : {
            top: '50%',
            left: '50%',
            width: '50%',
            height: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column'
          }
        },
        close: {
          float: 'right'
        },
        login: {
          fields: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: '20%',
            marginRight: '20%',
            paddingBottom: '20%'
          },
          title: {
            textAlign: 'center'
          },
          username: {
            padding: '10px',
            marginBottom: '5px',
            fontSize: '12px'
          },
          password: {
            padding: '10px',
            marginTop: '5px',
            marginBottom: '5px',
            fontSize: '12px'
          },
          login: {
            marginTop: '5px',
            backgroundColor: '#cccccc',
            border: '1px solid #b2b2b2',
            padding: '10px',
            color: 'white'
          }
        }
      }
    };

    this.loginUsername = React.createRef();
    this.loginPassword = React.createRef();

    this.registerEmail = React.createRef();
    this.registerUsername = React.createRef();
    this.registerPassword = React.createRef();
    this.registerRePassword = React.createRef();

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.login = this.login.bind(this);
  }

  handleOpenModal() {
    this.setState({showModal: true});
  }

  handleCloseModal() {
    this.setState({showModal: false});
  }

  login() {
    let username = this.loginUsername.current.value;
    let password = this.loginPassword.current.value;
    console.log('Username: ' + username + ' Password: ' + password);
  }

  register() {
    let email = this.registerEmail.current.value;
    let username = this.registerUsername.current.value;
    let password = this.registerPassword.current.value;
    let repassword = this.registerRePassword.current.value;
  }

  render () {
    return (
      <div>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          style={this.state.styles.modal}>

          <FontAwesomeIcon icon={faTimes} onClick={this.handleCloseModal} style={this.state.styles.close}/>

          <div style={this.state.styles.login.fields}>
            <h2 style={this.state.styles.login.title}>Log In</h2>
            <input type="text" placeholder="Username" style={this.state.styles.login.username} ref={this.loginUsername}/>
            <input type="password" placeholder="Password" style={this.state.styles.login.password} ref={this.loginPassword}/>
            <button onClick={this.login} style={this.state.styles.login.login}>Log in</button>
          </div>
        </Modal>
      </div>
    );
  }
}
