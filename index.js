class Hello extends React.Component {
  render() {
    return ( <
      div >
      <
      h1 > Hello there! < /h1> <
      h1 > Hello there! < /h1> <
      h1 > Hello there! < /h1> <
      p > Hello my name is David Salazar an I am learning react < /p> <
      /div>
    );
  }
}

ReactDOM.render( < Hello / > , document.getElementById('root'));

class Goodbye extends React.Component {
  render() {
    return ( <
      div >
      goodbye world <
      /div>
    );
  }
}

ReactDOM.render( < Goodbye / > , document.getElementById('gbye'));