import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../api/axios";

function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const csrf = () => {
        axios.get('/sanctum/csrf-cookie')
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        await csrf();

        try {
            if (password !== confirmPassword) {
                setError('Las contraseñas no coinciden');
                return;
            }

            await axios.post('/register', { name, email, password, password_confirmation: confirmPassword });

            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            navigate('/dashboard');
        } catch (error) {
            console.log(error.response);

            if (error.response && error.response.status === 422) {
                setError('Error: Verifique los datos ingresados');
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
                <h2>Registro</h2>
                <form onSubmit={handleRegister} className="form">
                    <input type="text"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           placeholder="Nombre" required />
                    <input type="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           placeholder="Correo electrónico" required />
                    <input type="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           placeholder="Contraseña" required />
                    <input type="password"
                           value={confirmPassword}
                           onChange={(e) => setConfirmPassword(e.target.value)}
                           placeholder="Confirmar Contraseña" required />

                    <button type="submit">Registrarse</button>
                </form>

                {error && <p className="error">{error}</p>}

                <footer>
                    <Link to="/" className="navbar-link">Iniciar sesión</Link>
                </footer>
            </div>
        </>
    )
}

export default Register;
