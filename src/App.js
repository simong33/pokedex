import React, { Component } from 'react';
import './App.css';
import Gameboy from './components/Gameboy';
import Search from './components/Search';
import Screen from './components/Screen';
import Loading from './components/Loading';

const rotateAnimation = () => {
  var container = document.getElementById("container"),
      inner = document.getElementById("gameboy");

    // Mouse
    var mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function(event) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function(e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
      },
      show: function() {
        return "(" + this.x + ", " + this.y + ")";
      }
    };

    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(container);

    //-----------------------------------------

    var counter = 0;
    var updateRate = 10;
    var isTimeToUpdate = function() {
      return counter++ % updateRate === 0;
    };

    //-----------------------------------------

    var onMouseEnterHandler = function(event) {
      update(event);
    };

    var onMouseLeaveHandler = function() {
      inner.style = "";
    };

    var onMouseMoveHandler = function(event) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };

    //-----------------------------------------

    var update = function(event) {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
      );
    };

    var updateTransformStyle = function(x, y) {
      var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
      inner.style.transform = style;
      inner.style.webkitTransform = style;
      inner.style.mozTransform = style;
      inner.style.msTransform = style;
      inner.style.oTransform = style;
    };

    //-----------------------------------------

    container.onmouseenter = onMouseEnterHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmousemove = onMouseMoveHandler;
}

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
    rotateAnimation()
  }

  onSearch = (data) => {
    this.setState({
      pokemon: data,
    })
  }

  render() {
    return (
      <div
        className="App"
        id="container"
        >
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
