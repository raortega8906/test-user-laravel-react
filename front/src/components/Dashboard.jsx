import { useNavigate } from 'react-router-dom';


function Dashboard(){
    const navigateTo = useNavigate();

    return (
        <>
            <div className="background"></div>
            <div className="card">
                <img alt="logo" className="logo" src="src/assets/react.svg"/>
                <h2>Dashboard</h2>
            </div>
        </>
    );
}

export default Dashboard;
