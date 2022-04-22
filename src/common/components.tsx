import { useNavigate } from "react-router-dom";




export function Logout() {

    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem('role');
        navigate('/');
    }

    return <button onClick={handleLogout}>Logout</button>
}