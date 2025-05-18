import React from "react";
import { useState } from "react";

import Input from "./Input";
import Label from "./Label";
import Button from "./Button";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userNameStatus, setUserNameStatus] = useState("");
  const [passwordStatus, setPasswordStatus] = useState("");

  const validateUsername = () => {
    const regex = /^[a-zA-Z\s]+$/;
    if (username.trim() === "") {
      setUserNameStatus("Username is required.");
      return false;
    }
    if (!regex.test(username)) {
      setUserNameStatus("Username can only contain letters and spaces.");
      return false;
    }
    setUserNameStatus("Valid username.");
    return true;
  };

  const checkPasswordStrength = (password) => {
    if (password.length < 6) {
      setPasswordStatus("Weak");
    } else if (/^(?=.*[0-9])(?=.*[!@#$%^&*])/.test(password)) {
      setPasswordStatus("Strong");
    } else {
      setPasswordStatus("Medium");
    }
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);
    checkPasswordStrength(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isUsernameValid = validateUsername();
    setTimeout(() => {
    if (isUsernameValid) {
      alert("Form submitted successfully");
    }}, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md w-full max-w-md">
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
          <p className={`text-sm mb-3 ${
               userNameStatus === "Valid username."
                ? "text-green-600"
                : "text-red-500"
          }`}>
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
              passwordStatus === "Strong"
                ? "text-green-600"
                : passwordStatus === "Medium"
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
          <a href="#" className="text-blue-500 hover:underline">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
