import React, { useState, useContext } from 'react'
import { ThemeContext } from './ThemeProvider'
import Sun from '../Assets/sun.png';
import Moon from '../Assets/moon.png'
const Counter = () => {
    const [count, setCount] = useState(0)
    const { dark, setDark } = useContext(ThemeContext);
    return (
        <div className={`${dark ? 'dark' : 'light'}`} style={{ height: '100vh', padding:'10px' }}>
            <img
                src={dark ? Sun : Moon}
                alt="Dark Mode"
                style={{
                    height: '40px',
                    position: 'absolute',
                    right: '20px',
                    top: '20px',
                    cursor: 'pointer',
                }}
                onClick={() => setDark(!dark)}
            />
            <div>
                <h1>Counter App</h1>
                <span>{count}</span>
                <br />
                <button className={`btn-dec ${dark ? 'dark' : 'light'}`} onClick={() => setCount(count - 1)}>Decrement</button>
                <button className={`btn-reset ${dark ? 'dark' : 'light'}`} onClick={() => setCount(0)}>Reset</button>
                <button className={`btn-inc ${dark ? 'dark' : 'light'}`} onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        </div>

    )
}

export default Counter