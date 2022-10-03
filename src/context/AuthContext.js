import { useContext, createContext, useEffect, useState } from "react";
import {
	GoogleAuthProvider,
	signInWithPopup,
	signInWithRedirect,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider);
	};

	const googleSignOut = () => {
		signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			console.log(currentUser);
			setUser(currentUser);
			setIsLoading(false);
		});

		return () => unsubscribe();
	}, []);
	return (
		<AuthContext.Provider value={{ googleSignIn, googleSignOut, user }}>
			{!isLoading && children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => useContext(AuthContext);
