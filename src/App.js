import React, { Component } from 'react';
import PickleRick from './picklerick'
import logo from './logo.svg';
import './App.css';
import grae from './pic.jpg';
import video from  './africa.mp4'
import Buttons from './buttons'
import Home from './home'
import Blog from './blog'
import LioWebRTC from 'liowebrtc';

class App extends Component {


	constructor(props){
		super(props);
		this.page = this.page.bind(this)
		this.state = {
			page: "home",
			pickleplay: false,
		};
	}

	componentDidMount() {
		this.webrtc = new LioWebRTC({
    dataOnly: true,
		debug: true,
});
this.webrtc.on('readyToCall', () => {
    // Joins a room if it exists, creates it if it doesn't
    this.webrtc.joinRoom('main');

});
this.webrtc.on('receivedPeerData', (type, data, peer) => {
    if (type === 'play') {
        this.setState({pickleplay: data});
    }
});
	}

pickleshout = (inp) => {
	this.webrtc.shout("play", inp);
}

	page(inp){
		this.setState({page: inp})
	}

  render() {
    return (
			<div>
				<Buttons page={this.page} />
				{
					this.state.page === "home" &&
					<Home onrickplay={this.pickleshout} pickleplay={this.state.pickleplay} />
				}
				{
					this.state.page === "blog" &&
					<Blog/>
				}
			</div>

		);
  }
}



export default App;
