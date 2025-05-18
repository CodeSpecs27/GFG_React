import React from "react";
import { Label } from "./Label";
import { Input } from "./Input";
import { Button } from "./Button";
import { useLogin } from "../Hooks/useLogin";

export const Register = ({ onSwitch }) => {
  const {
    username,
    setUsername,
    password,
    email,
    setEmail,
    emailStatus,
    mobile,
    setMobile,
    mobileStatus,
    userNameStatus,
    passwordStatus,
    validateUsername,
    validateEmail,
    validateMobile,
    handlePasswordChange,
  } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateUsername() && validateEmail() && validateMobile();
    validateMobile();
    validateEmail();
    setTimeout(() => {
      if (isValid) {
        alert("User Registered Successfully");
      }
      onSwitch(username);
    }, 1000);
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center text-black-600 mb-2">
        Create Account
      </h1>
      <p className="text-center mb-4">
        Already have an account ?{" "}
        <button
          type="button"
          className="text-blue-500 hover:underline"
          onClick={onSwitch}
        >
          Log In
        </button>
      </p>

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
        <Label htmlFor="email" children="Email:" />
        <Input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p
          className={`text-sm mb-3 ${
            emailStatus === "Valid Email!" ? "text-green-600" : "text-red-500"
          }`}
        >
          {emailStatus}
        </p>
        <Label htmlFor="mobile" children="Mobile:" />
        <Input
          id="mobile"
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <p
          className={`text-sm mb-3 ${
            mobileStatus === "Valid Phone Number!"
              ? "text-green-600"
              : "text-red-500"
          }`}
        >
          {mobileStatus}
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
        <Button type="submit" children="Sign Up" />
      </form>
    </>
  );
};
