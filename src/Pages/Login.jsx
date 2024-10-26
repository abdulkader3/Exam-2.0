import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaUnlock,
  FaLock,
  FaFacebookF,
  FaGoogle,
  FaApple,
} from "react-icons/fa";
import { BeatLoader } from "react-spinners";
import "./Login.css";
import { FaXTwitter } from "react-icons/fa6";
// firebase
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Bounce, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { UserDataOfToDo } from "../Slices/ToDo";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailEror, setEmailEror] = useState("");
  const [password, setPassword] = useState("");
  const [passwordEror, setPasswordEror] = useState("");
  const [loader, setLoader] = useState(false);
  const [one, setOne] = useState(false);

  // Toggle password visibility
  const nextIcon = () => setOne(!one);

  // Validation functions
  const funForEmail = (e) => {
    setEmail(e.target.value);
    setEmailEror("");
  };

  const funForpassword = (e) => {
    setPassword(e.target.value);
    setPasswordEror("");
  };

  // firebase
  const auth = getAuth();


  // navigate next 
  const next = useNavigate()

  const dispatch = useDispatch()

  // Form submission handler
  const SubForForm = async (e) => {
    e.preventDefault();

    if (!email) {
      setEmailEror("Please enter your email");
    } else if (!password) {
      setPasswordEror("Please enter your password");
    } else {
      setEmailEror("");
      setPasswordEror("");
      setLoader(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          setLoader(false);
          const user = userCredential.user;
          // ...
         
          if(user.emailVerified == false){
            toast('your email is not verified', {
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
          }else{
            toast('Login Done', {
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
            next('/userprofile')
            dispatch(UserDataOfToDo(user))
            localStorage.setItem('todouser' , JSON.stringify(user))
          }
        })
        .catch((error) => {
          setLoader(false);
          const errorCode = error.code;
          console.log(errorCode)
          if(errorCode == 'auth/invalid-credential'){
            toast('your email or password is not valid ', {
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
    <>
      <div className="flex main">
        <div className="w-[500px] LoginAnimetion gap-40 h-full"></div>
        <div className="warper md:mr-[390px] font-poppins rounded-[12px]">
          <form onSubmit={SubForForm}>
            <h1 className="text-[30px] md:text-[35px] text-center font-poppins font-semibold">
              Login
            </h1>

            <div className="inputBox">
              <input
                type="email"
                onChange={funForEmail}
                placeholder="Your email please"
              />
              <FaUser className="icons" />
            </div>
            <div className="mb-8">
              <p className="pl-5 text-[#8bcfff] text-[12px]">{emailEror}</p>
            </div>

            <div className="inputBox">
              <input
                type={one ? "text" : "password"}
                onChange={funForpassword}
                placeholder="Your password please"
              />
              {one ? (
                <FaUnlock className="icons" onClick={nextIcon} />
              ) : (
                <FaLock className="icons" onClick={nextIcon} />
              )}
            </div>
            <div className="mb-8">
              <p className="pl-5 text-[#8bcfff] text-[12px]">{passwordEror}</p>
            </div>

            <div className="rememberForgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <Link to="/forgetPassword"> forgot password ? </Link>
            </div>

            {loader ? (
              <div className="flex smalldevice justify-center items-center w-[70%] md:w-full h-[35px] md:h-[45px] active:scale-105 transition-all border-none outline-none shadow-md cursor-pointer text-[14px] md:text-[17px] text-[#333] font-semibold rounded-[40px] bg-white">
                <BeatLoader />
              </div>
            ) : (
              <button
                type="submit"
                className="smalldevice w-[70%] md:w-full h-[35px] md:h-[45px] active:scale-105 transition-all border-none outline-none shadow-md cursor-pointer text-[14px] md:text-[17px] text-[#333] font-semibold rounded-[40px] bg-white"
              >
                Login
              </button>
            )}

            <div className="w-full flex mt-10 items-center gap-3 justify-center">
              <div className="w-40 h-[1px] bg-white"></div>
              <div>
                <p className="font-sans">OR</p>
              </div>
              <div className="w-40 h-[1px] bg-white"></div>
            </div>

            <div className="w-full gap-10 justify-center mt-5 mb-12 flex">
              <div className="w-7 h-7">
                <Link to="https://accounts.google.com">
                  <FaGoogle />
                </Link>
              </div>
              <div className="w-7 h-7">
                <Link to="https://web.facebook.com">
                  <FaFacebookF />
                </Link>
              </div>
              <div className="w-7 h-7">
                <Link to="https://x.com">
                  <FaXTwitter />
                </Link>
              </div>
              <div className="w-7 h-7">
                <Link to="https://www.icloud.com/">
                  <FaApple />
                </Link>
              </div>
            </div>

            <div className="registerLink text-[15px] text-center mt-5">
              <p>
                Don't have an account? <Link to="/regestion">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
