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
            fontSize: '12px'
          }
        }
      }
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({showModal: true});
  }

  handleCloseModal () {
    this.setState({showModal: false});
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
            <input type="text" placeholder="Username" style={this.state.styles.login.username}/>
            <input type="text" placeholder="Password" style={this.state.styles.login.password}/>
          </div>
        </Modal>
      </div>
    );
  }
}
