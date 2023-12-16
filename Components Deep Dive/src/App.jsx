import React, {useEffect, useS, useState} from 'react';
import './App.css'
import { render } from 'react-dom';

function App() {
  const [numbers, setNumbers] = useState([1, 2, , 3, 4, 5]);
//  let doubled = numbers.map((number, index) => <li key={index}>{number * 2}</li>);

useEffect(()=>{
console.log('Mount component');
}, []);

useEffect(()=>{
  console.log('Update component-numbers');
}, [numbers])

const onClick=()=>{
    //doubled.shift();
    setNumbers(oldState=>oldState.slice(0, oldState.length-1));
  }

  if(!numbers.length){
    return null;
  }
  return (
    <div>
    <ul>
      {numbers.map((number, index)=><li data-key={index} key={index}>{number*2}</li>)}
    </ul>
    <button onClick={onClick}>Remove</button>
    </div>
  )
}

export default App
