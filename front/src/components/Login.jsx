import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../api/axios";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            // Obtener el token CSRF
            await axios.get('/sanctum/csrf-cookie');

            // Enviar la solicitud POST con el token CSRF
            await axios.post('/login', { email, password });

            // Si la solicitud es exitosa, limpiar los campos y navegar a la página de olvidó la contraseña
            setEmail('');
            setPassword('');
            navigate('/forgot-password');
        } catch (error) {
            console.log(error.response);
            // Manejo de errores
            if (error.response && error.response.status === 419) {
                setError('Error de autenticación: CSRF token mismatch');
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
