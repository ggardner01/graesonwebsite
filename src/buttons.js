import React, { Component } from 'react';
import "./buttons.css";

class Buttons extends Component{

  render() {
    return(
      <div className="main">
        <header className="head">
          <h2 className="spac">"  "</h2>
          <h2 className="but" onClick={() => this.props.page("home")}>Home</h2>
          <h2 className="spac">"  "</h2>
          <h2 className="but" onClick={() => this.props.page("blog")}>Blog</h2>
          <h2 className="spac">"  "</h2>
          <h2 className="but" onClick={() => this.props.page("pics")}>Pics</h2>
          <h2 className="spac">"  "</h2>
          <h2 className="but" onClick={() => this.props.page("about")}>About</h2>
        </header>
      </div>
    );
  }
}

export default Buttons;
