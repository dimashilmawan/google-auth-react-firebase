import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
	const { user } = useAuthContext();
	console.log(user?.displayName);
	return (
		<header>
			<nav>
				<ul className="flex justify-between">
					<Link to="/">Home</Link>
					<li>Dark mode</li>
					<li>
						{user?.displayName ? (
							<Link to="/account">{user?.displayName}</Link>
						) : (
							<Link to="/signin">Sign in</Link>
						)}
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
