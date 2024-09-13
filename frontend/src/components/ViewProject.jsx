import '../App.css';
import { useNavigate } from "react-router-dom";

const ViewProject = () => {
    const navigate = useNavigate();
    const backToDash = () => {
        navigate("/dashboard")
    };
    return (
        <>
            <div className="header" style={{justifyContent: "space-between"}}>
                <h1>English Assignment</h1>
                <DisplayProject project={currentProject}/>
            </div>
            <div className='project-ribbon'></div>
            <div className='graph-milestone-labels'></div>
            <button onClick={backToDash} id="return-dash">Back</button>
            {/* Function for individual progress bars */}
        </>
    );
}

export default ViewProject;