

// import { Link, useNavigate } from 'react-router';
// import { toast } from 'react-toastify';
// import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
// import { useContext, useState } from 'react';
// import { Authcontext } from '../../Context/AuthProvider';

// const Regiter = () => {
//        const {  creatUser, setUser, updateUser ,googlelogin} = useContext(Authcontext);
//   const navigate = useNavigate();
//   const [passwordError, setPasswordError] = useState("");
//   const [showPassword, setShowPassword] = useState(false); 

//   const handleRegister = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const name = form.name.value;
//     const photo = form.photo.value;
//     const email = form.email.value;
//     const password = form.password.value;

// const newuser={name,email,photo}
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
    

//     creatUser(email, password)
//       .then(() => {
     

//         toast.success(" Registration Successful!");
//         form.reset();
//         navigate('/');
//       })
//       .catch((error) => {
//         console.error(error);
//         toast(error.message);
//       });


//        fetch('http://localhost:5174/users',{
//         method:'POST',
//         headers:{
//     'content-type':'application/json'
//         }
//     ,body:JSON.stringify(newuser)
//       }).then((result)=>result.json()).then((data)=>{
//         console.log(data)
//       })

       
//   };
 

//   const handelgoogle = () => {
//   googlelogin()
//     .then((result) => {
//       const user = result.user;
//       const newUser = {
//         name: user.displayName,
//         email: user.email,
//         photo: user.photoURL
//       };

   
//       fetch('http://localhost:5174/users', {
//         method: 'POST',
//         headers: {
//           'content-type': 'application/json'
//         },
//         body: JSON.stringify(newUser)
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log("Saved user:", data);
//         });

//       toast.success("Login Successfully!");
//       navigate('/');
//     })
//     .catch((err) => {
//       toast.error("Google Login Failed: " + err.message);
//     });
// };


//     return (
//         <div>
//     <div>
//       <div className="card 
//   bg-gradient-to-b from-blue-700 to-sky-700 
//   hover:from-sky-500 hover:to-blue-400
//   hover:shadow-2xl shadow-md text-white 
//   hover:shadow-blue-400/50  
//   w-[340px] lg:w-[450px] h-fit mx-auto my-20 
//   transform transition-all duration-700 ease-in-out delay-150 
//   hover:-translate-y-3 hover:scale-105
//   rounded-2xl ">
//         <h1 className='text-center text-4xl font-bold mt-4   '>Register your account</h1>
//         <form onSubmit={handleRegister} className="card-body">
//           <fieldset className="fieldset">
//             <label>Your Name</label>
//             <input type="text" name='name' className="input w-full text-black" placeholder="Your Name" required />

//             <label>Photo URL</label>
//             <input type="text" name='photo' className="input w-full text-black" placeholder="Choose photo" required />

//             <label>Email</label>
//             <input type="email" name='email' className="input w-full text-black" placeholder="Email" required />

//             <label>Password</label>
//             <div className="relative">
//               <input
//                 name='password'
//                 type={showPassword ? "text" : "password"}
//                 className="input text-black w-full pr-10"
//                 placeholder="Password"
//                 required
//               />
//               <span
//                 className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </span>
//             </div>
//             {passwordError && <p className="text-red-600">{passwordError}</p>}

//             <button type='submit' className="btn mt-4 w-full">Register</button>
//             <p className='text-center text-xl font-bold mt-3'>OR</p>
            
//                         <button
//                           type="button"
//                           onClick={handelgoogle}
//                           className='btn w-full mt-2 flex items-center justify-center gap-2'
//                         >
//                           <FaGoogle /> LogIn With Google
//                         </button>
            
//             <p className='text-center font-semibold text-white mt-2'>
//               Already Have An Account? <Link to='/login' className='text-red-500'>Login</Link>
//             </p>
//           </fieldset>
//         </form>
//       </div>
//     </div>
//         </div>
//     );
// };

// export default Regiter;
// import { Link, useNavigate } from 'react-router';
// import { toast } from 'react-toastify';
// import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
// import { useContext, useState } from 'react';
// import { Authcontext } from '../../Context/AuthProvider';
// import { updateProfile } from 'firebase/auth';

// const Regiter = () => {
//   const { creatUser, setUser, googlelogin } = useContext(Authcontext);
//   const navigate = useNavigate();
//   const [passwordError, setPasswordError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleRegister = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const name = form.name.value;
//     const photo = form.photo.value;
//     const email = form.email.value;
//     const password = form.password.value;

