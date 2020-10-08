import React, {useState} from 'react';
import './App.css';
import PropTypes from 'prop-types';

function App() {
  const [counter, setCounter] = useState(0)
    const [value, setValue] = useState('')
     const increment = () => {
        setCounter(prev => prev + 1)
    }
     const decrement = () => {
      counter > 0 ? setCounter(prev => prev - 1) : alert('число не должно быть отрицательным')
    }
    const handleChange = (event) => {
     setValue(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
       value > 0 ? setCounter(value) : alert('число не должно быть отрицательным')
        setValue("")
    }
  return (
    <div>
      <h1>Счётчик {counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
        <br />
          <form onSubmit={handleSubmit} >
              <input id="input" type="number" placeholder="Введите число" value={value} onChange={handleChange}/> <button type="submit">установить значение</button>
          </form>
    </div>
  );
}

export default App;

App.propTypes = {
  count: PropTypes.number
};