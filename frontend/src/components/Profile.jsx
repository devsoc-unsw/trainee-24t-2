import '../App.css';
import { useNavigate } from "react-router-dom";
import {userInfo} from "./DummyData";

const Profile = () => {
    const navigate = useNavigate();
    const backToDash = () => {
        navigate("/dashboard");
    };
    const editProfile = () => {
        navigate("/edit-profile");
    }
    const signOut = () => {
        navigate("/login");
    }
    return (
        <>
        <div className='header'>
        <h1>Edit profile</h1>
        <button className="close-button" onClick={backToDash}>
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
    )
}

export default Profile;