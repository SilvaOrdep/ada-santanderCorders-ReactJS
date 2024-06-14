import React from "react";
import "./style.css";

export class Contador extends React.Component {
  constructor() {
    super();
    this.state = { contador: 0, name: "", password: "" };
  }

  render() {
    return (
      <div id="counter" style={{ margin: 20 }}>
        <h2>{this.state.contador}</h2>

        <button
          onClick={() => {
            this.setState({ contador: this.state.contador + 1 });
          }}
        >
          Aumentar
        </button>
        <button
          onClick={() => {
            this.setState({ contador: this.state.contador - 1 });
          }}
        >
          Diminuir
        </button>

        <button
          onClick={() => {
            this.setState({ contador: 0 });
          }}
        >
          Zerar
        </button>

        <div>
          <input
            type="text"
            placeholder="Nome"
            value={this.state.name}
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
          />
          <input
            type="password"
            placeholder="Senha"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />

          <button>Enviar</button>
        </div>
      </div>
    );
  }
}
