import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Room extends React.Component {
  state = {
    isLit: true,
    temperature: 42
  };

  fliplight = () => {
    this.setState({ isLit: !this.state.isLit });
  };

  onButton = () => {
    this.setState({ isLit: true });
  };

  offButton = () => {
    this.setState({ isLit: false });
  };

  increaseTemp = () => {
    this.setState({ temperature: this.state.temperature + 1 });
  };
  decreaseTemp = () => {
    this.setState({ temperature: this.state.temperature - 1 });
  };

  render() {
    const brightness = this.state.isLit ? "lit" : "dark";

    return (
      <div className={`room ${brightness}`}>
        <div className="bodyText">
          The room is {this.state.isLit ? "lit" : "dark"}
          <div>and the temperature is {this.state.temperature}</div>
        </div>
        <br />
        <b>
          <button onClick={this.fliplight} className="btn">
            {" "}
            flip{" "}
          </button>
          <br />
          <br />
          <button onClick={this.onButton}> on </button>
          <br />
          <br />
          <button onClick={this.offButton}> off </button>
          <br />
          <br />
          <button onClick={this.increaseTemp}> + </button>
          <br />
          <br />
          <button onClick={this.decreaseTemp}> - </button>
        </b>{" "}
      </div>
    );
  }
}
ReactDOM.render(<Room />, document.getElementById("root"));
