import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

export default class Interface extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      area: 'Dark Woods'
    }
  }
  
  setArea(area) {
    this.setState({area: area});
    console.log(area);
  }

  render() {
    let areas = ['Dark Woods', 'Abandoned Mine', 'Trading Post'];
    const unlocked = areas.map((area) =>
      (area === this.state.area) ? <p key={area}><u>{area}</u></p> : <p onClick={() => this.setArea({area})} key={area}>{area}</p>
    );

    return (
      <div id="interface">
        <div className="areas">
          {unlocked}
        </div>
      </div>
    );
  }
};
