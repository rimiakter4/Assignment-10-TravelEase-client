

// import React, { useContext, useRef, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router';

// import { toast } from 'react-toastify';
// import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
// import { Authcontext } from '../../Context/AuthProvider';

// const Login = () => {
//   const { sininuser, googlelogin, resetPassword } = useContext(Authcontext);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const emailref = useRef();

//   const [error, setError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     if (password.length < 6) {
//       setPasswordError("Length must be at least 6 characters");
//       return;
//     } else if (!/[A-Z]/.test(password)) {
//       setPasswordError("Must contain at least one uppercase letter");
//       return;
//     } else if (!/[a-z]/.test(password)) {
//       setPasswordError("Must contain at least one lowercase letter");
//       return;
//     } else {
//       setPasswordError("");
//     }

//     sininuser(email, password)
//       .then(() => {
//         toast.success("LogIn Successfully!");
//         form.reset();
//         navigate(location.state ? location.state : '/');
//       })
//       .catch((err) => {
//         setError(err.code);
//       });
//   };

//   const handelpass = () => {
//     const email = emailref.current.value;
//     if (!email) {
//       toast.error("Please enter your email first!");
//       return;
//     }

//     resetPassword(email)
//       .then(() => {
//       toast("Please check your email to reset password!");
//       })
//       .catch((error) => {
//         toast.error(error.message);
//       });
//   };

//   const handleGoogle = () => {
//    googlelogin()
//       .then(() => {
//         toast("LogIn Successfully!");
//         navigate('/');
//       })
//       .catch((err) => {
//         toast("Google Login Failed: " + err.message);
//       });
//   };

//   return (
//     <div>
//       <div className="card 
//   bg-gradient-to-b from-blue-700 to-sky-700 
//   hover:from-sky-500 hover:to-blue-400
//   hover:shadow-2xl shadow-md text-white 
//   hover:shadow-blue-400/50  
//   w-[340px] lg:w-[450px] h-fit mx-auto my-20 
//   transform transition-all duration-700 ease-in-out delay-150 
//   hover:-translate-y-3 hover:scale-105
//   rounded-2xl">
//         <h1 className="text-center lg:text-4xl text-2xl font-bold mt-4">Login your account</h1>
//         <form onSubmit={handleLogin} className="card-body">
//           <fieldset className="fieldset">
//             <label className="label">Email</label>
//             <input
//               name="email"
//               required
//               type="email"
//               ref={emailref} 
//               className="input w-full text-black"
//               placeholder="Email"
//             />

//             <label className="label">Password</label>
//             <div className="relative">
//               <input
//                 name="password"
//                 required
//                 type={showPassword ? "text" : "password"}
//                 className="input text-black w-full pr-10"
//                 placeholder="Password"
//               />
//               <span
//                 className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </span>
//             </div>

//             {passwordError && <p className="text-red-600">{passwordError}</p>}

//             <div>
//               <a onClick={handelpass} className="link link-hover">Forgot password?</a>
//             </div>

//             {error && <p className="text-red-600">{error}</p>}

//             <button type="submit" className="btn mt-4 w-full">Login</button>

//             <p className='text-center text-xl font-bold mt-3'>OR</p>

//             <button
//               type="button"
//               onClick={handleGoogle}
//               className='btn w-full mt-2 flex items-center justify-center gap-2'
//             >
//               <FaGoogle /> LogIn With Google
//             </button>

//             <p className="text-center font-semibold text-white mt-3">
//               Don’t Have An Account? <Link to="/register" className="text-red-500">Register</Link>
//             </p>
//           </fieldset>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
// import React, { useContext, useRef, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router';
// import { toast } from 'react-toastify';
// import { FaGoogle, FaEye, FaEyeSlash, FaEnvelope, FaLock } from 'react-icons/fa';
// import { Authcontext } from '../../Context/AuthProvider';

// const Login = () => {
//   const { sininuser, googlelogin, resetPassword } = useContext(Authcontext);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const emailref = useRef();

//   const [error, setError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     if (password.length < 6) {
//       setPasswordError("Password must be at least 6 characters");
//       return;
//     } else {
//       setPasswordError("");
//     }

//     sininuser(email, password)
//       .then(() => {
//         toast.success("Welcome Back!");
//         form.reset();
//         navigate(location.state ? location.state : '/');
//       })
//       .catch((err) => {
//         setError("Invalid email or password.");
//       });
//   };

//   const handleGoogle = () => {
//     googlelogin()
//       .then(() => {
//         toast.success("Login Successful!");
//         navigate('/');
//       })
//       .catch(() => toast.error("Google Login Failed!"));
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-4">
//       {/* Main Login Card */}
//       <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        
//         {/* Top Accent Bar (Matches Blue Theme) */}
//         <div className="h-2 bg-blue-600 w-full"></div>

//         <div className="p-8 lg:p-10">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-extrabold text-gray-800">Login</h2>
//             <p className="text-gray-500 mt-2">Manage your vehicle bookings easily</p>
//           </div>

//           <form onSubmit={handleLogin} className="space-y-5">
//             {/* Email Field */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Email Address</label>
//               <div className="relative">
//                 <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
//                   <FaEnvelope size={14} />
//                 </span>
//                 <input
//                   name="email"
//                   type="email"
//                   required
//                   ref={emailref}
//                   className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-800"
//                   placeholder="Enter your email"
//                 />
//               </div>
//             </div>

//             {/* Password Field */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Password</label>
//               <div className="relative">
//                 <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
//                   <FaLock size={14} />
//                 </span>
//                 <input
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   required
//                   className="w-full pl-11 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-800"
//                   placeholder="Enter your password"
//                 />
//                 <button
//                   type="button"
//                   className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-blue-600"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>
//             </div>

