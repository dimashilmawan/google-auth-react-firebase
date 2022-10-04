import React from "react";
import { Link } from "react-router-dom";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { useAuthContext } from "../context/AuthContext";

const Navbar = ({ onThemeToggle, isDarkMode }) => {
	const { user } = useAuthContext();
	return (
		<header className="p-5  shadow-md ">
			<nav>
				<ul className="relative flex items-center justify-between">
					<li>
						<Link
							className="flex items-center focus:outline-offset-8 focus:outline-blue-500 dark:focus:outline-gray-100"
							to="/"
						>
							<FaHome className="text-3xl text-blue-500 transition-all duration-300 hover:scale-105  dark:text-gray-100" />
						</Link>
					</li>
					<li className="absolute left-[50%] -translate-x-[50%]">
						<button
							onClick={onThemeToggle}
							className="rounded-full bg-gray-50 p-3 ring-2 ring-yellow-500 transition duration-300 hover:scale-105 hover:bg-white focus:bg-yellow-100 focus:outline-none focus:ring-4 dark:bg-gray-200 dark:ring-gray-500 dark:focus:bg-gray-100 dark:focus:ring-gray-500"
						>
							{isDarkMode ? (
								<BsMoonStarsFill className="text-xl text-gray-500" />
							) : (
								<BsSunFill className="text-xl text-yellow-500" />
							)}
						</button>
					</li>
					<li>
						{user?.displayName ? (
							<Link
								to="/account"
								className="font-semibold text-blue-500 underline underline-offset-2 transition-all duration-300 hover:text-blue-400 hover:underline-offset-4 focus:outline-offset-4 dark:text-gray-100"
							>
								{user?.displayName.split(" ")[0]}
							</Link>
						) : (
							<Link
								to="/signin"
								className="inline-block rounded-md bg-blue-500 px-4 py-2 text-base font-medium text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
							>
								Sign in
							</Link>
						)}
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
