import React from 'react';
import Coin from './Coin';

class CoinFlip extends React.Component {
  static defaultProps = {
    coins: [
      { side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg' },
      { side: 'tails', imgSrc: 'https://tinyurl.com/react-coin-tails-jpg' }
    ]
  };
  constructor(props) {
    super(props);
    this.state = {
      countHeads: 0,
      countTails: 0,
      countFlips: 0,
      curCoin: 0
    };
    this.clickHandle = this.clickHandle.bind(this);
  }
  flipCoin() {
    let rand = Math.floor(Math.random() * 2) + 1;
    this.setState(curState => ({ curCoin: rand - 1 }));
    this.setState({ countFlips: this.state.countFlips + 1 });
    if (rand === 1) {
      this.setState(curState => ({
        countHeads: this.state.countHeads + 1
      }));
      console.log('its Heads');
    } else {
      this.setState(curState => ({
        countTails: this.state.countTails + 1
      }));
      console.log('its Tails');
    }
  }
  clickHandle(e) {
    this.flipCoin();
  }
  render() {
    return (
      <div>
        <Coin info={this.props.coins[this.state.curCoin]} />
        <button onClick={this.clickHandle}>Generate</button>
        <h1> Out of {this.state.countFlips} Coin Flips </h1>
        <h1>
          {' '}
          it landed on heads {this.state.countHeads} times and it landed on
          tails {this.state.countTails} times
        </h1>
      </div>
    );
  }
}

export default CoinFlip;
