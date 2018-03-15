import React from "react";
import Landing from "./Landing";
import Profile from "./Profile";
import MonkeyIcons from "./MonkeyIcons";
import Portfolio from "./Portfolio";
import NavBar from "./NavBar";
import Footer from "./Footer";
const Home = () => {
	return (
		<div className="fullHeight">
			<NavBar />
			<Landing />
			<Profile />
			<MonkeyIcons />
			<Portfolio />
			<Footer />
		</div>
	);
};

export default Home;
