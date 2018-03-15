import React from "react";
import LogoWO from "../../images/logo-wo.png";
import monkeyTransparent from "../../images/monkey-icon.png";

function smoothScroll(event){
	event.preventDefault()
	console.log(event);
	const windowHeight = window.innerHeight;
	window.scrollTo(0, windowHeight);

	// $(document).on('click', 'a[href^="#"]', function (event) {
	//
	//     event.preventDefault();
	//
	//     $('html, body').animate({
	//         scrollTop: $($.attr(this, 'href')).offset().top
	//     }, 500);
	// });

}

const Landing = () => {
	return (
		<div className="box-container-fluid fullHeight">
			<div className="row mainBg fullHeight">
				<div className="iconWrapper">
					<img src={monkeyTransparent} alt="monkey" className="icon" />
					<div className="strapLine">
						<h5>
							Developer <span>&</span> Designer
						</h5>
					</div>
				</div>
				<div className="logoWrapper">
					<img src={LogoWO} alt="Alex Ho Ming Wong" className="logo" />
					<div className="pointer">
						<a href="#profile" onClick={smoothScroll}><i className="fas fa-angle-down" /></a>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Landing;
