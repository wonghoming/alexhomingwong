import React, { Component } from "react";
import Slide from "./Slide";
import arrayOfWork from "./arrayOfWork";

const slides = document.getElementsByClassName("slide");
const indicators = document.getElementsByClassName("indicator");

class Slideshow extends Component {
	constructor(props) {
		super(props);
		this.runSlideshow = this.runSlideshow.bind(this);
		this.indicatorsOnClick = this.indicatorsOnClick.bind(this);
		this.enableSlideshow = this.enableSlideshow.bind(this);
		this.state = { slideIndex: 0, run: true };
	}
	slideshowTransition(index) {
		for (let i = 0; i < slides.length; i++) {
			indicators[i].style.width = "55%";
			slides[i].classList.remove("fadeIn");
		}
		slides[index].classList.add("fadeIn");
		indicators[index].style.width = "100%";
		document.getElementById("label").innerHTML = `<a href=${
			arrayOfWork[index].link
		} target="_blank">${arrayOfWork[index].name}</a>`;
		if (arrayOfWork[index].link === false) {
			document.getElementById("label").firstChild.removeAttribute("href");
		}
	}
	runSlideshow() {
		if (this.state.run === true) {
			this.slideshowTransition(this.state.slideIndex);
			this.indexIncrement();
		}
		setTimeout(this.runSlideshow, 6000);
	}
	indicatorsOnClick(event) {
		let index = Number(event.target.getAttribute("index"));
		this.setState({ run: false });
		this.setState({ slideIndex: index });
		this.slideshowTransition(index);
		this.setState({
			slideIndex: index + 1 > slides.length - 1 ? 0 : index + 1
		});
		setTimeout(this.enableSlideshow, 6000);
	}
	indexIncrement() {
		if (this.state.slideIndex < slides.length - 1) {
			this.setState({ slideIndex: this.state.slideIndex + 1 });
		} else {
			this.setState({ slideIndex: 0 });
		}
	}
	enableSlideshow() {
		this.setState({ run: true });
	}
	componentDidMount() {
		this.runSlideshow();
	}
	render() {
		return <Slide indicatorsOnClick={this.indicatorsOnClick} />;
	}
}

export default Slideshow;
