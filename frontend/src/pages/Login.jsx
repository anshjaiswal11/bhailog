import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigate

function Login({ onLogin }) {
  const navigate = useNavigate(); // ✅ Hook for navigation

  const [loginInfo, setLoginInfo] = React.useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo(prev => ({ ...prev, [name]: value }));
  };

  const handellogin = (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    const url = "http://localhost:3000/auth/login";

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginInfo),
    })
      .then(response => {
        if (!response.ok) throw new Error('Invalid response');
        return response.json();
      })
      .then(data => {
        if (data.success) {
          toast.success('Login successful! Redirecting...');
          onLogin();
          console.log("Login API response:", data);
          localStorage.setItem('token', data.token); // Store token in localStorage
          localStorage.setItem('username', data.user.username); // Store username in localStorage
          localStorage.setItem('name', data.user.name); // Store name in localStorage
          setTimeout(() => {
            navigate('/'); // ✅ Redirect using React Router
            console.log('Navigating to dashboard...');
          }, 2000);
        } else {
          toast.error(data.message || 'Login failed. Please try again.');
        }
      })
      .catch(error => {
        toast.error('An error occurred: ' + error.message);
      });
};

return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-500 to-yellow-600 px-4">
    <div className="backdrop-blur-xl bg-white/30 shadow-2xl rounded-2xl p-8 w-full max-w-md animate-fade-in-up transition duration-700">
      <h2 className="text-4xl font-bold text-center text-white mb-6">Login to Bhailog AI</h2>

        <form onSubmit={handellogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
              Email
            </label>
            <input
              onChange={handleChange}
              value={loginInfo.email}
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/80 text-gray-800 shadow-inner focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
              Password
            </label>
            <input
              onChange={handleChange}
              value={loginInfo.password}
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/80 text-gray-800 shadow-inner focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-amber-600 font-semibold py-2 px-4 rounded-lg shadow hover:bg-amber-100 transition-transform transform hover:scale-105 duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-white text-sm">
          Don't have an account?{' '}
          <a href="/signup" className="underline text-white font-semibold hover:text-amber-100">
            Sign Up
          </a>
        </p>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover/>
    </div>
  );
}

export default Login;
