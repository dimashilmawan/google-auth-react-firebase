import React, { useState } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const themeToggleHandler = () => {
		setIsDarkMode(prevState => !prevState);
	};
	return (
		<div className={`${isDarkMode ? "dark" : ""}`}>
			<div className="h-screen w-screen bg-gray-100 dark:bg-gray-800">
				<Navbar onThemeToggle={themeToggleHandler} isDarkMode={isDarkMode} />
				<main className="pt-32">{children}</main>
			</div>
		</div>
	);
};

export default Layout;
