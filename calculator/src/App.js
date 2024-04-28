import react, { useState } from 'react';
import './App.css';

export default function Calculator() {

  const [input, setInput] = useState('');
  const [result, setResult] = useState('');


  const handleInput = (value) => {

    setInput((prevInput) => prevInput + value)
  };


  const handleClear = () => {

    setInput('');
    setResult('');
  };


  const handleCalculate = () => {

    try {
      setResult(eval(input).toString());
    }
    catch(e) {
      setResult('Error');
    }
  };






  return (
    <div className="calculator">

      <h1>React Calculator</h1>

      <input type="text" className='input-field' value={input}/>

      {result && (
        <div className='result'>{result}</div>
      )}


      <div>

        <div>

          <button className='button' onClick={() => handleInput('7')}>7</button>

          <button className='button' onClick={() => handleInput('8')}>8</button>

          <button className='button' onClick={() => handleInput('9')}>9</button>

          <button className='button' onClick={() => handleInput('+')}>+</button>

        </div>

        <div>

          <button className='button' onClick={() => handleInput('4')}>4</button>

          <button className='button' onClick={() => handleInput('5')}>5</button>

          <button className='button' onClick={() => handleInput('6')}>6</button>

          <button className='button' onClick={() => handleInput('-')}>-</button>

        </div>

        <div>

          <button className='button' onClick={() => handleInput('1')}>1</button>

          <button className='button' onClick={() => handleInput('2')}>2</button>

          <button className='button' onClick={() => handleInput('3')}>3</button>

          <button className='button' onClick={() => handleInput('*')}>*</button>

        </div>

        <div>

          <button className='button' onClick={handleClear}>C</button>

          <button className='button' onClick={() => handleInput('0')}>0</button>

          <button className='button' onClick = {handleCalculate}>=</button>

          <button className='button' onClick={() => handleInput('/')}>/</button>

        </div>

      </div>


    </div>
  );
}


