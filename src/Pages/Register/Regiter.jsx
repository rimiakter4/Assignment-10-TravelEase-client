

import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { Authcontext } from '../../Context/AuthProvider';

const Regiter = () => {
       const {  creatUser, setUser, updateUser ,googlelogin} = useContext(Authcontext);
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false); 

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

const newuser={name,email,photo}
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
    

    creatUser(email, password)
      .then(() => {
     

        toast.success(" Registration Successful!");
        form.reset();
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
        toast(error.message);
      });


       fetch('http://localhost:3000/users',{
        method:'POST',
        headers:{
    'content-type':'application/json'
        }
    ,body:JSON.stringify(newuser)
      }).then((result)=>result.json()).then((data)=>{
        console.log(data)
      })

       
  };
 

  const handelgoogle = () => {
  googlelogin()
    .then((result) => {
      const user = result.user;
      const newUser = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      };

   
      fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Saved user:", data);
        });

      toast.success("Login Successfully!");
      navigate('/');
    })
    .catch((err) => {
      toast.error("Google Login Failed: " + err.message);
    });
};



    return (
        <div>
          

    <div>
      <div className="card 
  bg-gradient-to-b from-blue-700 to-sky-700 
  hover:from-sky-500 hover:to-blue-400
  hover:shadow-2xl shadow-md text-white 
  hover:shadow-blue-400/50  
  w-[340px] lg:w-[450px] h-fit mx-auto my-20 
  transform transition-all duration-700 ease-in-out delay-150 
  hover:-translate-y-3 hover:scale-105
  rounded-2xl ">
        <h1 className='text-center text-4xl font-bold mt-4   '>Register your account</h1>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label>Your Name</label>
            <input type="text" name='name' className="input w-full text-black" placeholder="Your Name" required />

            <label>Photo URL</label>
            <input type="text" name='photo' className="input w-full text-black" placeholder="Choose photo" required />

            <label>Email</label>
            <input type="email" name='email' className="input w-full text-black" placeholder="Email" required />

            <label>Password</label>
            <div className="relative">
              <input
                name='password'
                type={showPassword ? "text" : "password"}
                className="input text-black w-full pr-10"
                placeholder="Password"
                required
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {passwordError && <p className="text-red-600">{passwordError}</p>}

            <button type='submit' className="btn mt-4 w-full">Register</button>
            <p className='text-center text-xl font-bold mt-3'>OR</p>
            
                        <button
                          type="button"
                          onClick={handelgoogle}
                          className='btn w-full mt-2 flex items-center justify-center gap-2'
                        >
                          <FaGoogle /> LogIn With Google
                        </button>
            
            <p className='text-center font-semibold text-white mt-2'>
              Already Have An Account? <Link to='/login' className='text-red-500'>Login</Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
        </div>
    );
};

export default Regiter;