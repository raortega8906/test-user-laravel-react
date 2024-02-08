import {Link} from "react-router-dom";

function Forgot(){

    return (
        <>
            <div className="background"></div>
            <div className="card">
                <img alt="logo" className="logo" src="src/assets/react.svg"/>
                <h2>Login</h2>
                <form className="form">
                    <input type="email" placeholder="Email"/>
                    <button>Recuperar Contraseña</button>
                </form>

                <footer>
                    <Link to="/" className="navbar-link">Login</Link>
                    <br></br>
                    <br></br>
                    <Link to="/register" className="navbar-link">Registro</Link>
                </footer>
            </div>
        </>
    )

}

export default Forgot;