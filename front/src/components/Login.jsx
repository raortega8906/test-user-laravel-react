import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../api/axios";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const csrf = () => {
      axios.get('/sanctum/csrf-cookie')
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        await csrf();

        try {
            // Enviar la solicitud POST con el token CSRF
            await axios.post('/login', { email, password });

            // Si la solicitud es exitosa, limpiar los campos y navegar a la página de olvidó la contraseña
            setEmail('');
            setPassword('');
            navigate('/dashboard');
        } catch (error) {
            console.log(error.response);
            // Manejo de errores
            if (error.response && error.response.status === 422) {
                setError('Error en la conexión, verifique.');
            } else {
                 setError('Error de conexión. Por favor, inténtalo de nuevo más tarde.');
            }
        }
    }

    return (
        <>
            <div className="background"></div>
            <div className="card">
                <img alt="logo" className="logo" src="src/assets/react.svg" />
                <h2>Login</h2>
                <form onSubmit={handleLogin} className="form">
                    <input type="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           placeholder="Usuario" required />
                    <input type="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           placeholder="Contraseña" required />
                    {/*<span>error</span>*/}
                    <button type="submit">Login</button>
                </form>

                {error && <p className="error">{error}</p>}

                <footer>
                    <Link to="/forgot-password" className="navbar-link">Olvidé la contraseña</Link>
                    <br /><br />
                    <Link to="/register" className="navbar-link">Registro</Link>
                </footer>
            </div>
        </>
    )
}

export default Login;
