function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

class JSXDemo extends React.Component {
  render() {
    const num = getNum();
    let msg;
    if (num === 7) {
      msg = (
        <div>
          <p>Congrats my son</p>
        </div>
      );
    } else {
      msg = (
        <div>
          <p>fuck you boi!!!</p>
        </div>
      );
    }
    return (
      <div>
        <h1>Your number is {num} </h1>
        <p>{num === 7 ? 'Congrats' : 'Unlucky!'}</p>
        {msg}
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));
