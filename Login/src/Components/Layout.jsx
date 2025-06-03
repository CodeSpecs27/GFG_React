import React from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { useState } from "react";

export const Layout = () => {
  const [showLogin, setShowLogin] = useState(true);
   const [loginUsername, setLoginUsername] = useState("");


  const handleSwitch = (username) => {
    setShowLogin((prev) => !prev);
    if (username) setLoginUsername(username);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md w-full max-w-md">
          {showLogin ? (
            <Login onSwitch={() => setShowLogin(false)} username={loginUsername}/>
          ) : (
            <Register onSwitch={handleSwitch} />
          )}
        </div>
      </div>
    </>
  );
};
