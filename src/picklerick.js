import React, { Component } from 'react';
import './picklerick.css';
import picklepic from './Pickle_rick_transparent.webp'
import aud from './IM PICKLE RICK.mp3'

class PickleRick extends Component{
	butscript = () => {
		if (this.pickle.paused) {
			this.pickle.play()}
		else {
			this.pickle.pause()}
	}

	render() {
		return (
			<div>
				<img src={picklepic} class="Picklerick" onClick={this.butscript}/>
				<audio ref={(el) => this.pickle = el} src={aud}/>
			</div>
		);
	}
}

export default PickleRick;
