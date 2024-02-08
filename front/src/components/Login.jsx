import {Link} from "react-router-dom";

function Login(){

    return (
        <>
            <div className="background"></div>
            <div className="card">
                <img alt="logo" className="logo" src="src/assets/react.svg"/>
                <h2>Login</h2>
                <form className="form">
                    <input type="email" placeholder="Usuario"/>
                    <input type="password" placeholder="Contraseña"/>

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