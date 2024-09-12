import { useState } from 'react'
import profilePic from './assets/pfp.png'
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
  const [currentScreen, setCurrentScreen] = useState("login");

  // State to manage the user
  const [userInfo, setUserInfo] = useState(user);

  // State to manage projects
  const [projectsInfo, setProjectsInfo] = useState(projects);

  // Functions to open screens
  // TODO: Integrate these functions into onclick things for buttons to reduce code
  const createProject = () => {
    setCurrentScreen("createProject");
  };

  const editProfile = () => {
    setCurrentScreen("profile");
  };

  const closeScreen = () => {
    setCurrentScreen("dashboard");
  };

  const viewProject = () => {
    setCurrentScreen("viewProject");
  };

  const login = () => {
    setUserInfo(user);
    setCurrentScreen("dashboard");
  }

  const returnToDash = () => {
    setCurrentScreen("dashboard");
  }

  const loginPage = () => {
    setCurrentScreen("login")
  };

  const createAccount = () => {
    setCurrentScreen("createAccount");
  }

  const signOut = () => {
    setCurrentScreen("login")
  };

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

  let content;

  // TODO: View Projects screen
  let currentProject;
  function DisplayProject ({project}) {
    setCurrentScreen("viewProject")
    currentProject = project;

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

  // To render project cards
  // TODO: Add on click with paramaters/props to open the project screen
  let projectCards = projectsInfo.map(project =>
    <div onClick={() => DisplayProject({ project })}>
      <h3>{project.name}</h3>
      <DashboardProgressBars project={project}/>
    </div>
  );

  if (currentScreen == "login") {
    content = (
      <>
      <div className='header' style={{display: "block", textAlign:"center"}}>
        <h1>Welcome to StudyPal!</h1>
        <p>The collaborative study platform.</p>
      </div>
        <div className="login-signup-container">
          <p style={{fontSize:"22px"}}>Login or create an account</p>
          <input className='username-input' name="username" placeholder='Username'></input>
          <input className='password-input' name="password" placeholder='Password'></input>
          <button className='login-button' onClick = {login}>Login</button>
          <p className='login-subtext'>Don't have an account?</p>
          <a style={{color:"#8C67E8", margin:"auto", display:"block"}} className='login-subtext' onClick={createAccount}>Sign Up</a>
        </div>
      </>
    );
  } else if (currentScreen == "createAccount") {
    content = (
      <>
        <div className='header'>
          <h1>Create an Account</h1>
          <button className="close-button" onClick={loginPage}>
            x
          </button>
        </div>
        <div className="login-signup-container">
          <p style={{fontSize:"22px"}}>Create an Account</p>
          <input className='username-input' name="username" placeholder='Username'></input>
          <input className='password-input' name="password" placeholder='Password'></input>
          <button className='login-button' onClick = {login}>Create Account</button>
        </div>
      </>
    );
  } else if (currentScreen == "dashboard") {
    content = (
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
          <button>Search Members</button>
          <br/>
          <label>Milestones:</label>
          <br/>
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
          <img src={userInfo.profilePic} id="large-profile-icon" onClick={editProfile} />
          <br/>
          <label id="large-name">{userInfo.name}</label>
          <br/>
          <button id="profile-options">Delete Profile</button>
          <button onClick={signOut} id="profile-options">Sign Out</button>
        </div>
      </>
    );
  } else if (currentScreen == "viewProject") {
    content = (
      <>
        <div className="header" style={{justifyContent: "space-between"}}>
          <h1>English Assignment</h1>
          <DisplayProject project={currentProject}/>
        </div>
        <div className='project-ribbon'></div>
        <div className='graph-milestone-labels'></div>
        <button onClick={returnToDash} id="return-dash">Back</button>
        {/* Function for individual progress bars */}
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
