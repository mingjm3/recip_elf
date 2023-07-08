import {React} from 'react';
import { useState } from 'react';
function Login(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
return (
    <div>
<h1>Login</h1>
<h3>Welcome to NutriGenie</h3>
 <form>
    <div>
    <label htmlFor=''>Email : </label>
 <input 
  name = 'email'
  type = 'text'
  placeholder='Email or Username'
  required
  value={email}
  onChange={(e)=>setEmail(e.target.value)}
 />
    </div>
    <div>
    <label htmlFor=''>Password : </label>
 <input 
  name = 'password'
  type = 'text'
  placeholder='password'
  required
  value={password}
  onChange={(e)=>setPassword(e.target.value)}
 />
    </div>
<button>Login</button>
 </form>
    </div>
)
}

export  default Login