//     const newuser = { name, email, photo };

//     // password validation
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

//     creatUser(email, password)
//       .then((result) => {
//         const loggedUser = result.user;

//         // 🔥 Correct way to update name & photo
//         updateProfile(loggedUser, {
//           displayName: name,
//           photoURL: photo,
//         })
//           .then(() => {
//             setUser({ ...loggedUser, displayName: name, photoURL: photo });

//             // Save user to database
//             fetch('http://localhost:5174/users', {
//               method: 'POST',
//               headers: { 'content-type': 'application/json' },
//               body: JSON.stringify(newuser)
//             });

//             toast.success("Registration Successful!");
//             form.reset();
//             navigate('/');
//           })
//           .catch((error) => {
//             console.error(error);
//             toast.error(error.message);
//           });
//       })
//       .catch((error) => {
//         toast.error(error.message);
//       });
//   };


//   const handelgoogle = () => {
//     googlelogin()
//       .then((result) => {
//         const user = result.user;
//         const newUser = {
//           name: user.displayName,
//           email: user.email,
//           photo: user.photoURL
//         };

//         fetch('http://localhost:5174/users', {
//           method: 'POST',
//           headers: { 'content-type': 'application/json' },
//           body: JSON.stringify(newUser)
//         });

//         toast.success("Login Successfully!");
//         navigate('/');
//       })
//       .catch((err) => {
//         toast.error("Google Login Failed: " + err.message);
//       });
//   };

//   return (
//     <div>
//       <div className="card bg-gradient-to-b from-blue-700 to-sky-700 hover:from-sky-500 hover:to-blue-400 hover:shadow-2xl shadow-md text-white hover:shadow-blue-400/50 w-[340px] lg:w-[450px] h-fit mx-auto my-20 rounded-2xl transition-all duration-700 ease-in-out hover:-translate-y-3 hover:scale-105">
//         <h1 className='text-center text-4xl font-bold mt-4'>Register your account</h1>
//         <form onSubmit={handleRegister} className="card-body">
//           <fieldset className="fieldset">
//             <label>Your Name</label>
//             <input type="text" name='name' className="input w-full text-black" placeholder="Your Name" required />

//             <label>Photo URL</label>
//             <input type="text" name='photo' className="input w-full text-black" placeholder="Choose photo" required />

//             <label>Email</label>
//             <input type="email" name='email' className="input w-full text-black" placeholder="Email" required />

//             <label>Password</label>
//             <div className="relative">
//               <input
//                 name='password'
//                 type={showPassword ? "text" : "password"}
//                 className="input text-black w-full pr-10"
//                 placeholder="Password"
//                 required
//               />
//               <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
//                 onClick={() => setShowPassword(!showPassword)}>
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </span>
//             </div>
//             {passwordError && <p className="text-red-600">{passwordError}</p>}

//             <button type='submit' className="btn mt-4 w-full">Register</button>
//             <p className='text-center text-xl font-bold mt-3'>OR</p>

//             <button type="button" onClick={handelgoogle} className='btn w-full mt-2 flex items-center justify-center gap-2'>
//               <FaGoogle /> LogIn With Google
//             </button>

//             <p className='text-center font-semibold text-white mt-2'>
//               Already Have An Account? <Link to='/login' className='text-red-500'>Login</Link>
//             </p>
//           </fieldset>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Regiter;
// import { Link, useNavigate } from 'react-router';
// import { toast } from 'react-toastify';
// import { FaEye, FaEyeSlash, FaGoogle, FaUser, FaImage, FaEnvelope, FaLock } from 'react-icons/fa';
// import { useContext, useState } from 'react';
// import { Authcontext } from '../../Context/AuthProvider';
// import { updateProfile } from 'firebase/auth';

// const Regiter = () => {
//   const { creatUser, setUser, googlelogin } = useContext(Authcontext);
//   const navigate = useNavigate();
//   const [passwordError, setPasswordError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleRegister = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const name = form.name.value;
//     const photo = form.photo.value;
//     const email = form.email.value;
//     const password = form.password.value;

//     const newuser = { name, email, photo };

//     // password validation
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

//     creatUser(email, password)
//       .then((result) => {
//         const loggedUser = result.user;

