import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

import Loop from '@/components/Loop';

export default class Game extends React.Component {
  render() {
    return (
      <div className="full">
        <Loop/>
      </div>
    );
  }
};
