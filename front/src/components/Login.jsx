import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "../api/axios";

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try{
            await axios.post('/login', {email, password});
            setEmail('')
            setPassword('')
            navigate('/forgot')
        }catch (e){
            console.log(e)
        }
    }

    return (
        <>
            <div className="background"></div>
            <div className="card">
                <img alt="logo" className="logo" src="src/assets/react.svg"/>
                <h2>Login</h2>
                <form onSubmit={handleLogin} className="form">
                    <input type="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           placeholder="Usuario"/>
                    <input type="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           placeholder="Contraseña"/>

                    <button>Login</button>
                </form>

                <footer>
                    <Link to="/forgot" className="navbar-link">Olvidé la contraseña</Link>
                    <br></br>
                    <br></br>
                    <Link to="/register" className="navbar-link">Registro</Link>
                </footer>
            </div>
        </>
    )

}

export default Login;