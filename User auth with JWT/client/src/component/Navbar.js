import React, { useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authContext } from '../context/authProvider'

const Navbar = () => {
    const {loginUser, setLoginUser} = useContext(authContext);
    const navigate = useNavigate()

    const handleSignout = () => {
        setLoginUser(null)
        navigate("/login")
    }
    useEffect(() => {

    }, [loginUser])

    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl"> KRISHNA</span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">


                        {
                            loginUser && loginUser ?
                            <>
                            <Link className="mr-5 hover:text-gray-900">{loginUser.email}</Link>
                            <button onClick={()=>handleSignout()} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Signout</button> :
                            </> :
                                <>
                                <Link className="mr-5 hover:text-gray-900" to="/login">Login</Link>
                                    <Link className="mr-5 hover:text-gray-900" to="/register">Signup</Link>
                                </>
                        }
                    </nav>
                </div>
            </header>


        </div>
    )
}

export default Navbar