import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import App from "./App";

const Auth = () => {
  const { loginWithRedirect, isAuthenticated, logout, user, isLoading } =
    useAuth0();
  if (isLoading) {
    return (
      <>
        <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between dark:bg-gray-900">
          <div className="grid md:grid-cols-2 max-w-[1240px] m-auto dark:bg-gray-900">
            {/* <Loader /> */}
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      {isAuthenticated ? (
        <>
          <App />
        </>
      ) : (
        <>
          <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between dark:bg-gray-700">
            <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
              <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
                <div className="flex flex-col justify-center  md:items-start w-96 px-2 py-8  bg-zinc-300 drop-shadow-lg rounded-lg dark:bg-gray-500">
                  <p className="text-2xl text-center font-serif">
                    Sign In to Start Your
                  </p>
                  <h1 className="py-3 text-5xl  text-center md:text-7xl font-bold font-serif">
                    Frontend Journey
                  </h1>
                  <div className="flex justify-center items-center flex-wrap space-x-2">
                    <button
                      onClick={() => {
                        loginWithRedirect();
                      }}
                      type="submit"
                      className="inline-block px-7 mx-20 w-48 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:text-white hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Sign in Or Log in
                    </button>
                  </div>
                </div>
              </div>
              <div className="py-28"></div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Auth;
