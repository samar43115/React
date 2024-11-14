import { useState, useCallback, useEffect,useRef } from 'react'

function App() {

  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  
  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*-_+=[]{}~'

    for (let i = 0; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length) + 1;
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [numberAllowed, charAllowed, length])

  useEffect(() => {
    passwordGenerator();
  }, [numberAllowed, charAllowed, length,passwordGenerator])


  const copyToClipboard = useCallback(()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(password);
  },[password])

  return (
    <div className="max-w-xl bg-gray-700 shadow-lg my-8 mx-auto py-5 rounded-xl text-orange-500">
      <h1 className="text-3xl text-center text-white">Password Generator</h1>
      <div className="flex my-4 gap-x-2">
        <input
          type="text"
          className="outline-none w-full rounded-lg py-3"
          value={password}
          readOnly
          ref={passRef}
        />
        <button className="bg-blue-600 text-white rounded-lg px-3 hover:bg-blue-900" onClick={copyToClipboard}>copy</button>
      </div>
      <div className="flex gap-x-4">
        <div className="flex gap-x-1">
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            className="cursor-pointer"
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label>length:{length}</label>
        </div>
        <div className="flex gap-x-2">
          <input
            type="checkbox"
            id="number"
            value={numberAllowed}
            onClick={() => {
              setNumberAllowed((prev) => !prev)
            }
            }
          />
          <label htmlFor="number">Number</label>
        </div>
        <div className="flex gap-x-2">
          <input
            type="checkbox"
            id="character"
            value={charAllowed}
            onClick={() => {
              setcharAllowed((prev) => !prev)
            }
            }
          />
          <label htmlFor="character">Character</label>
        </div>
      </div>

    </div>

  )
}

export default App;
