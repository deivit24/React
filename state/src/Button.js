import React from 'react';
class Button extends React.Component {
  render() {
    let click = function() {
      alert('clicked');
    };
    return (
      <div>
        <button onClick={click}> Click me </button>
      </div>
    );
  }
}

export default Button;
