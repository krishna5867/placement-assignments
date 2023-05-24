import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email,setEmail] = useState();
  const [password, setPassword] = useState()

  const apiUrl = 'https://reqres.in/api';

  // Send login request
  const loginData = {
    email: email,
    password: password
  };
  
const handleLogin = (e) => {
  e.preventDefault();

  fetch(`${apiUrl}/login`, {
    method: 'POST',
    body: JSON.stringify(loginData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (response.ok) {
        // Successful login
        alert('Login successful!');
        return response.json();
      } else {
        // Login failed
        throw new Error('Login failed');
      }
    })
    .then(data => {
      const token = data.token;
  
      // Redirect to dashboard
      const dashboardUrl = `${apiUrl}/dashboard`;
      return fetch(dashboardUrl, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    })
    .then(response => {
      if (response.ok) {
        // Successful redirect to dashboard
        console.log('Redirected to dashboard!');
        return response.json();
        // Process the dashboard data as needed
      } else {
        // Failed to redirect to dashboard
        throw new Error('Failed to redirect to dashboard');
      }
    })
    .catch(error => {
      console.error(error);
    });
}
  


  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-5 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            {/* Email */}
            <div>
              <div className="flex items-center justify-between">
                <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
              </div>
              <div className="mt-2">
                <input id="email" name="email" onChange={(e)=> setEmail(e.target.value)} type="email"  autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg p-2 sm:leading-6" />
              </div>
            </div>
            {/* Password */}
            <div>
              <div className="flex items-center justify-between">
                <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              </div>
              <div className="mt-2">
                <input id="password" onChange={(e)=> setPassword(e.target.value)} name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg p-2 sm:leading-6" />
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign In</button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have account? &nbsp;
            <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register</Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login