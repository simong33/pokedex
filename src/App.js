import React, { Component } from 'react';
import './App.css';
import Gameboy from './components/Gameboy';
import Search from './components/Search';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "bulbasaur",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      weight: "60",
    }
  }

  componentDidMount() {
    document.title="Pokédex"
  }

  render() {
    return (
      <div className="App">
        <Gameboy game="pokémon">
        </Gameboy>
      </div>
    );
  }
}

export default App;
