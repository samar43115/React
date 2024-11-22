import React, { useContext } from 'react'
import UserContext from '../Context/UserContext';

function Login() {
    const [username, setUsername] = React.useState('');
    const [password,setPassword] = React.useState('');
    const {setUser} = useContext(UserContext);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password}); 
    }
  return (
    <div>
        <h1>Login</h1>
        <input 
            type="text"
            value={username}
            placeholder='Username'
            onChange={(e)=> setUsername(e.target.value)} 
            />
        <input 
            type="password"
            value={password}
            placeholder='Password'
            onChange={(e)=>setPassword(e.target.value)} 
            />
        <button 
            type="submit"
            onClick={handleSubmit}
            >
                Submit
        </button>
    </div>
  )
}

export default Login