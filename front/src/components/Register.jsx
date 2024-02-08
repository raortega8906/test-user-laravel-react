import {Link} from "react-router-dom";

function Register(){

    return (
        <>
            <div className="background"></div>
            <div className="card">
                <img alt="logo" className="logo" src="src/assets/react.svg"/>
                <h2>Registro</h2>
                <form className="form">
                    <input type="text" placeholder="Nombre"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Contraseña"/>
                    <input type="password" placeholder="Confirmar contraseña"/>
                    <button>Registrar</button>
                </form>

                <footer>
                    <Link to="/forgot" className="navbar-link">Olvidé la contraseña</Link>
                    <br></br>
                    <br></br>
                    <Link to="/" className="navbar-link">Login</Link>
                </footer>
            </div>
        </>
    )

}

export default Register;