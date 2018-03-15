import React from "react";
import Slideshow from "./Slideshow";

const Portfolio = () => {
	return (
		<div className="box-container-fluid subtle-bg">
			<div className="box-container">
				<div className="row content">
					<div className="col-3 col-s-8 heading">
						<h2>
							<span className="darkBlue">WEBSITES </span>
							<br />
							<span className="blue">
								<span className="grey">&</span> PRINT WORK
							</span>
						</h2>
					</div>
					<div className="col-5 col-s-8 text">
						<p>
							Below is a sample collection of work I have completed. I generally
							focus on digital work, but I also enjoy creating print work such
							as reports, brochures and photo touchup.
						</p>
					</div>
				</div>
				<div className="row">
					<Slideshow />
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
