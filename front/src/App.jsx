import { Link, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Forgot from "./components/Forgot";
import Dashboard from "./components/Dashboard";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/forgot-password" element={<Forgot/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
            </Routes>
        </>
    )
}

export default App
