import '../App.css';
import { useNavigate } from "react-router-dom";

function DisplayProject ({project}) {
    const navigate = useNavigate();
    
    const closeScreen = () => {
        navigate("/dashboard");
    };

    return (
        <>
            <div className='header'>
                <h1>{project}</h1>
                <button className="close-button" onClick={closeScreen}>
                    x
                </button>
            </div>
        </>
    );
};

export default DisplayProject;