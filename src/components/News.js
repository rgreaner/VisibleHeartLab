import React, { Component } from 'react';
import labNewsJson from '../json/labNews.json';
import '../styles/News.css';
import Image from 'react-image-resizer';

var moment = require('moment');

const newsList = labNewsJson['news'];

const ImageComponent = ({ children, img }) => img ? (
	<Image src={process.env.PUBLIC_URL + "/images/" + img} height={125} width={125}>
	  {children}
	</Image>
  ) : <div>{children}</div>;
  
class News extends Component {
	constructor() {
		super();
		this.state = {
			search: '',
			limitTo: 5
		};
			this.onLoadMore = this.onLoadMore.bind(this) 
	}

	onLoadMore () {
		this.setState({
			limitTo: this.state.limitTo + 5
		})
	}

	updateSearch(event) {
		this.setState({ search: event.target.value }) 
	}

	render() {
				newsList.sort(function(a, b) {
						var dateA = new Date(a.date), dateB = new Date(b.date);
						console.log(dateB);
						return dateB - dateA;
						
					});

				let filteredNews = newsList.filter((newsItem) => {
					return newsItem.description.toLowerCase().includes(this.state.search.toLowerCase())
					}
				);
	
				const news = filteredNews.slice(0, this.state.limitTo).map((newsItem, index) => {
					return <div className='newsContainer' key={index}>
					
					<div className='row'>
						<div className="col-md-9">
							<p><strong>
							{moment(newsItem.date).format("MMMM YYYY")} 
							</strong><br></br>
							{newsItem.description}
							</p>
							<p>{newsItem.more}</p>
						</div>
					
						<div className='col-md-1' id="hideDiv"></div>
						<div classname='col-md-2' id="alterImage">
							<ImageComponent img={newsItem.img}></ImageComponent></div>
					</div>
				</div>
				});
				
			
		return (
				<div className='container'>
					
						<div className='pageTitle'><h1>Lab News</h1></div>
						<div>
							<p id="searchbox-container"> Search the News: 

							<input id="searchbox" type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} />
							</p>
						</div>
				
						<div>
							<br></br>
							<br></br>
					 <div>{news}</div>
					 <button style={{ display: this.state.limitTo >= newsList.length ? 'none' : 'block' }}className='loadMore' onClick={this.onLoadMore}>Load More</button>
				</div>
				</div>
			);
	 }
}

export default News;