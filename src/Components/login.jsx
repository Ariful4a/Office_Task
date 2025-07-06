
import { Link } from 'react-router';
import loginImg from '../assets/img8.jpg'; 

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left side image */}
        <div className="hidden md:block">
          <img src={loginImg} alt="Login" className="w-full h-full object-cover" />
        </div>

        {/* Right side form */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Login to Your Account</h2>

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

          {/* Google login */}
          <button className="btn w-full mb-4 bg-red-600 hover:bg-red-700 text-white">
            Continue with Google
          </button>

          {/* Login button */}
          <button className="btn btn-primary w-full mb-4">Login</button>

          {/* Terms and Links */}
          <div className="text-center text-sm text-gray-500 mt-2">
            By logging in, you agree to our <span className="text-blue-600 hover:underline cursor-pointer">Terms & Conditions</span>.
          </div>
          <div className="text-center mt-2">
            <a href="#" className="hover:underline text-sm">Forgot Password?</a>
            <Link className='text-blue-500 hover:underline' to={'/register'}>Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
