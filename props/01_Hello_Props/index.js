class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          to="Ringo"
          from="Paul"
          bangs={4}
          img="https://wealthmods.com/dist/img/blog/retirement1.jpg"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
