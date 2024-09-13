import '../App.css';
import {userInfo, setUserInfo, projectsInfo, setProjectsInfo} from "./DummyData";
function DashboardProgressBars ({project}) {
    let progressBars = project.members.map(member => 
      <div className="small-progress-bar-container">
        <div className="small-progress-bar" style={{width: `${(member.tasksCompleted / project.totalTasks) * 100}%`}}>
            <img className="small-progress-img" src={userInfo.profilePic}/>
            <span className="name">{member.name}</span>
        </div>
      </div>
    );
    return progressBars;
};

export default DashboardProgressBars;