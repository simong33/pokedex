import React, {Component} from 'react';
import "./Gameboy.css";

class Gameboy extends Component {
  render() {
    return (
      <div id="gameboy">
        <div id="header-v"></div>
          <div id="header-v"></div>
          <div id="header-h"></div>
          <div id="header-circle"></div>
          <div id="v-bit"></div>
          <div id="v-bit2"></div>
          <div id="v-bit3"></div>
          <div id="screen-outer">
            <div id="screen-inner">
              <div id="screen-top">
                <div id="screen-top-purple"></div>
                <div id="screen-top-text"></div>
                <div id="screen-top-purple"></div>
              </div>
              <div id="screen-circle" className="screen-on"></div>
              <div id="screen-left-text"></div>
              <div id="screen-display">

                <div id="screen-display-triangle"></div>
              </div>
            </div>
          </div>
          <div id="text"></div>

          <div id="dpad">
            <div id="dpad-center"></div>
            <div className="dpad-top">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="dpad-top dpad-bottom">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="dpad-top dpad-left">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="dpad-top dpad-right">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>


          <div id="button-container">
            <div></div>
            <div></div>
          </div>
          <div id="button-text"></div>
          <div id="start-button"></div>
          <div id="start-button"></div>
          <div id="bottom-right-shadow"></div>
          <div id="bottom-right">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div id="footer-circle">
            <div id="header-circle"></div>
            <div id="v-bit"></div>
            <div id="v-bit2"></div>
            <div id="v-bit3"></div>
          </div>
      </div>
    )
  }
}

export default Gameboy;