//         updateProfile(loggedUser, {
//           displayName: name,
//           photoURL: photo,
//         })
//           .then(() => {
//             setUser({ ...loggedUser, displayName: name, photoURL: photo });

//             // Save user to database
//             fetch('http://localhost:5174/users', {
//               method: 'POST',
//               headers: { 'content-type': 'application/json' },
//               body: JSON.stringify(newuser)
//             });

//             toast.success("Registration Successful!");
//             form.reset();
//             navigate('/');
//           })
//           .catch((error) => {
//             toast.error(error.message);
//           });
//       })
//       .catch((error) => {
//         toast.error(error.message);
//       });
//   };

//   const handelgoogle = () => {
//     googlelogin()
//       .then((result) => {
//         const user = result.user;
//         const newUser = {
//           name: user.displayName,
//           email: user.email,
//           photo: user.photoURL
//         };

//         fetch('http://localhost:5174/users', {
//           method: 'POST',
//           headers: { 'content-type': 'application/json' },
//           body: JSON.stringify(newUser)
//         });

//         toast.success("Login Successfully!");
//         navigate('/');
//       })
//       .catch((err) => {
//         toast.error("Google Login Failed: " + err.message);
//       });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-4 py-12">
//       <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        
//         {/* Top Accent Bar */}
//         <div className="h-2 bg-blue-600 w-full"></div>

//         <div className="p-8 lg:p-10">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-extrabold text-gray-800">Create Account</h2>
//             <p className="text-gray-500 mt-2">Join TravelEase for seamless car rentals</p>
//           </div>

//           <form onSubmit={handleRegister} className="space-y-4">
//             {/* Name Field */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-1 ml-1">Full Name</label>
//               <div className="relative">
//                 <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
//                   <FaUser size={14} />
//                 </span>
//                 <input
//                   name="name"
//                   type="text"
//                   required
//                   className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-800"
//                   placeholder="Enter your name"
//                 />
//               </div>
//             </div>

//             {/* Photo URL Field */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-1 ml-1">Photo URL</label>
//               <div className="relative">
//                 <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
//                   <FaImage size={14} />
//                 </span>
//                 <input
//                   name="photo"
//                   type="text"
//                   required
//                   className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-800"
//                   placeholder="Paste image link"
//                 />
//               </div>
//             </div>

//             {/* Email Field */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-1 ml-1">Email Address</label>
//               <div className="relative">
//                 <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
//                   <FaEnvelope size={14} />
//                 </span>
//                 <input
//                   name="email"
//                   type="email"
//                   required
//                   className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-800"
//                   placeholder="name@example.com"
//                 />
//               </div>
//             </div>

//             {/* Password Field */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-1 ml-1">Password</label>
//               <div className="relative">
//                 <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
//                   <FaLock size={14} />
//                 </span>
//                 <input
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   required
//                   className="w-full pl-11 pr-12 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-800"
//                   placeholder="••••••••"
//                 />
//                 <button
//                   type="button"
//                   className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-blue-600"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>
//               {passwordError && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{passwordError}</p>}
//             </div>

//             {/* Register Button */}
//             <button
//               type="submit"
//               className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-100 transition-all active:scale-95 mt-2"
//             >
//               Create Account
//             </button>
//           </form>

//           {/* Divider */}
//           <div className="flex items-center my-6">
//             <div className="flex-1 h-[1px] bg-gray-200"></div>
//             <span className="px-4 text-xs text-gray-400 uppercase font-bold tracking-wider">Or</span>
//             <div className="flex-1 h-[1px] bg-gray-200"></div>
//           </div>

//           {/* Google Login */}
//           <button
//             type="button"
//             onClick={handelgoogle}
//             className="w-full flex items-center justify-center gap-3 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all font-semibold text-gray-700 shadow-sm mb-6"
//           >
//             <FaGoogle className="text-red-500" /> Sign up with Google
//           </button>

