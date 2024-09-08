import { useState } from 'react'
import reactLogo from './assets/react.svg'
import profilePic from './assets/pfp.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // Dummy/placeholder values
  const englishAssignmentMembers = [
    {name: 'Naman', tasksCompleted: 4},
    {name: 'Leon', tasksCompleted: 3},
    {name: 'Rushik', tasksCompleted: 3},
    {name: 'Kobe', tasksCompleted: 2},
  ];

  const englishAssignmentTasks = [
    'Read Source Material', 'Analyse Critical Readings', 'Gather Quotes', 'Write Essay', 'Proofread Peers'
  ];

  const projects = [
    {name: 'English Assignment', members: englishAssignmentMembers, totalTasks: 5, tasks: englishAssignmentTasks, id: 1},
    {name: 'English Assignment', members: englishAssignmentMembers, totalTasks: 5, tasks: englishAssignmentTasks, id: 2},
  ];

  const user = {
    name: 'Naman',
    profilePic: profilePic,
    projects: projects,
  };

  // State to manage the current screen
  const [currentScreen, setCurrentScreen] = useState("dashboard");

  // State to manage the user
  const [userInfo, setUserInfo] = useState(user);

  // State to manage projects
  const [projectsInfo, setProjectsInfo] = useState(projects);

  // Functions to open screens
  // TODO: Integrate thse functions into onclick things for buttons to reduce code
  const createProject = () => {
    setCurrentScreen("createProject");
  };

  const editProfile = () => {
    setCurrentScreen("profile");
  };

  const closeScreen = () => {
    setCurrentScreen("dashboard");
  };

  function DashboardProgressBars ({project}) {
    let progressBars = project.members.map(member => 
      <div className="small-progress-bar-container">
        <div className="small-progress-bar" style={{width: `${(member.tasksCompleted / project.totalTasks) * 100}%`}}>
            <img className="small-progress-img" src={user.profilePic}/>
            <span className="name">{member.name}</span>
        </div>
      </div>
    );

    return progressBars;
  };

  // To render project cards
  // TODO: Add on click with paramaters/props to open the project screen
  let projectCards = projectsInfo.map(project =>
    <div>
      <h3>{project.name}</h3>
      <DashboardProgressBars project={project}/>
    </div>
  );

  let content;

  if (currentScreen == "login") {
    content = (
      <>
        <button onClick = {login}>Login</button>
      </>
    );
  } else if (currentScreen == "dashboard") {
    content = (
      <div id="dashboard">

        <div className="header" style={{justifyContent: "space-between"}}>
          <h1>Hi {user.name}!</h1>
          <img src={user.profilePic} id="dashboard-profile-icon" onClick={editProfile} />
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
  } else if (currentScreen == "createProject") {
    content = (
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
          <button>Share link</button>
          <button>Add known members</button>
          <br/>
          <label>Milestones:</label>
        </div>
      </>
    );
  } else if (currentScreen == "profile") {
    content = (
      <>
      <div className='header'>
        <h1>Edit profile</h1>
        <button className="close-button" onClick={closeScreen}>
          x
        </button>
      </div>
        
        <div id="profile-page-container">
          <img src={user.profilePic} id="large-profile-icon" onClick={editProfile} />
          <br/>
          <label id="large-name">{user.name}</label>
          <br/>
          <button id="delete-profile-button">Delete Profile</button>
        </div>
      </>
    );
  }

  return (
    <>
      {content}
    </>
  );
}

export default App
