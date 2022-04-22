import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        if (username === 'admin' && password === 'admin') {
            localStorage.setItem('role', 'admin');
            navigate('/admin');
        } else if (username === 'user' && password === 'user') {
            localStorage.setItem('role', 'user');
            navigate('/user');
        } else {
            alert('Login Failed');
        }
    }

    return (
        <div>
            <p>Admin username:admin , password:admin</p>
            <p>User username:user , password:user</p>
            <h1>Login</h1>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin} >Login</button>
        </div>
    )
}