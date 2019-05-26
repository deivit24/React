import React from 'react';

class BrokenClick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({ clicked: true });
  }
  render() {
    return (
      <div>
        <h1>{this.state.clicked ? 'Clicked!!' : 'Not Clicked'}</h1>
        <button onClick={this.handleClick}>Broken Click</button>
      </div>
    );
  }
}

export default BrokenClick;
