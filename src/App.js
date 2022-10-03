import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Account from "./pages/Account";

const App = () => {
	const { user } = useAuthContext();
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/signin"
					element={!user ? <SignIn /> : <Navigate to="/account" />}
				/>
				<Route
					path="/account"
					element={user ? <Account /> : <Navigate to="/" />}
				/>
				<Route path="/*" element={<Navigate to="/" />} />
			</Routes>
		</Layout>
	);
};

export default App;
