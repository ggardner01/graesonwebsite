import React, { Component } from 'react';
import './picklerick.css';
import picklepic from './Pickle_rick_transparent.webp';
import aud from './IM PICKLE RICK.mp3';

class PickleRick extends Component{

	componentDidUpdate(prevProps) {
		if (this.props.pickleplay !== prevProps.pickleplay) {
			this.props.pickleplay ? this.pickle.play() : this.pickle.pause();
		}
	}

	butscript = () => {
		if (this.pickle.paused) {
			this.pickle.play();
			this.props.onrickplay(true);
		}
		else {
			this.pickle.pause()
		  this.props.onrickplay(true);
		}
}

	render() {
		return (
			<div>
				<img src={picklepic} className="Picklerick" onClick={this.butscript}/>
				<audio ref={(el) => this.pickle = el} src={aud}/>
			</div>
		);
	}
}

export default PickleRick;
