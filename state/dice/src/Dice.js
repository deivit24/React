import React from 'react';
import './Dice.css';

class Dice extends React.Component {
  render() {
    return (
      <div>
        <i
          className={`Die fas fa-dice-${this.props.face} ${
            this.props.rolling ? 'shake' : ''
          }`}
        />
      </div>
    );
  }
}

export default Dice;
