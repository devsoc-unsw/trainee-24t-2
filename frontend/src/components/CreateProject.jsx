import '../App.css';
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
    const navigate = useNavigate();
    const closeScreen = () => {
        navigate("/dashboard");
    };

    return (
    <>
        <div className='header'>
          <h1 style={{textAlign: "center"}}>Create Project</h1>
          <button className="close-button" onClick={closeScreen}>
            x
          </button>
        </div>

        <div id="create-project-container">
          <label>Project name: <input name="projectName"/></label>
          <br/>
          <label>Members:</label>
          <br/>
          <button>Search Members</button>
          <br/>
          <label>Milestones:</label>
          <br/>
        </div>
      </>

    )
    
}

export default CreateProject;