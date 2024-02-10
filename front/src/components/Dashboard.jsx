import {Link} from "react-router-dom";

function Dashboard(){

    return (
        <>
            <div className="background"></div>
            <div className="card">
                <img alt="logo" className="logo" src="src/assets/react.svg"/>
                <h2>Dashboard</h2>

                <footer>
                    <Link to="/" className="navbar-link">Iniciar sesión</Link>
                    <br></br>
                    <br></br>
                    <Link to="/register" className="navbar-link">Registro</Link>
                </footer>
            </div>
        </>
    )

}

export default Dashboard;