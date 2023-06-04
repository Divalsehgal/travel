import { useState, useEffect } from "react";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

const useAuth = () => {
  const [authState, setAuthState] = useState(() => {
    const loggedIn = localStorage.getItem("loggedin") === "true";
    return { user: null, loggedIn };
  });

  useEffect(() => {
    setAuthState((prevAuthState) => ({
      ...prevAuthState,
      loggedIn: localStorage.getItem("loggedin") === "true",
    }));
  }, [localStorage.getItem("loggedin")]);

  const login = async (user) => {
    try {
      if (user) {
        const response = await signInWithEmailAndPassword(
          auth,
          user.email,
          user.password
        );
        if (response?.user?.stsTokenManager) {
          localStorage.setItem(
            "accessToken",
            response?.user?.stsTokenManager?.accessToken
          );
          localStorage.setItem(
            "refreshToken",
            response?.user?.stsTokenManager?.refreshToken
          );
          localStorage.setItem("loggedin", "true");
           setAuthState({
            user: user,
            loggedIn: true,
          });
        }
      } else {
        console.log("No data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("loggedin");
      setAuthState((prevAuthState) => ({
        ...prevAuthState,
        user: null,
        loggedIn: false,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  return { authState, login, logout };
};

export default useAuth;
