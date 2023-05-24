import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const registerUser = async () => {
    try {
      const res = await axios.post('/createUser', { name, email, password })
      if (res.data.success) {
        navigate("/login");
        setName(" ");
        setEmail(" ");
        setPassword(" ")
        alert(res.data.message)
      } else {
        alert(res.data.message)
      }
    } catch (error) {
      console.log(error);

    }
  }

  const handleRegister = (e) => {
    e.preventDefault();
    registerUser()
  }
  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create your account</h2>
        </div>
        {/* Name */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleRegister}>
            <div>
              <div className="flex items-center justify-between">
                <label for="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
              </div>
              <div className="mt-2">
                <input id="name" name="name" type="name" value={name} onChange={(e) => setName(e.target.value)} autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg p-2 sm:leading-6" />
              </div>
            </div>
            {/* Email */}
            <div>
              <div className="flex items-center justify-between">
                <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
              </div>
              <div className="mt-2">
                <input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg p-2 sm:leading-6" />
              </div>
            </div>
            {/* Password */}
            <div>
              <div className="flex items-center justify-between">
                <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              </div>
              <div className="mt-2">
                <input id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm p-2 sm:leading-6" />
              </div>
            </div>
            {/* Register Button */}
            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create Account</button>
            </div>
          </form>
          {/* Link  */}
          <p className="mt-10 text-center text-sm text-gray-500">
            Already have account? &nbsp;
            <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Register