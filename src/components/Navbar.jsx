import React from "react";
import { Link } from "react-router-dom";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { useAuthContext } from "../context/AuthContext";

const Navbar = ({ onThemeToggle, isDarkMode }) => {
	const { user } = useAuthContext();
	return (
		<header className=" p-5 shadow-md ">
			<nav className="mx-auto max-w-6xl">
				<ul className="relative flex items-center justify-between ">
					<li>
						<Link
							className="flex items-center transition-all focus:outline-offset-8 focus:outline-blue-500 dark:focus:outline-gray-100"
							to="/"
						>
							<FaHome className="text-3xl text-blue-500 transition-all  hover:scale-105  dark:text-gray-100" />
						</Link>
					</li>
					<li className="absolute left-[50%] -translate-x-[50%]">
						<button
							onClick={onThemeToggle}
							className="dark:focus:-ring-4 rounded-full bg-white p-3 transition-all  hover:scale-105 hover:bg-white  hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-200 dark:focus:ring-white"
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
								className="inline-block rounded-lg bg-white px-3 py-2 font-semibold text-blue-600 transition-all  hover:scale-105 hover:shadow-md focus:outline-offset-2 dark:bg-gray-700 dark:text-gray-100"
							>
								{user?.displayName.split(" ")[0]}
							</Link>
						) : (
							<Link
								to="/signin"
								className="inline-block rounded-md bg-blue-500 px-4 py-2 text-base font-medium text-gray-100 transition hover:scale-[1.02] hover:shadow-sm hover:shadow-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
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
