import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Modal from 'react-modal';
import App from '@/components/App';
import store from '@/store';
import './styles.scss';

Modal.setAppElement('#app')

import Game from '@/pages/Game'

ReactDOM.render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('app'));
