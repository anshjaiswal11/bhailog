import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';

function Signup() {

  const navigate = useNavigate();

  const[signupinfo, setsignupinfo] = React.useState({
    username: '',
    name: '',
    email: '',
    password: ''
  });
const handleChange = async (e) => {
const { name, value } = e.target;
const newSignupInfo = { ...signupinfo, [name]: value };
setsignupinfo(newSignupInfo);

  }
const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, name, email, password } = signupinfo;
    if (!username || !name || !email || !password) {
      toast.error('Please fill in all fields');
      return;
    }
    try {
      const url = "http://localhost:3000/auth/signup"
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupinfo),
      });
      const data = await response.json(); // Only call this once!
      console.log(data);

      if (!response.ok) {
        throw new Error(data.message || 'Network response was not ok');
      }

      if (data.success) {
        toast.success('Signup successful! Redirecting to login...');
        setTimeout(() => {
          navigate('/login'); // Use React Router navigation
        }, 2000);
      } else {
        toast.error(data.message || 'Signup failed. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred: ' + error.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-4xl font-extrabold text-amber-700 text-center mb-6">
          Bhailog AI Signup
        </h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              onChange={handleChange}
              value = {signupinfo.username}

              type="text"
              id="username"
              name="username"
              required
              autoFocus
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500"
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
            value= {signupinfo.name}
              onChange={handleChange}
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              value={signupinfo.email}
            onChange={handleChange}
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              value={signupinfo.password}
              onChange={handleChange}
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500"
            />
          </div>
          <button
            
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 shadow-md"
          >
            Sign Up
          </button>
        </form>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account? <a href="/login" className="text-amber-600 hover:underline">Login here</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
