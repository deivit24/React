import React from 'react';
import './Coin.css';
class Coin extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.info.imgSrc} alt={this.props.info.side} />
      </div>
    );
  }
}

export default Coin;
