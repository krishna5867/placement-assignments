import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className="bg-slate-700 text-white">
                <div className="flex flex-wrap p-5 flex-co sm:flex-row justify-between items-center  align-baseline py-3">
                    <Link to="/">
                        <span className="ml-3 text-2xl font-extrabold">TASK</span>
                    </Link>
                    <div>
                    <Link to='/login'>
                        <button className="inline-flex items-center bg-slate-900 border-0 py-1 px-3 focus:outline-none text-white hover:bg-slate-600 font-bold rounded-2xl text-base md:mt-0">Login</button>
                    </Link>
                    <Link to='/register'>
                        <button className="ms-5 inline-flex items-center bg-slate-900 border-0 py-1 px-3 focus:outline-none text-white hover:bg-slate-600 font-bold rounded-2xl text-base md:mt-0">Register</button>
                    </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header

