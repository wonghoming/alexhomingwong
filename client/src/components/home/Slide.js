import React, { Component } from "react";
import arrayOfWork from "./arrayOfWork";

class Slide extends Component {
	addClassAbsolute() {
		let slides = document.getElementsByClassName("slide");
		for (let i = 1; i < slides.length; i++) {
			slides[i].classList.add("absolute");
		}
	}
	renderSlide() {
		return arrayOfWork.map(element => {
			return <img src={element.img} className="img-fluid slide" key={element.name} alt={element.name}/>;
		});
	}
	remderIndicators(){
		let html =[]
		for (let i =0; i<arrayOfWork.length;i++){
				html.push(<li className="indicator" onClick={this.props.indicatorsOnClick} index={i} key={i} />);
		}
		return <ul>{html}</ul>;
	}
	componentDidMount(){
		this.addClassAbsolute();
	}
	render() {
		return (
			<div className="slideshowWrapper">

				<div className="imgWrapper">{this.renderSlide()}</div>
        <div className="markers">{this.remderIndicators()}</div>
				<div className="label" id="label"></div>
			</div>
		);
	}
}

export default Slide;
