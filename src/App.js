import React, { Component } from 'react';
import './App.css';
import Gameboy from './components/Gameboy';
import Search from './components/Search';
import Screen from './components/Screen';
import Loading from './components/Loading';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: {
        name: "",
        sprite: ""
      }
    }
  }

  componentDidMount() {
    document.title="Pokédex"
  }

  onSearch = (data) => {
    this.setState({
      pokemon: data,
    })
  }

  render() {
    return (
      <div className="App">
        <Gameboy>
          <Search onSearch={this.onSearch}/>
          {!this.state.pokemon
            ? <Loading />
            : <Screen pokemon={this.state.pokemon}/>}
        </Gameboy>
      </div>
    );
  }
}

export default App;
