import React from "react";
import { useLogin } from "../Hooks/useLogin";

import { Input } from "./Input";
import { Label } from "./Label";
import { Button } from "./Button";

export const Login = ({ onSwitch, username }) => {
  const {
    username: stateUsername,
    setUsername,
    password,
    userNameStatus,
    passwordStatus,
    validateUsername,
    handlePasswordChange,
  } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isUsernameValid = validateUsername();
    setTimeout(() => {
      if (isUsernameValid) {
        alert("User LoggedIn successfully");
      }
    }, 1000);
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center text-green-600 mb-2">
        GeeksforGeeks
      </h1>
      <h4 className="text-center mb-4">Enter your login credentials</h4>

      <form onSubmit={handleSubmit}>
        <Label htmlFor="username" children="Username:" />
        <Input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p
          className={`text-sm mb-3 ${
            userNameStatus === "Valid username!"
              ? "text-green-600"
              : "text-red-500"
          }`}
        >
          {userNameStatus}
        </p>
        <Label htmlFor="password" children="Password:" />
        <Input
          id="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <p
          className={`text-sm mb-4 ${
            passwordStatus === "Strong Password!"
              ? "text-green-600"
              : passwordStatus === "Medium Password!"
              ? "text-yellow-600"
              : "text-red-500"
          }`}
        >
          {passwordStatus}
        </p>
        <Button type="submit" children="Submit" />
      </form>
      <p className="text-center mt-4 text-sm">
        Not registered?{" "}
        <button
          type="button"
          className="text-blue-500 hover:underline bg-transparent border-none p-0 m-0 cursor-pointer"
          onClick={onSwitch}
        >
          Create an account
        </button>
      </p>
    </>
  );
};
