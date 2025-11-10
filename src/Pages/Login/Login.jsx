// import React from 'react';

// const Login = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Login;

import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';

import { toast } from 'react-toastify';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Authcontext } from '../../Context/AuthProvider';

const Login = () => {
  const { sininuser, googlelogin, resetPassword } = useContext(Authcontext);
  const navigate = useNavigate();
  const location = useLocation();
  const emailref = useRef();

  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setPasswordError("Length must be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("Must contain at least one uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      setPasswordError("Must contain at least one lowercase letter");
      return;
    } else {
      setPasswordError("");
    }

    sininuser(email, password)
      .then(() => {
        toast.success("LogIn Successfully!");
        form.reset();
        navigate(location.state ? location.state : '/');
      })
      .catch((err) => {
        setError(err.code);
      });
  };

  const handelpass = () => {
    const email = emailref.current.value;
    if (!email) {
      toast.error("Please enter your email first!");
      return;
    }

    resetPassword(email)
      .then(() => {
      toast("Please check your email to reset password!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogle = () => {
   googlelogin()
      .then(() => {
        toast("LogIn Successfully!");
        navigate('/');
      })
      .catch((err) => {
        toast("Google Login Failed: " + err.message);
      });
  };

  return (
    <div>
      <div className="card 
  bg-gradient-to-b from-blue-700 to-sky-700 
  hover:from-sky-500 hover:to-blue-400
  hover:shadow-2xl shadow-md text-white 
  hover:shadow-blue-400/50  
  w-[340px] lg:w-[450px] h-fit mx-auto my-20 
  transform transition-all duration-700 ease-in-out delay-150 
  hover:-translate-y-3 hover:scale-105
  rounded-2xl">
        <h1 className="text-center lg:text-4xl text-2xl font-bold mt-4">Login your account</h1>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              required
              type="email"
              ref={emailref} 
              className="input w-full text-black"
              placeholder="Email"
            />

            <label className="label">Password</label>
            <div className="relative">
              <input
                name="password"
                required
                type={showPassword ? "text" : "password"}
                className="input text-black w-full pr-10"
                placeholder="Password"
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {passwordError && <p className="text-red-600">{passwordError}</p>}

            <div>
              <a onClick={handelpass} className="link link-hover">Forgot password?</a>
            </div>

            {error && <p className="text-red-600">{error}</p>}

            <button type="submit" className="btn mt-4 w-full">Login</button>

            <p className='text-center text-xl font-bold mt-3'>OR</p>

            <button
              type="button"
              onClick={handleGoogle}
              className='btn w-full mt-2 flex items-center justify-center gap-2'
            >
              <FaGoogle /> LogIn With Google
            </button>

            <p className="text-center font-semibold text-white mt-3">
              Don’t Have An Account? <Link to="/register" className="text-red-500">Register</Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
