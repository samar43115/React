import { useState } from "react"

function App() {
 const [color,setColor] = useState('purple');
  return (
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap mx-48 py-3">
        <div className="flex px-48 justify-center gap-3 py-4 bg-white rounded-xl shadow-xl">
        <button className="px-5 py-2 outline-none shadow-lg text-white rounded full" style={{backgroundColor:'blue'}} 
        onClick={()=>setColor('blue')}>Blue</button>
        <button className="px-5 py-2 outline-none shadow-lg text-white rounded full" style={{backgroundColor:'green'}} 
        onClick={()=>setColor('green')}>Green</button>
        <button className="px-5 py-2 outline-none shadow-lg text-white rounded full" style={{backgroundColor:'red'}} 
        onClick={()=>setColor('red')}>Red</button>
        <button className="px-5 py-2 outline-none shadow-lg text-white rounded full" style={{backgroundColor:'yellow'}} 
        onClick={()=>setColor('yellow')}>Yellow</button>
        <button className="px-5 py-2 outline-none shadow-lg text-white rounded full" style={{backgroundColor:'grey'}} 
        onClick={()=>setColor('grey')}>Grey</button>
        </div>
        
      </div>
    </div>
  )
}

export default App
