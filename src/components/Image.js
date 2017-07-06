import React, { Component } from 'react';
const baseUrl = 'http://res.cloudinary.com/f2083/image/upload/';

class CloudImage extends Component{
	render() {
		return(<div>
			<img src={baseUrl+this.props.public_id+'.'+this.props.format} style={this.props.css}/>
			</div>
		)	
	}
}

export default CloudImage