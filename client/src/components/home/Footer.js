import React from "react";

const Footer = () => {
	return (
		<div className="box-container-fluid grey-bg">
			<div className="footer">
				<div>Alex Ho Ming Wong | Portfolio</div>
				<div className="social">
					<a href="mailto:wonghoming.dev@gmail.com">
						<i className="far fa-envelope" />
					</a>
					<a
						href="https://www.linkedin.com/in/alex-wong-8568bb93/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-linkedin-in" />
					</a>
					<a
						href="https://twitter.com/AlexHoMingWong"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-twitter" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
