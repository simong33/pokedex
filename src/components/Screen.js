import React, {Component} from 'react';

class Screen extends Component {
  render() {
    return (
      <div className="screen-content">
        <img src={this.props.pokemon.sprite} alt={this.props.pokemon.sprite}/>
        <h3>{this.props.pokemon.name}</h3>
      </div>
    )
  }
}

export default Screen;
