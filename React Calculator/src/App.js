import React,{useState} from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleInput = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = eval(input);
      setInput(calculatedResult.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="App">
      <div className='calculator'>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      
      <button onClick={() => handleInput('1')}>1</button>
      <button onClick={() => handleInput('2')}>2</button>
      <button onClick={() => handleInput('3')}>3</button>
      <button onClick={() => handleInput('4')}>4</button>
      <button onClick={() => handleInput('5')}>5</button>
      <button onClick={() => handleInput('6')}>6</button>
      <button onClick={() => handleInput('7')}>7</button>
      <button className='operator' onClick={() => handleInput('+')}>+</button>
      <button onClick={() => handleInput('8')}>8</button>
      <button onClick={() => handleInput('9')}>9</button>
      <button onClick={() => handleInput('0')}>0</button>
      <button className='operator' onClick={() => handleInput('-')}>-</button>
      <button className='operator'  onClick={handleClear}>Clear</button>
      <button className='operator' onClick={() => handleInput('/')}>/</button>
      <button className='operator' onClick={() => handleInput('*')}>*</button>
      <button className='operator'  onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
}

export default App;



