import React from "react";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
	return (
		<div className="">
			<div className="h-screen w-screen bg-gray-100">
				<Navbar />
				<main className="pt-32">{children}</main>
			</div>
		</div>
	);
};

export default Layout;
