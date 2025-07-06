
import { Link } from 'react-router';
import registerImg from '../assets//img6.jpg'; 

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left side image */}
        <div className="hidden md:block">
          <img src={registerImg} alt="Register" className="w-full h-full object-cover" />
        </div>

        {/* Right side form */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Create an Account</h2>

          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full mb-4"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full mb-4"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full mb-4"
          />

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered w-full mb-4"
          />

          {/* Google login */}
          <button className="btn w-full mb-4 bg-red-600 hover:bg-red-700 text-white">
            Sign up with Google
          </button>

          {/* Register button */}
          <button className="btn btn-primary w-full mb-4">Register</button>

          {/* Terms and login link */}
          <div className="text-center text-sm text-gray-500 mt-2">
            By signing up, you agree to our <span className="text-blue-600 hover:underline cursor-pointer">Terms & Conditions</span>.
          </div>
          <div className="text-center mt-2">
            <span className="text-sm">
              Already have an account? <Link className='text-blue-600' to={'/login'}>Login</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
