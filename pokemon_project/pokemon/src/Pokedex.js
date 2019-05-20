import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends React.Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: 'Charmander', type: 'fire', exp: 62 },
      { id: 7, name: 'Squirtle', type: 'water', exp: 63 },
      { id: 11, name: 'Metapod', type: 'bug', exp: 72 },
      { id: 12, name: 'Butterfree', type: 'flying', exp: 178 },
      { id: 25, name: 'Pikachu', type: 'electric', exp: 112 },
      { id: 39, name: 'Jigglypuff', type: 'normal', exp: 95 },
      { id: 94, name: 'Gengar', type: 'poison', exp: 225 },
      { id: 133, name: 'Eevee', type: 'normal', exp: 65 }
    ]
  };
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Pokedex-winner">Winning Hand</h1>;
    } else {
      title = <h1 className="Pokedex-loser">Losing Hand</h1>;
    }
    return (
      <div className="Pokedex">
        <h1 className="Pokedex-title">Pokedex</h1>
        <p className="Pokedex-totalExp">total experiance {this.props.texp}</p>
        {title}
        <div className="Pokedex-cards">
          {this.props.pokemon.map(p => (
            <Pokecard id={p.id} name={p.name} type={p.type} exp={p.exp} />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
