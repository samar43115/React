import { useState } from "react";

function App() {

  const [counter,setCounter] = useState(0)
  
  // let counter = 1;
  
  const incrementCount =()=>{
    setCounter(counter+1);
    console.log('Button Clicked', `${counter}`);
  }

  const decrementCount =()=>{
    if(counter>0) setCounter(counter-1);  // counter value should be greater than 0 if it is equal then it means decrement operation can be executed one more time
  }
  return (
    <>
      <h1>Counter App</h1>
      <div>
        <h2>Value {counter}</h2>
        {/* In onClick we have to pass only reference so that it does not get executed without clicking */}
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
      </div>
    </>
  )
}

export default App
