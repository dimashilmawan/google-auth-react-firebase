import React from "react";
import { useAuthContext } from "../context/AuthContext";
const Account = () => {
	const { user, googleSignOut } = useAuthContext();
	const signOutHandler = async () => {
		try {
			await googleSignOut();
		} catch (error) {
			console.log(error.message);
		}
	};
	return (
		<div className="flex flex-col items-center justify-center space-y-4">
			<h1 className="text-center text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-5xl">
				Welcome {user.displayName}
			</h1>
			<button
				onClick={signOutHandler}
				className="block rounded-md bg-red-600 px-6 py-2 text-lg font-semibold text-gray-100 transition duration-300 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-gray-100"
			>
				Logout
			</button>
		</div>
	);
};

export default Account;
