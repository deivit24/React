import React from 'react';
import './Pokegame.css';
import Pokedex from './Pokedex';

class Pokegame extends React.Component {
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
    let hand1 = [];
    let hand2 = [...this.props.pokemon];
    while (hand1.length < hand2.length) {
      let randIdx = Math.floor(Math.random() * hand2.length);
      let randPokemon = hand2.splice(randIdx, 1)[0];
      hand1.push(randPokemon);
    }
    let exp1 = hand1.reduce((texp, pokemon) => texp + pokemon.exp, 0);
    let exp2 = hand2.reduce((texp, pokemon) => texp + pokemon.exp, 0);
    let refresh = function refresh() {
      window.location.reload();
    };
    return (
      <div className="Pokegame">
        <button
          className="Pokegame-button"
          type="submit"
          value="Refresh Page"
          onClick={refresh}
        >
          {' '}
          Restart
        </button>
        <Pokedex pokemon={hand1} texp={exp1} isWinner={exp1 > exp2} />
        <Pokedex pokemon={hand2} texp={exp2} isWinner={exp2 > exp1} />
      </div>
    );
  }
}

export default Pokegame;