//             {/* Forgot Password */}
//             <div className="text-right">
//               <button
//                 type="button"
//                 onClick={() => {/* handle reset */}}
//                 className="text-sm font-medium text-blue-600 hover:underline"
//               >
//                 Forgot password?
//               </button>
//             </div>

//             {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
//             {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-95"
//             >
//               Sign In
//             </button>
//           </form>

//           {/* Divider */}
//           <div className="flex items-center my-8">
//             <div className="flex-1 h-[1px] bg-gray-200"></div>
//             <span className="px-4 text-sm text-gray-400 uppercase font-medium">Or</span>
//             <div className="flex-1 h-[1px] bg-gray-200"></div>
//           </div>

//           {/* Google Login */}
//           <button
//             type="button"
//             onClick={handleGoogle}
//             className="w-full flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all font-semibold text-gray-700 shadow-sm"
//           >
//             <FaGoogle className="text-red-500" /> Continue with Google
//           </button>

//           {/* Register Link */}
//           <p className="text-center mt-8 text-gray-600 font-medium">
//             Don't have an account?{' '}
//             <Link to="/register" className="text-blue-600 hover:underline font-bold">
//               Register
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { FaGoogle, FaEye, FaEyeSlash, FaEnvelope, FaLock } from 'react-icons/fa';
import { Authcontext } from '../../Context/AuthProvider';

const Login = () => {
  const { sininuser, googlelogin } = useContext(Authcontext);
  const navigate = useNavigate();
  const location = useLocation();
  const emailref = useRef();

  const [fieldErrors, setFieldErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    let errors = {};

    // Basic Validation
    if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({}); // Clear errors before login attempt

    sininuser(email, password)
      .then(() => {
        toast.success("Welcome Back!");
        form.reset();
        navigate(location.state ? location.state : '/');
      })
      .catch((err) => {
        // Specifically setting general error under password or showing toast
        setFieldErrors({ general: "Invalid email or password. Please try again." });
      });
  };

  const handleGoogle = () => {
    googlelogin()
      .then(() => {
        toast.success("Login Successful!");
        navigate('/');
      })
      .catch(() => toast.error("Google Login Failed!"));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-4 py-12 font-sans">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all hover:scale-[1.01]">
        
        {/* Top Accent Bar */}
        <div className="h-2 bg-blue-600 w-full"></div>

        <div className="p-8 lg:p-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-gray-800 tracking-tight">Login</h2>
            <p className="text-gray-500 mt-2 text-sm">Manage your vehicle bookings easily</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email Field */}
            <div className="group">
              <label className="block text-xs font-bold text-gray-500 mb-1 ml-1 uppercase tracking-wider">Email Address</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400 group-focus-within:text-blue-500 transition-colors">
                  <FaEnvelope size={14} />
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  ref={emailref}
                  className={`w-full pl-11 pr-4 py-3 bg-gray-50 border rounded-2xl focus:bg-white focus:ring-2 outline-none transition-all text-gray-800 text-sm ${fieldErrors.email ? 'border-red-400 focus:ring-red-500/20' : 'border-gray-200 focus:ring-blue-500/20 focus:border-blue-500'}`}
                  placeholder="name@example.com"
                />
              </div>
              {fieldErrors.email && <p className="text-red-500 text-[11px] mt-1.5 ml-2 font-semibold flex items-center gap-1">⚠ {fieldErrors.email}</p>}
            </div>

            {/* Password Field */}
            <div className="group">
              <label className="block text-xs font-bold text-gray-500 mb-1 ml-1 uppercase tracking-wider">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400 group-focus-within:text-blue-500 transition-colors">
                  <FaLock size={14} />
                </span>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className={`w-full pl-11 pr-12 py-3 bg-gray-50 border rounded-2xl focus:bg-white focus:ring-2 outline-none transition-all text-gray-800 text-sm ${fieldErrors.password || fieldErrors.general ? 'border-red-400 focus:ring-red-500/20' : 'border-gray-200 focus:ring-blue-500/20 focus:border-blue-500'}`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-blue-600 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash size={16}/> : <FaEye size={16}/>}
                </button>
              </div>
              {fieldErrors.password && <p className="text-red-500 text-[11px] mt-1.5 ml-2 font-semibold flex items-center gap-1">⚠ {fieldErrors.password}</p>}
            </div>

            {/* General Login Error (Wrong Credentials) */}
            {fieldErrors.general && (
              <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2">
                ⚠ {fieldErrors.general}
              </div>
            )}

            {/* Forgot Password */}
            <div className="text-right">
              <button
                type="button"
                className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-200 transition-all active:scale-[0.98] mt-2 flex items-center justify-center gap-2"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-1 h-[1px] bg-gray-100"></div>
            <span className="px-3 text-[10px] text-gray-400 uppercase font-black tracking-widest">or login with</span>
            <div className="flex-1 h-[1px] bg-gray-100"></div>
          </div>

          {/* Google Button */}
          <button
            type="button"
            onClick={handleGoogle}
            className="w-full flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-2xl hover:bg-gray-50 hover:border-gray-300 transition-all font-bold text-gray-700 text-sm shadow-sm"
          >
            <FaGoogle className="text-red-500" /> Google
          </button>

          <p className="text-center text-gray-500 text-sm mt-8 font-medium">
            New here?{' '}
            <Link to="/register" className="text-blue-600 hover:text-blue-700 font-bold decoration-2 hover:underline transition-all">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;