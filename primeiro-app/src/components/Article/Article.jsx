import React from "react";
import "./style.css";

export class Article extends React.Component {
  render() {
    return (
      <article id="articleBase">
        <img src={this.props.thumbnail} alt={this.props.title} />
      

        <div className="articlecontent">
          <h2>{this.props.title}</h2>
          <h3>{this.props.provider}</h3>

          <p>
            {this.props.description}
          </p>
        </div>
      </article>

    );
  }
}