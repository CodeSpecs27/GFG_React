import { useState } from "react";

export const useLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userNameStatus, setUserNameStatus] = useState("");
  const [passwordStatus, setPasswordStatus] = useState("");
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState("");
  const [mobile, setMobile] = useState("");
  const [mobileStatus, setMobileStatus] = useState("");

  // validate username
  const validateUsername = () => {
    const regex = /^[a-zA-Z\s]+$/;
    if (username.trim() === "") {
      setUserNameStatus("Username is required!");
      return false;
    }
    if (!regex.test(username)) {
      setUserNameStatus("Username can only contain letters and spaces!");
      return false;
    }
    setUserNameStatus("Valid username!");
    return true;
  };

  // check password strength
  const checkPasswordStrength = (password) => {
    if (password.length < 6) {
      setPasswordStatus("Weak Password!");
    } else if (/^(?=.*[0-9])(?=.*[!@#$%^&*])/.test(password)) {
      setPasswordStatus("Strong Password!");
    } else {
      setPasswordStatus("Medium Password!");
    }
  };

  // validate email
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
      setEmailStatus("Fill Email!");
      return false;
    }

    if (!emailRegex.test(email)) {
      setEmailStatus("Invalid Email Format!");
      return false;
    }
    setEmailStatus("Valid Email!");
    return true;
  };

  // validate phone number
  const validateMobile = () => {
    const phoneRegex = /^\d{10}$/;

    if (mobile.trim() === "") {
      setMobileStatus("Fill Phone Number!");
      return false;
    }
    if (!phoneRegex.test(mobile)) {
      setMobileStatus("Invalid Phone Number Format!");
      return false;
    }
    if (mobile.length < 10) {
      setMobileStatus("Phone Number must be 10 digits!");
      return false;
    }
    setMobileStatus("Valid Phone Number!");
    return true;
  };

  // handle password change
  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);
    checkPasswordStrength(password);
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    userNameStatus,
    passwordStatus,
    email,
    setEmail,
    emailStatus,
    mobile,
    setMobile,
    mobileStatus,
    validateUsername,
    validateEmail,
    validateMobile,
    handlePasswordChange,
  };
};
