import profilePic from '../assets/pfp.png'
/** 
 * I stashed all of our stub/dummy values here.
 * It's not very good style but it's only dummy values
 */

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

// State to manage the user
const user = {
    name: 'Naman',
    profilePic: profilePic,
    projects: projects,
};

export let userInfo = user;
export let projectsInfo = projects;

export const setUserInfo = (info) => {
    userInfo = info;
}

export const setProjectsInfo = (info) => {
    projectsInfo = info;
}

export default {englishAssignmentMembers, englishAssignmentTasks};