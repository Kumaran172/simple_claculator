import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import backgroundImage from './assets/sc_backgroundImg.jpg'

function App() {
  const [Result, setResult] = useState("");
  const [Number_1, setNumber_1] = useState("");
  const [Number_2, setNumber_2] = useState("");

  return (
    <div className="app-container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '100vh' }}>
      <div className='num1'>
        Number_1 : {""}
        <input
          type='number'
          onChange={(event)=> setNumber_1(event.target.value)}
        />
      </div>
      <div className='num2'>
        Number_2 : {""}
        <input type='number' 
        onChange={(event)=>{
          setNumber_2(event.target.value)
        }}/>
      </div>
      <div>
      <button onClick={()=> { 
        setResult(parseInt (Number_1) + parseInt(Number_2));
      }}>Add</button>
      <button onClick={()=> {
         setResult(parseInt (Number_1) * parseInt(Number_2));
       }}>Mul</button>
      <button onClick={()=> {
         setResult(parseInt (Number_1) - parseInt(Number_2));
       }}>Sub</button>
      <button onClick={()=> {
         setResult(parseInt (Number_1) / parseInt(Number_2));
       }}>Div</button>
      </div>
      <h2>Result is:{Result} <br/>      - MS Kumaran</h2>
    </div>
  )
}

export default App
