import React, { Component } from 'react';
import mediaJson from '../json/media.json';
import Image from 'react-image-resizer';
import '../styles/Media.css';

const mediaList = mediaJson['media'];

const ImageComponent = ({ children, img }) => img ? (
	<Image src={process.env.PUBLIC_URL + "/images/mediaImages/" + img} height={250} width={250}>
	  {children}
	</Image>
  ) : <div>{children}</div>;

class Media extends Component {
	constructor() {
		super();
		this.state = {
			limitTo: 10
		};
		this.onLoadMore = this.onLoadMore.bind(this);
	}
	onLoadMore () {
		this.setState({
			limitTo: this.state.limitTo + 10
		})
	}

	render() {
		mediaList.sort(function(a, b) {
			var dateA = new Date(a.date), dateB = new Date(b.date);
			return dateB - dateA;
		});

		const media = mediaList.slice(0, this.state.limitTo).map((mediaItem, index) => {
			return <div className='mediaContainer' key={index}>
						<div className='row'>
						<div className='col-md-8'>
							<h5><strong>{mediaItem.date}</strong></h5>
							<h5><strong>{mediaItem.title}</strong></h5>
							<p>{mediaItem.description}</p>
							<a className='goTo' target="_blank" href={mediaItem.goToLink}>Go to...</a></div>
						<div className='col-md-1'></div>
						<div className='col-md-2'>
							<ImageComponent img={mediaItem.img}></ImageComponent>
						</div>
						</div>
					</div>

		})
		return (
				<div className='container'>
					<h1>Media</h1>
					{media}
					<button className='loadMore' onClick={this.onLoadMore}>Load More</button>
				</div>
			);
	}
}

export default Media;