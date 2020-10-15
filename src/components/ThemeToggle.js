import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class ThemeToggle extends Component {
  state = {
    mode: "dark",
  };
  static contextType = ThemeContext;
  render() {
    const { toggleTheme } = this.context;

    const changeMode = () => {
      if (this.state.mode === "dark") {
        this.setState({ mode: "light" });
      } else {
        this.setState({ mode: "dark" });
      }
    };
    return (
      <div>
        <h5>switch to {this.state.mode} mode</h5>
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => {
              toggleTheme();
              changeMode();
            }}
          />
          <span className="slider"></span>
        </label>
      </div>
    );
  }
}

export default ThemeToggle;
