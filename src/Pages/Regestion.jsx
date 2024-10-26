import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";
import './Regestion.css'

const Regestion = () => {
  // State for inputs and errors
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [confirmpasswordError, setConfirmPasswordError] = useState("");
  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Toggle password visibility
  const toggleVisibility = () => setShowPassword(!showPassword);

  // Handlers for validation
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setFirstNameError("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError("");
  };

  // Form submission with simple validation
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName) {
      setFirstNameError("Please enter your first name");
    } else if (!email) {
      setEmailError("Please enter your email");
    } else if (!password) {
      setPasswordError("Please enter your password");
    } else if (!confirmpassword) {
      setConfirmPasswordError("Please confirm your password");
    } else if (password !== confirmpassword) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setLoader(true);
      // Here, you would typically handle form submission
      setTimeout(() => setLoader(false), 2000);
    }
  };

  return (
    <div className="flex registration-container">
      <div className="warper font-poppins rounded-[12px] registration-form">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <h1 className="text-[35px] text-center font-poppins font-semibold">
            Register
          </h1>

          <div className="inputBox">
            <input
              onChange={handleFirstName}
              type="text"
              placeholder="User name"
            />
            <p className="errorText my-2">{firstNameError}</p>
          </div>

          <div className="inputBox">
            <input
              onChange={handleEmail}
              type="email"
              placeholder="Email"
            />
            <p className="errorText">{emailError}</p>
          </div>

          <div className="inputBox">
            <input
              type={showPassword ? "text" : "password"}
              onChange={handlePassword}
              placeholder="Password"
            />
            <p className="errorText">{passwordError}</p>
          </div>

          <div className="inputBox">
            <input
              type={showPassword ? "text" : "password"}
              onChange={handleConfirmPassword}
              placeholder="Confirm password"
            />
            <p className="errorText">{confirmpasswordError}</p>
          </div>

          <div className="w-full flex justify-end mb-5">
            <Link onClick={toggleVisibility}>
              {showPassword ? "Hide password" : "Show password"}
            </Link>
          </div>

          {loader ? (
        <div className="flex justify-center items-center w-full h-[45px] active:scale-105 transition-all border-none outline-none shadow-md cursor-pointer text-[17px] text-[#333] font-semibold rounded-[40px] bg-white loader">
          <BeatLoader />
        </div>
      ) : (
        <button
          type="submit"
          className="w-full h-[45px] active:scale-105 transition-all border-none outline-none shadow-md cursor-pointer text-[17px] text-[#333] font-semibold rounded-[40px] bg-white submitButton"
        >
          Sign Up
        </button>
      )}

          <div className="flex justify-center mt-5">
            <p>Already have an account?</p>
            <Link to="/login" className="loginLink">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Regestion;
