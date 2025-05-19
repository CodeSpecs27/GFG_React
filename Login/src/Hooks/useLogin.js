import { useState } from "react";

export const useLogin = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
    userNameStatus: "",
    passwordStatus: "",
    email: "",
    emailStatus: "",
    mobile: "",
    mobileStatus: "",
  });

  // Helper to update state fields
  const setField = (field, value) => {
    setState((prev) => ({ ...prev, [field]: value }));
  };

  // validate username
  const validateUsername = () => {
    const regex = /^[a-zA-Z\s]+$/;
    if (state.username.trim() === "") {
      setField("userNameStatus", "Username is required!");
      return false;
    }
    if (!regex.test(state.username)) {
      setField(
        "userNameStatus",
        "Username can only contain letters and spaces!"
      );
      return false;
    }
    setField("userNameStatus", "Valid username!");
    return true;
  };

  // check password strength
  const checkPasswordStrength = (password) => {
    if (password.length < 6) {
      setField("passwordStatus", "Weak Password!");
    } else if (/^(?=.*[0-9])(?=.*[!@#$%^&*])/.test(password)) {
      setField("passwordStatus", "Strong Password!");
    } else {
      setField("passwordStatus", "Medium Password!");
    }
  };

  // validate email
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (state.email.trim() === "") {
      setField("emailStatus", "Fill Email!");
      return false;
    }

    if (!emailRegex.test(state.email)) {
      setField("emailStatus", "Invalid Email Format!");
      return false;
    }
    setField("emailStatus", "Valid Email!");
    return true;
  };

  // validate phone number
  const validateMobile = () => {
    const phoneRegex = /^\d{10}$/;

    if (state.mobile.trim() === "") {
      setField("mobileStatus", "Fill Phone Number!");
      return false;
    }
    if (!phoneRegex.test(state.mobile)) {
      setField("mobileStatus", "Invalid Phone Number Format!");
      return false;
    }
    if (state.mobile.length < 10) {
      setField("mobileStatus", "Phone Number must be 10 digits!");
      return false;
    }
    setField("mobileStatus", "Valid Phone Number!");
    return true;
  };

  // handle password change
  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setField("password", password);
    checkPasswordStrength(password);
  };

  return {
    ...state,
    setUsername: (v) => setField("username", v),
    setPassword: (v) => setField("password", v),
    setEmail: (v) => setField("email", v),
    setMobile: (v) => setField("mobile", v),
    validateUsername,
    validateEmail,
    validateMobile,
    handlePasswordChange,
  };
};
