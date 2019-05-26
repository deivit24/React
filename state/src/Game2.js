import React from 'react';

class Game2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      clicked: false,
      winner: 7
    };
    this.show = this.show.bind(this);
  }
  show(e) {
    let rand = Math.floor(Math.random() * 10) + 1;
    this.setState({
      clicked: true,
      num: rand
    });
  }

  render() {
    if (this.state.num === this.state.winner) {
      document.getElementById('button').style.display = 'none';
      document.getElementById('win').style.display = 'block';
    }
    return (
      <div>
        <h1>Number is {this.state.clicked ? this.state.num : '0'}</h1>
        <h1 id="win" style={{ display: 'none' }}>
          {' '}
          You Win!
        </h1>
        <button id="button" onClick={this.show}>
          Click Me
        </button>
      </div>
    );
  }
}

export default Game2;
