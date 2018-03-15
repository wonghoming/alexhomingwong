import React from "react";
import monkeyIconWhite from "../../images/flatMonkey-white.png";

const Profile = () => {
	return (
		<div className="box-container profile" id="profile">
			<div className="row name grey">
				<p>Alex H. M. Wong</p>
				<hr />
			</div>
			<div className="row content">
				<div className="col-3 col-s-8 heading">
					<h2>
						<span className="darkBlue">FRONTEND DEVELOPER </span>
						<br />
						<span className="blue">
							<span className="grey">&</span> DESIGNER
						</span>
					</h2>
				</div>
				<div className="col-5 col-s-8 text">
					<p>
						I started out studying Architecture at university, where I learnt
						the principles of design. After graduating, I realised my passion
						for coding and have never looked back.
					</p>
				</div>
			</div>
			<div className="row">
				<div className="col-8">
					<div className="skillsWrapper">
						<div className="diamondRow">
							<div className="diamond grey-bg">
								<div className="diamondText">
									<img src={monkeyIconWhite} alt="monkey icon" />
								</div>
							</div>
							<div className="diamond outline blue-bg">
								<div className="diamondText">
									<p className="diamondTitle">
										<i className="fas fa-paint-brush fa-3x" />
										<br />
										Design
									</p>
									<div className="caption">
										<hr />
										<p>Photoshop, InDesign, Illustrator</p>
									</div>
								</div>
							</div>
						</div>
						<div className="diamondRow">
							<div className="diamond outline darkBlue-bg">
								<div className="diamondText">
									<p className="diamondTitle">
										<i className="fas fa-code fa-3x" />
										<br />
										Coding
									</p>
									<div className="caption">
										<hr />
										<p>HTML, CSS, Javascript, React.js, Express.js, Node.js</p>
									</div>
								</div>
							</div>
							<div className="diamond outline red-bg">
								<div className="diamondText">
									<p className="diamondTitle">
										<i className="fas fa-gamepad fa-3x" />
										<br />
										Hobbies
									</p>
									<div className="caption">
										<hr />
										<p>Gaming, Badminton, Reading, Movies</p>
									</div>
									<div className="outline" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
