import React, { Component } from 'react';
import Dick from './dick'
import logo from './logo.svg';
import './App.css';
import grae from './pic.jpg';
import video from  './africa.mp4'

class App extends Component {

	butscript = () => {
		if (this.africa.paused) {
			this.africa.play()}
		else {
			this.africa.pause()}
	}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={grae} className="Grae-logo" alt="logo" />
          <h1 className="App-title">What up motherfuckers.</h1>
          <h2 className="App-title"> I'm Graeson and </h2>
          <h2 className="App-title"> welcome to my website </h2>
        </header>

        <p className="App-intro">
          This is one badass motherfucker.
        </p>
        
        <Dick/>

		<h4 className="App-intro">
        	Shout out to my homeboys (Luke)
        </h4>

        <video ref={(el) => this.africa = el} src={video} /> 
        <br/>
        <button type="button" className="button" onClick={this.butscript}>Click Me Bitch</button> 
        <br/>

      </div>
    );
  }
}



export default App;