//           {/* Login Link */}
//           <p className="text-center text-gray-600 font-medium">
//             Already have an account?{' '}
//             <Link to="/login" className="text-blue-600 hover:underline font-bold">
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Regiter;
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash, FaGoogle, FaUser, FaImage, FaEnvelope, FaLock } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { Authcontext } from '../../Context/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Regiter = () => {
  const { creatUser, setUser, googlelogin } = useContext(Authcontext);
  const navigate = useNavigate();
  
  // States for individual field errors
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const newuser = { name, email, photo };
    let validationErrors = {};

    // password validation logic
    if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    } else if (!/[A-Z]/.test(password)) {
      validationErrors.password = "Include at least one uppercase letter";
    } else if (!/[a-z]/.test(password)) {
      validationErrors.password = "Include at least one lowercase letter";
    }

    // Email validation basic check
    if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Please enter a valid email address";
    }

    // Jodi kono error thake, state update hobe ebong function stop hobe
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({}); // Clear previous errors

    creatUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        updateProfile(loggedUser, { displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...loggedUser, displayName: name, photoURL: photo });
            
            fetch('http://localhost:5174/users', {
              method: 'POST',
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify(newuser)
            });

            toast.success("Registration Successful!");
            form.reset();
            navigate('/');
          })
          .catch((error) => toast.error(error.message));
      })
      .catch((error) => {
        // Firebase specific errors (like email already in use)
        if (error.code === 'auth/email-already-in-use') {
            setErrors({ email: "This email is already registered." });
        } else {
            toast.error(error.message);
        }
      });
  };

  const handelgoogle = () => {
    googlelogin()
      .then((result) => {
        const user = result.user;
        fetch('http://localhost:5174/users', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ name: user.displayName, email: user.email, photo: user.photoURL })
        });
        toast.success("Login Successfully!");
        navigate('/');
      })
      .catch((err) => toast.error("Google Login Failed: " + err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-4 py-12 font-sans">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all hover:scale-[1.01]">
        <div className="h-2 bg-blue-600 w-full"></div>

        <div className="p-8 lg:p-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-gray-800 tracking-tight">Create Account</h2>
            <p className="text-gray-500 mt-2 text-sm">Experience seamless travel with TravelEase</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            
            {/* Name Field */}
            <div className="group">
              <label className="block text-xs font-bold text-gray-500 mb-1 ml-1 uppercase tracking-wider">Full Name</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400 group-focus-within:text-blue-500 transition-colors">
                  <FaUser size={14} />
                </span>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-gray-800 text-sm"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Photo URL Field */}
            <div className="group">
              <label className="block text-xs font-bold text-gray-500 mb-1 ml-1 uppercase tracking-wider">Photo URL</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400 group-focus-within:text-blue-500 transition-colors">
                  <FaImage size={14} />
                </span>
                <input
                  name="photo"
                  type="text"
                  required
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-gray-800 text-sm"
                  placeholder="https://example.com/photo.jpg"
                />
              </div>
            </div>

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
                  className={`w-full pl-11 pr-4 py-3 bg-gray-50 border rounded-2xl focus:bg-white focus:ring-2 outline-none transition-all text-gray-800 text-sm ${errors.email ? 'border-red-400 focus:ring-red-500/20' : 'border-gray-200 focus:ring-blue-500/20 focus:border-blue-500'}`}
                  placeholder="email@travelease.com"
                />
              </div>
              {errors.email && <p className="text-red-500 text-[11px] mt-1.5 ml-2 font-semibold flex items-center gap-1">⚠ {errors.email}</p>}
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
                  className={`w-full pl-11 pr-12 py-3 bg-gray-50 border rounded-2xl focus:bg-white focus:ring-2 outline-none transition-all text-gray-800 text-sm ${errors.password ? 'border-red-400 focus:ring-red-500/20' : 'border-gray-200 focus:ring-blue-500/20 focus:border-blue-500'}`}
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
              {errors.password && <p className="text-red-500 text-[11px] mt-1.5 ml-2 font-semibold flex items-center gap-1">⚠ {errors.password}</p>}
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-200 transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-2"
            >
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-1 h-[1px] bg-gray-100"></div>
            <span className="px-3 text-[10px] text-gray-400 uppercase font-black tracking-widest">or continue with</span>
            <div className="flex-1 h-[1px] bg-gray-100"></div>
          </div>

          {/* Google Button */}
          <button
            onClick={handelgoogle}
            className="w-full flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-2xl hover:bg-gray-50 hover:border-gray-300 transition-all font-bold text-gray-700 text-sm shadow-sm"
          >
            <FaGoogle className="text-red-500" /> Google
          </button>

          <p className="text-center text-gray-500 text-sm mt-8 font-medium">
            Already a member?{' '}
            <Link to="/login" className="text-blue-600 hover:text-blue-700 font-bold decoration-2 hover:underline transition-all">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Regiter;