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
		<div className="flex flex-col items-center justify-center space-y-2">
			<h1>Welcome {user.displayName}</h1>
			<button
				onClick={signOutHandler}
				className="block bg-red-600 px-6 py-2 text-gray-100"
			>
				Logout
			</button>
		</div>
	);
};

export default Account;
