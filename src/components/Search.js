import React, {Component} from 'react';
import axios from 'axios';

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      search: "",
      notFound: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch = (e) => {
    this.setState({
      search: e.target.value,
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();

    axios.get(`https://cors.io/?http://pokeapi.co/api/v2/pokemon/${this.state.search}`)
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
        {this.state.notFound &&
          <p>Not found! Try again.</p>
        }
      </form>
    )
  }
}

export default Search;
