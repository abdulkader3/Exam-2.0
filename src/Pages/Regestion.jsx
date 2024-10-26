import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";
import "./Regestion.css";
// firebase
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { Bounce, toast } from "react-toastify";

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


  // navigate
  const navigate = useNavigate()
  // firebse
  const auth = getAuth();

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
      // firebase
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
          console.log(user);
          updateProfile(auth.currentUser, {
            displayName: firstName,
            photoURL:
              "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
          });

          sendEmailVerification(auth.currentUser).then(() => {});
          toast(" Login done verify your email ", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });

          navigate('/login')




        })
        .catch((error) => {
          const errorCode = error.code;

          // ..
          console.log(errorCode);
          if (errorCode == "auth/invalid-email") {
            toast(" Email is not valid ", {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Bounce,
            });
          }
          if (errorCode == "auth/weak-password") {
            toast(" password is too short ", {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Bounce,
            });
          }
          if (errorCode == "auth/email-already-in-use") {
            toast(" Email already in use ", {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Bounce,
            });
          }
        });
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
            <input onChange={handleEmail} type="email" placeholder="Email" />
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
