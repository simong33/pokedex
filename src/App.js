import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "bulbasaur",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      search: "",
      weight: "60",
      notFound: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    document.title="Pokédex"
  }

  handleSearch = (e) => {
    this.setState({
      search: e.target.value,
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();

    axios.get(`http://pokeapi.co/api/v2/pokemon/${this.state.search}`)
      .then(response => {
        let data = response.data;

        console.log(data)

        this.setState({
          name: data.name,
          image: data.sprites.front_default,
          weight: data.weight,
          notFound: false
        })
      })
      .catch(error => {
        console.log(error);

        this.setState({
          notFound: true
        })
      });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.name}</h1>
          <h2 className="weight">{this.state.weight} lb</h2>
        </header>
        <img className="picture" src={this.state.image} alt={this.state.pokemon} />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search Pokémon"
            value={this.state.search}
            onChange={this.handleSearch}
          />
          <button className="button"
            type="submit"
          >
            Find
          </button>
        </form>
        {this.state.notFound &&
          <p>Not found! Try again.</p>
        }
      </div>
    );
  }
}

export default App;
