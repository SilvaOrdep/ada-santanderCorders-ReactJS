import React from "react";

export class Counter extends React.Component {
  constructor() {
    super();

    this.state = { counter: 0 };
  }
  render() {
    return (
      <div>
        <h2>{this.state.counter}</h2>

        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          Aumentar
        </button>
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter - 1 });
          }}
        >
          Diminuir
        </button>
        <button
        onClick={() => {
          this.setState({ counter: 0 });
        }}
        >Zerar</button>
      </div>
    );
  }
}
