import '../App.css';
import { useNavigate } from "react-router-dom";
import {userInfo, projectsInfo} from "./DummyData";
import DashboardProgressBars from "./DashboardProgressBars";
import DisplayProject from './DisplayProject';

const Dashboard = () => {
    const navigate = useNavigate();
    const createProject = () => {
        navigate("/create-project");
    }
    const editProfile = () => {
        navigate("/profile");
    }
    let projectCards = projectsInfo.map(project =>
      // this cannot work since you're calling DisplayProject like a function call instead of
      // a React component; it needs to look like <DisplayProject project={project}></DisplayProject>
        <div onClick={() => DisplayProject({ project })}>
            <h3>{project.name}</h3>
            <DashboardProgressBars project={project}/>
        </div>
    )
    return (
        <div id="dashboard">

        <div className="header" style={{justifyContent: "space-between"}}>
          <h1>Hi {userInfo.name}!</h1>
          <img src={userInfo.profilePic} id="dashboard-profile-icon" onClick={editProfile} />
        </div>
        <button id="new-project-button" onClick={createProject}>
          New Project
        </button>
        <h2>Your Projects</h2>
        <div id="project-cards-container">
          {projectCards}  
        </div>
      </div>
    );
}
export default Dashboard;