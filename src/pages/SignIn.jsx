import React from "react";
import GoogleButton from "react-google-button";
import { useAuthContext } from "../context/AuthContext";

const Signin = () => {
	const { googleSignIn } = useAuthContext();
	const signInHandler = async () => {
		try {
			await googleSignIn();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex items-center justify-center">
			<GoogleButton onClick={signInHandler} />
		</div>
	);
};

export default Signin;
