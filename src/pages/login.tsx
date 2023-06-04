import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { auth } from "../config/firebase";

interface User {
  email: string;
  password: string;
  role: string;
}

const LoginForm = () => {
  const { login, authState } = useAuth();
  const [showSignedIn, setShowSignedIn] = useState<Boolean>(true);

  const navigate = useNavigate();
  const [user, setUser] = useState<User>({
    email: "sehgaldival@gmail.com",
    password: "123456",
  });

  const signup = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: userName,
        });
      })
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    if (authState.loggedIn) {
      navigate("/");
    }
  }, [authState.loggedIn]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(user);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const toggleSignIn = () => {
    setShowSignedIn(!showSignedIn);
  };

  return (
    <>
      {showSignedIn ? (
        <>
          <div className="sm:mx-auto sm:w-full sm:max-w-md ">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
              Sign In
            </h2>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
            <div className=" py-8 px-4 shadow sm:rounded-lg sm:px-10 bg-gradient-to-b from-[#232526] to-[#3d4651]">
              <form className="space-y-6 " onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 sm:text-sm"
                      value={user.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-secondary-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm"
                      value={user.password}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className=" flex space-x-2">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary bg-background focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Log In
                  </button>

                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary bg-background focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    onClick={toggleSignIn}
                  >
                    {showSignedIn ? "Sign Up" : "Sign In"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <>
          <SignUpPage toggleSignIn={toggleSignIn} showSignedIn={showSignedIn} />
        </>
      )}
    </>
  );
};

export default LoginForm;

const SignUpPage: React.FC<{
  toggleSignIn: () => void;
  showSignedIn: boolean;
}> = ({ toggleSignIn, showSignedIn }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform sign-up logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Sign up
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gradient-to-b from-[#232526] to-[#3d4651] py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSignUp}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className=" text-white appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400  sm:text-sm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400  sm:text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className=" flex space-x-2">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary bg-background hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:"
              >
                Submit
              </button>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary bg-background focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                onClick={toggleSignIn}
              >
                {showSignedIn ? "Sign Up" : "Sign In"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
