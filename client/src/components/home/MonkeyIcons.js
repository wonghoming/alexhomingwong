import React from "react";
import blueMonkey from "../../images/flatMonkey-blue.png";
import greyMonkey from "../../images/flatMonkey-grey.png";

const renderCircle = iterationCount => {
	let html = [];
	let count = 0;
	for (let i = 0; i <= iterationCount; i++) {
		if (i % 2 === 0) {
			count ++;
			html.push(
				<div className="circle" key={count}>
					<img src={blueMonkey} alt="monkey icon" className="img-fluid" />
				</div>
			);
		} else {
			count ++;
			html.push(
				<div className="circle" key={count}>
					<img src={greyMonkey} alt="monkey icon" className="img-fluid" />
				</div>
			);
		}
	}
	return html;
};

const MonkeyIcons = () => {
	return (
		<div className="box-container-fluid">
			<div className="row iconPattern">
				<div className="circleWrapper">{renderCircle(10)}</div>
			</div>
		</div>
	);
};
export default MonkeyIcons;
