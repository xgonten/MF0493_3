import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../Hooks/useUser';
import '../css/SignIn.css'

export default function SignIn() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const navigate = useNavigate();

     const { signIn, error } = useUser()

     const handleSubmit = e => {
        e.preventDefault()
        signIn(email, password)
       // console.log('fsfs',error)
        if(error) return 
        navigate("/")
     }

  return (
    <div className='sign-in'>
        <form className="card-log" onSubmit={handleSubmit}>
            <h1>LOG IN</h1>
            <input type="email" placeholder='E-mail' value={email} onChange ={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder='Password' value={password} onChange ={(e) => setPassword(e.target.value)}/>
            <button className='sign-btn'>LOG IN</button>
            {error?.message}
        </form>
    </div>
  )
}
